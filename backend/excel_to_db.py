import pandas as pd
import mysql.connector


# Script Conversion for Excel file to SQL Database - 
df = pd.read_csv("Student-2024-25.csv")
df.drop([0], inplace=True)
# print(df)


#Data Cleaning - removing value spaces and NAN Value, 
cleaned_data = []
# print(df.iloc[2660])
for i in range(0, len(df)):
    value = list(df.iloc[i])
    for i in range(0, len(value)) : 
        value[i] = str(value[i]).strip()
    value = value[1:]
    value[0] = value[0][:-2]
    value[5] = value[5][:2]
    cleaned_data.append(value)
#----OPTIONAL-> Storing in new csv file, cleaned dataset 
cleaned_df = pd.DataFrame(cleaned_data)
# cleaned_df.to_csv("clean.csv", header=False, index= False)

#students database -> student_id, password (FIRSTNAME@student_id), DEPT, CLASS
#print(cleaned_data[0])
#-------------------->Configuration students database structure<-------------------------------------------------------------#
all_students = []
for data in cleaned_data :
    students = []

    students.append(int(data[0]))
    students.append(f'{data[1]} {data[3]}')
    students.append(f'{data[1]}@{data[0]}')
    students.append(data[4])
    students.append(data[5])
    all_students.append(students)

# print(all_students[0])

#CREATION OF DATABASE CONNECTION INSTANCE
#--------------> MAKE SURE DATABASE : ojus WITH TABLE : students is already defined <-------------------#
conn = mysql.connector.connect(
    host = "localhost",
    user = "root",
    password = "1234",
    database = "ojus"
)

cursor = conn.cursor()

for student in all_students:
    query = "INSERT INTO students (student_id, name, password, dept, class) VALUES (%s, %s, %s, %s, %s)"
    cursor.execute(query, student)


conn.commit()
print("Database Queries executed successfully")
cursor.close() 
conn.close()   