from flask import Flask, request, jsonify, make_response,  session , json, redirect, url_for
from flask_cors import CORS
from flask_cors import CORS
from flask_mail import Mail, Message
from datetime import timedelta
import mysql.connector
from data import sports_data
import csv
import pandas as pd
app = Flask(__name__)
CORS(app, supports_credentials=True, origins=["http://localhost:5175"])
password = "fhbk edwz jpux rfxu"
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = 'baymaxbots@gmail.com'
app.config['MAIL_PASSWORD'] = password
app.config['MAIL_USE_SSL'] = False
mail = Mail(app)
app.secret_key = "1234567890" 
app.config.update(SESSION_COOKIE_SAMESITE="None", SESSION_COOKIE_SECURE=True)
conn = mysql.connector.connect(
    host = "localhost",
    user = "root",
    password = "1234",
    database = "ojus"
)

cursor = conn.cursor()



@app.route('/sports/<sport>/<category>', methods = ['GET'])
def get_sports_info(sport, category):
    print("hiii")
    logo = sports_data[sport]["logo"]
    data = {sport: sports_data[sport][category]} 
    print(data)
    response = {"logo" : logo, "data" : data}
    return jsonify(response), 200 

@app.route('/validation', methods = ["POST"])
def validation():
    moodle_id = request.json.get("id")
    password = request.json.get("password")

    #print(moodle_id, password)

    if not moodle_id or not password :
        return jsonify({"message" : "Please write all the fields "}), 400 

    else :
        query = "SELECT * FROM students WHERE student_id = %s"
        cursor.execute(query , (moodle_id, ))
        output = cursor.fetchone()

        if output == None :
            return jsonify({"message" : "Incorrect Moodle id "}), 400 
        
        if output[2] != password :
            return jsonify({"message" : "Incorrect Password"}), 400 
    print(output)
    name = output[1]
    print("see meeee ")

    session["user_info"] = output



    cookie_data = json.dumps({"id": moodle_id, "name": name, "dept" : output[3], "class" : output[4]})

    response = jsonify({"message": "Correct Password", "id": moodle_id, "name": name, "dept" : output[3], "class" : output[4]})
    response.set_cookie("user_data", cookie_data, max_age=60*60*24*7)
    return response, 201

def send_mail(email, selection):
            msg = Message(subject="OJUS SPORTS 2025 CONFIRMATION", 
                        sender = "baymaxbots@gmail.com",
                        recipients= [email])
            msg.body = f'''
                        Your Registration for {selection} has been confirmed, 
                        Please refer to the website for dates and timing.
                        Thank You For participation in OJUS SPORTS 2025.
                        ALL THE BEST
                        '''
            mail.send(msg)


def update_excel(data):
    CSV_FILE = 'backend\sports.csv'
    
    # Ensure the CSV file exists with headers if it's empty
    try:
        with open(CSV_FILE, mode='a', newline='') as file:
            writer = csv.writer(file)
            
            # Check if file is empty to write headers
            if file.tell() == 0:
                writer.writerow(['id', 'name', 'email', 'phone_no', 'dept', 'class', 'selection'])
            
            # Append the tuple data
            writer.writerow(data)
            
        print("Data appended successfully to sports.csv")
    except Exception as e:
        print(f"Error updating CSV: {e}")

@app.route('/register', methods = ['GET', 'POST'])
def register() :
    student = request.json.get("user")
    selection = request.json.get("sport")
    
    if not student or not selection : 
        return jsonify({"message" : "Please write all the fields "}), 400 
    else :
        print(selection)
        print(student)
        if "user_info" in session :
            print("session stuff")
            print(session["user_info"])
            output = session["user_info"]

            query_check = "SELECT * FROM sports WHERE student_id = %s AND selection = %s"
            cursor.execute(query_check, (int(output[0]), selection))
            existing_entry = cursor.fetchone()

            if existing_entry:
                return jsonify({"message": "This student has already selected this sport."}), 400


            data = (int(output[0]), output[1], student['email'], student['phone_no'], output[3], output[4], selection)
            #Store in DB

            query = "INSERT INTO sports (student_id, name, email, phone_no, dept, class, selection) VALUES (%s, %s, %s, %s, %s, %s, %s)"
            print(data)
            cursor.execute(query, data)
            conn.commit()
            print("Database Queries executed successfully")
            update_excel(data)
    #------------------->SEND EMAIL<--------------------------
            #send_mail(student['email'], selection)

            return jsonify({"message" : "Your registration is successful"}), 201 
        else : 
            return redirect(url_for('login'))
if __name__ == "__main__":
    app.run(debug=True)