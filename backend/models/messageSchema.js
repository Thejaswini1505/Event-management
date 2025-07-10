//Validation for event form

import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name Required!"],
    minLength: [3, "Name must contain at least 3 characters!"],
  },
  email: {
    type: String,
    required: [true, "Email Required!"],
    validate: [validator.isEmail, "Please provide valid email!"],
  },
  subject: {
    type: String,
    required: [true, "Subject Required!"],
    minLength: [5, "Subject must contain at least 5 characters!"],
  },
  bookingDate: {
    type: Date,
    required: [true, "Booking date is required!"],
  },
  eventDate: {
    type: Date,
    required: [true, "Event date is required!"],
  },
  message: {
    type: String,
    required: [true, "Message Required!"],
    minLength: [10, "Message must contain at least 10 characters!"],
  },
   // ✅ New field for status
  status: {
    type: String,
    default: "Pending",
    enum: ["Pending", "Confirmed", "Cancelled"],
  },
});

export const Message = mongoose.model("Message", messageSchema);
