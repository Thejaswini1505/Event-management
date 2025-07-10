

// pages/CustomerMyEvents.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CustomerMyEvents.css";

const CustomerMyEvents = () => {
  const [bookings, setBookings] = useState([]);
  const customerId = localStorage.getItem("customerId");

  useEffect(() => {
    const fetchMyEvents = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/customers/${customerId}/my-events`);
        setBookings(res.data);
      } catch (error) {
        console.error("Error fetching events", error);
      }
    };

    fetchMyEvents();
  }, [customerId]);

  return (
    <div className="myevents-container">
      <h2 className="myevents-title">🎉 My Booked Events</h2>
      {bookings.length === 0 ? (
        <p className="myevents-empty">No events booked yet.</p>
      ) : (
        <div className="myevents-grid">
          {bookings.map((booking) => (
            <div key={booking._id} className="myevent-card">
              <h3 className="myevent-title">{booking.eventTitle}</h3>
              <p><span>Name:</span> {booking.name}</p>
              <p><span>Email:</span> {booking.email}</p>
              {booking.phone && <p><span>Phone:</span> {booking.phone}</p>}
              <p><span>Message:</span> {booking.message}</p>
              <p className="myevent-date">Booked on {new Date(booking.createdAt).toLocaleDateString()}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomerMyEvents;
