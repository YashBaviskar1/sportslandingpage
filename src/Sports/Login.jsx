import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './login.css'; 
import Cookies from "js-cookie";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const [formData, setFormData] = useState({
    id: "",
    password: "",
    email: "",
    phone_no: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const setCookie = (data) => {
    Cookies.set("userData", JSON.stringify(data));
  };

  const logCookie = () => {
    const data = Cookies.get("userData");
    console.log("Cookie Data:", JSON.parse(data));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.id || !formData.password || !formData.email || !formData.phone_no) {
      toast.error("All fields are required!", { position: "top-right" });
      return;
    }

    setLoading(true);
    setError("");

    const url = "http://127.0.0.1:5000/validation";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
      credentials: "include",
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();

      if (response.status !== 200 && response.status !== 201) {
        setError(data.message || "An error occurred!");
        toast.error(data.message || "Login failed!", { position: "top-right" });
      } else {
        toast.success("Login Successful!", { position: "top-right" });
        setCookie({ 
          id: formData.id,
          email: formData.email,
          phone_no: formData.phone_no,
          name: data.name // Assuming 'name' comes from API response
        });
        logCookie();
        navigate("/sports", { state: { name: data.name } });
      }
    } catch (err) {
      console.log(err);
      setError("Failed to connect to the server!");
      toast.error("Server connection failed!", { position: "top-right" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ring">
      <i style={{ "--clr": "#00ff0a" }}></i>
      <i style={{ "--clr": "#ff0057" }}></i>
      <i style={{ "--clr": "#fffd44" }}></i>
      <div className="login">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="inputBx">
            <input
              type="text"
              name="id"
              placeholder="Moodle ID"
              value={formData.id}
              onChange={handleChange}
            />
          </div>
          <div className="inputBx">
            <input
              type="password"
              name="password"
              placeholder="Password : FIRSTNAME@moodle_id"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="inputBx">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="inputBx">
            <input
              type="text"
              name="phone_no"
              placeholder="Phone No"
              value={formData.phone_no}
              onChange={handleChange}
            />
          </div>
          <div className="inputBx">
            <input type="submit" value="Sign in" disabled={loading} />
          </div>
        </form>
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
};

export default Login;
