
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

const CustomerCreateEvent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { eventType } = location.state || {};

  const [form, setForm] = useState({
    title: "",
    description: "",
    date: "",
    location: "",
    image: "",
  });

  useEffect(() => {
    if (eventType) {
      setForm((prev) => ({ ...prev, title: eventType }));
    }
  }, [eventType]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const customerId = localStorage.getItem("customerId");
  console.log("customerId being sent:", customerId);

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    
   await axios.post("http://localhost:3000/api/v1/events/create", {
  ...form,
  customerId: customerId, // <--- Make sure this is NOT null
});

    alert("Event created successfully!");
    navigate("/customer-dashboard");
  } catch (err) {
    alert("Error: " + (err.response?.data?.message || err.message));
  }
};


  return (
    <div style={{ padding: "30px", maxWidth: "600px", margin: "auto" }}>
      <h2>Create Your {eventType || "Event"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Event Title"
          value={form.title}
          onChange={handleChange}
          required
        /><br /><br />

        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          required
        /><br /><br />

        <input
          name="date"
          type="date"
          value={form.date}
          onChange={handleChange}
          required
        /><br /><br />

        <input
          name="location"
          placeholder="Location"
          value={form.location}
          onChange={handleChange}
          required
        /><br /><br />

        <input
          name="image"
          placeholder="Image URL (optional)"
          value={form.image}
          onChange={handleChange}
        /><br /><br />

        <button type="submit">Create Event</button>
      </form>
    </div>
  );
};

export default CustomerCreateEvent;
