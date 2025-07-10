import React, { useEffect, useState } from "react";
import axios from "axios";

const MyBookings = ({ customerId }) => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/api/bookings/customer/${customerId}`)
      .then(res => setBookings(res.data))
      .catch(err => console.log(err));
  }, [customerId]);

  return (
    <div>
      <h2>My Bookings</h2>
      {bookings.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        <ul>
          {bookings.map(b => (
            <li key={b._id}>
              <h3>{b.eventId?.title}</h3>
              <p>{b.eventId?.description}</p>
              <p><strong>Status:</strong> {b.status}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyBookings;
