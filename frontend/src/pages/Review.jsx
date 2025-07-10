

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Review.css";

const Review = () => {
  const [eventName, setEventName] = useState("");
  const [email, setEmail] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/reviews", {
        eventName,
        email,
        review,
        rating,
      });
      setSubmitted(true);
      setEventName("");
      setEmail("");
      setReview("");
      setRating(0);
    } catch (error) {
      console.error("Error submitting review", error);
    }
  };

  const handleStarClick = (value) => {
    setRating(value);
  };

  const goToHome = () => {
    navigate("/"); // change path if your HeroSection is on a different route
  };

  return (
    <div className="review-container">
      <button className="home-btn" onClick={goToHome}>
        ⬅ Back to Home
      </button>
      <h2>Submit Your Review</h2>
      {submitted && <p className="success-msg">Thank you for your feedback!</p>}
      <form onSubmit={handleSubmit} className="review-form">
        <div className="form-group">
          <label>Event Name</label>
          <input
            type="text"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Email ID</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Leave a Review</label>
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            required
            placeholder="Write your review..."
          />
        </div>
        <div className="form-group">
          <label>Rating</label>
          <div className="rating-stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                onClick={() => handleStarClick(star)}
                className={star <= rating ? "star filled" : "star"}
              >
                ★
              </span>
            ))}
          </div>
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default Review;
