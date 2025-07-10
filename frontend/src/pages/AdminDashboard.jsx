

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const [messages, setMessages] = useState([]);
  const [statusUpdates, setStatusUpdates] = useState({}); // Track selected status per message
  const [reviews, setReviews] = useState([]);


  // Fetch messages
  const fetchMessages = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/v1/message/all");
      setMessages(res.data.messages);
    } catch (err) {
      console.error(err);
    }
  };
  const fetchReviews = async () => {
  try {
    const res = await axios.get("http://localhost:3000/api/reviews"); // Adjust API path as needed
    setReviews(res.data.reviews);
  } catch (err) {
    console.error("Error fetching reviews:", err);
  }
};


  useEffect(() => {
    fetchMessages();
    fetchReviews();
  }, []);

  // Handle dropdown change
  const handleStatusChange = (id, value) => {
    setStatusUpdates((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // Submit status update
  const handleUpdateStatus = async (id) => {
  const newStatus = statusUpdates[id];
  if (!newStatus) return;

  try {
    await axios.put(`http://localhost:3000/api/v1/message/update-status/${id}`, {
      status: newStatus, // use selected value
    });

    alert(`Status updated to ${newStatus} and email sent!`);
    fetchMessages(); // refresh table
  } catch (error) {
    console.error("Status update failed:", error);
    alert("Failed to update status");
  }
};


  return (
    <div className="admin-dashboard-wrapper">
      <h2>Messages</h2>
      <table className="admin-dashboard-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Subject</th>
            <th>Message</th>
            <th>Booking Date</th>
            <th>Event Date</th>
            <th>Status</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((msg) => (
            <tr key={msg._id}>
              <td>{msg.name}</td>
              <td>{msg.email}</td>
              <td>{msg.subject}</td>
              <td>{msg.message}</td>
            <td>{new Date(msg.bookingDate).toLocaleDateString()}</td>
<td>{new Date(msg.eventDate).toLocaleDateString()}</td>

              <td>
                <select
                  value={statusUpdates[msg._id] || msg.status || "Pending"}
                  onChange={(e) => handleStatusChange(msg._id, e.target.value)}
                >
                  <option value="Pending">Pending</option>
                  <option value="Confirmed">Confirmed</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </td>
              <td>
                <button onClick={() => handleUpdateStatus(msg._id)}>
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Customer Reviews</h2>
<table className="admin-dashboard-table">
  <thead>
    <tr>
      <th>Event Name</th>
      <th>Email</th>
      <th>Review</th>
      <th>Rating</th>
    </tr>
  </thead>
  <tbody>
    {reviews.map((rev, index) => (
      <tr key={index}>
        <td>{rev.eventName}</td>
        <td>{rev.email}</td>
        <td>{rev.review}</td>
        <td>{rev.rating} ★</td>
      </tr>
    ))}
  </tbody>
</table>

    </div>
  );
};

export default AdminDashboard;
