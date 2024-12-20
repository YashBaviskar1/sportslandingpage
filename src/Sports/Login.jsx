import React from 'react';
import './login.css'; // Assuming you have a separate CSS file for styling.

const Login = () => {
  return (
    <div className="ring">
      <i style={{ "--clr": "#00ff0a" }}></i>
      <i style={{ "--clr": "#ff0057" }}></i>
      <i style={{ "--clr": "#fffd44" }}></i>
      <i style={{ "--clr": "#fff" }}></i>  
      <div className="login">
        <h2>Login</h2>
        <div className="inputBx">
          <input type="text" placeholder="Moodle ID" />
        </div>
        <div className="inputBx">
          <input type="password" placeholder="Password : FIRSTNAME@moodle_id" />
        </div>
        <div className="inputBx">
          <input type="email" placeholder="Email" />
        </div>
        <div className="inputBx">
          <input type="text" placeholder="Phone No" />
        </div>
        <div className="inputBx">
          <input type="submit" value="Sign in" />
        </div>
      </div>
    </div>
  );
};

export default Login;
