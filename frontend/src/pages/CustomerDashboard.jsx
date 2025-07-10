

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Services from "../components/Services";
import "./CustomerDashboard.css";
import { FaBars, FaCalendarAlt, FaUserEdit, FaThLarge, FaHome } from "react-icons/fa";
import CustomerMyEvents from "./CustomerMyEvents";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";


const CustomerDashboard = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("services");
  const [profile, setProfile] = useState(null);
  const customerId = localStorage.getItem("customerId");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/v1/customers/${customerId}`);
        setProfile(res.data);
      } catch (err) {
        console.error("Failed to fetch profile:", err);
      }
    };

    if (customerId) fetchProfile();
  }, [customerId]);

  const handleServiceClick = (e) => {
    const card = e.target.closest(".item");
    if (card && card.querySelector("h3")) {
      const title = card.querySelector("h3").textContent;
      navigate("/Contact", { state: { eventType: title } });
    }
  };

  return (
    <div className={`dashboard-wrapper ${menuOpen ? "menu-open" : ""}`}>
      {/* Sidebar */}
      <aside className={`sidebar ${menuOpen ? "open" : ""}`}>
        <h2 className="logo">🎉 Eventify</h2>
        <ul className="sidebar-menu">
          {/* Home tab */}
          <li onClick={() => { navigate("/");setMenuOpen(false);}}>
            <FaHome /> <span>Home</span>
          </li>

          <li className={activeTab === "services" ? "active" : ""} onClick={() => { setActiveTab("services"); setMenuOpen(false); }}>
            <FaThLarge /> <span>Services</span>
          </li>
       
<li className={activeTab === "review" ? "active" : ""} onClick={() => { setActiveTab("review"); navigate("/customer/review"); setMenuOpen(false); }}>
  <FaStar /> <span>Review</span>
</li>
          <li className={activeTab === "myEvents" ? "active" : ""} onClick={() => { setActiveTab("myEvents"); setMenuOpen(false); }}>
            <FaCalendarAlt /> <span>My Events</span>
          </li>

          
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="topbar">
          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
            <FaBars />
          </button>
          <div className="topbar-info">
            <span className="username">{profile?.name}</span>
          </div>
        </header>

        <section className="content-area">
          {activeTab === "services" && (
            <div onClick={handleServiceClick}>
              <Services />
            </div>
          )}
          {activeTab === "myEvents" && <CustomerMyEvents />}
        </section>
      </main>
    </div>
  );
};

export default CustomerDashboard;
