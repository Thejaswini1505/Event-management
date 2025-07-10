

import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [message, setMessage] = useState("");

  const [bookingDateType, setBookingDateType] = useState("text");
  const [eventDateType, setEventDateType] = useState("text");

  const location = useLocation();
  const navigate = useNavigate();
  const eventType = location.state?.eventType || "";

  useEffect(() => {
    if (eventType) {
      setSubject(eventType);
    }
  }, [eventType]);

  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (!name || !email || !subject || !bookingDate || !eventDate || !message) {
      toast.error("All fields are required");
      return;
    }

    try {
      // Step 1: Send message to admin module
      const res = await axios.post(
        "http://localhost:3000/api/v1/message/send",
        { name, email, subject, bookingDate, eventDate, message },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );

      toast.success(res.data.message);

      // Step 2: Save booking to Booking collection
      const customerId = localStorage.getItem("customerId");
      if (customerId) {
        await axios.post("http://localhost:3000/api/customers/book", {
          customerId,
          eventTitle: subject,
          name,
          email,
          phone: "", // Optional: Add phone input if needed
          message,
        });
      }

      // Reset fields
      setName("");
      setEmail("");
      setSubject("");
      setBookingDate("");
      setEventDate("");
      setMessage("");

      // Step 3: Wait 2.5 seconds and redirect to dashboard
      setTimeout(() => {
        navigate("/customer-dashboard");
      }, 2500);
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong.");
    }
  };

  return (
    <div className="contact container">
      

      <div className="banner">
        <div className="item">
          <form onSubmit={handleSendMessage}>
            <h2>CONTACT</h2>

            <div>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <input
              type="text"
              placeholder="Subject / Event Type"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />

            <div>
              <input
                type={bookingDateType}
                placeholder="Booking Date"
                onFocus={() => setBookingDateType("date")}
                onBlur={() => !bookingDate && setBookingDateType("text")}
                value={bookingDate}
                onChange={(e) => setBookingDate(e.target.value)}
              />
              <input
                type={eventDateType}
                placeholder="Event Date"
                onFocus={() => setEventDateType("date")}
                onBlur={() => !eventDate && setEventDateType("text")}
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
              />
            </div>

            <textarea
              rows={10}
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
