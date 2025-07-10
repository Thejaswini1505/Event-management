import React from "react";

const EventCard = ({ event }) => {
  return (
    <div className="border p-4 rounded shadow-md bg-white">
      <h2 className="text-lg font-semibold">{event.title}</h2>
      <p>{event.description}</p>
      <p className="text-sm text-gray-500">Date: {event.date}</p>
    </div>
  );
};

export default EventCard;
