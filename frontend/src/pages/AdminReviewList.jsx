import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminReviewList = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/reviews")
      .then((res) => setReviews(res.data))
      .catch((err) => console.error("Failed to fetch reviews", err));
  }, []);

  return (
    <div className="admin-reviews container">
      <h2>Customer Reviews</h2>
      <ul>
        {reviews.map((rev) => (
          <li key={rev._id}>
            <strong>{rev.name}</strong>: {rev.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminReviewList;
