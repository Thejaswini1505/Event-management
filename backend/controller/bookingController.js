// import { Booking } from "../models/Booking.js";

// export const bookEvent = async (req, res) => {
//   try {
//     const { eventId } = req.body;
//     const customerId = req.user.id; // from JWT

//     const booking = await Booking.create({ customer: customerId, event: eventId });
//     res.status(201).json({ success: true, booking });
//   } catch (err) {
//     res.status(500).json({ success: false, message: err.message });
//   }
// };

// export const getMyBookings = async (req, res) => {
//   try {
//     const customerId = req.user.id;
//     const bookings = await Booking.find({ customer: customerId }).populate("event");
//     res.status(200).json({ success: true, bookings });
//   } catch (err) {
//     res.status(500).json({ success: false, message: err.message });
//   }
// };


// controller/bookingController.js
import Booking from "../models/Booking.js";

export const createBooking = async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).json({ message: "Booking successful", booking });
  } catch (error) {
    res.status(500).json({ message: "Error creating booking", error });
  }
};

export const getCustomerEvents = async (req, res) => {
  try {
    const bookings = await Booking.find({ customerId: req.params.customerId });
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: "Error fetching events", error });
  }
};
