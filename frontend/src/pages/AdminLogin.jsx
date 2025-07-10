

import React, { useState } from "react";
import axios from "axios";
import "./AdminLogin.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/api/admin/login", {
        email,
        password,
      });

      toast.success("Login successful!");
      localStorage.setItem("adminToken", res.data.token);
      
      // Wait for a moment before redirecting
      setTimeout(() => {
        window.location.href = "/admin-dashboard";
      }, 1500);

    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="admin-login-wrapper">
      <form className="admin-login-form" onSubmit={handleLogin}>
        <h2>Admin Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>

      {/* Toast Notification Container */}
      <ToastContainer position="top-center" autoClose={1000} />
    </div>
  );
};

export default AdminLogin;

