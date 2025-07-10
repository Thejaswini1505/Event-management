


import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./CustomerLogin.css";

const CustomerLogin = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const url = isLogin
      ? "http://localhost:3000/api/customers/login"
      : "http://localhost:3000/api/customers/register";

    try {
      const res = await axios.post(url, form);

      if (isLogin) {
        const token = res.data.token;
        const customer = res.data.customer;

        localStorage.setItem("token", token);
        localStorage.setItem("customer", JSON.stringify(customer));

        const decoded = jwtDecode(token);
        localStorage.setItem("customerId", decoded.id);

        toast.success("Login Successful");

        setTimeout(() => {
          navigate("/customer-dashboard");
        }, 1500);
      } else {
        toast.success("Registration Successful, Please Login");
        setIsLogin(true);
      }
    } catch (err) {
      toast.error("Error: " + (err.response?.data?.message || err.message));
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>{isLogin ? "Customer Login" : "Customer Register"}</h2>

        {!isLogin && (
          <input
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
          />
        )}

        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />

        <button onClick={handleSubmit}>
          {isLogin ? "Login" : "Register"}
        </button>

        <p onClick={() => setIsLogin(!isLogin)}>
          {isLogin
            ? "Don't have an account? Register"
            : "Already have an account? Login"}
        </p>
      </div>

      {/* Toast Notifications */}
      <ToastContainer position="top-center" autoClose={1000} />
    </div>
  );
};

export default CustomerLogin;
