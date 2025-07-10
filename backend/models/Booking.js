// import mongoose from "mongoose";

// const bookingSchema = new mongoose.Schema({
//   customer: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Customer",
//     required: true,
//   },
//   event: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Event",
//     required: true,
//   },
//   status: {
//     type: String,
//     enum: ["Booked", "Cancelled"],
//     default: "Booked",
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// export const Booking = mongoose.model("Booking", bookingSchema);


// models/Booking.js
import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
    required: true,
  },
  eventTitle: String,
  name: String,
  email: String,
  phone: String,
  message: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Booking", bookingSchema);
