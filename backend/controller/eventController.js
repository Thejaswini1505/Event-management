import Event from "../models/eventModel.js";

// GET /api/v1/events/all
export const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find().sort({ date: 1 }); // sort by date (optional)
    res.status(200).json({ success: true, events });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// POST /api/v1/events/create
export const createEvent = async (req, res) => {
  const { title, description, date, location, image, customerId } = req.body;

  try {
    const newEvent = new Event({
      title,
      description,
      date,
      location,
      image,
      customerId: customerId, // ✅ correct field name
    });

    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (err) {
    console.error("Event creation failed:", err);
    res.status(500).json({ message: "Event creation failed", error: err });
  }
};



export const getEventsByCustomer = async (req, res) => {
  const { customerId } = req.params;

  try {
    const events = await Event.find({ customerId: customerId });
    

    res.status(200).json(events);
  } catch (error) {
    console.error("Error fetching events:", error);
    res.status(500).json({ message: "Failed to fetch events." });
  }
};
