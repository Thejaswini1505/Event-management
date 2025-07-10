import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Event title is required"],
  },
  description: {
    type: String,
    required: [true, "Event description is required"],
  },
  date: {
    type: Date,
    required: [true, "Event date is required"],
  },
  location: {
    type: String,
    required: [true, "Location is required"],
  },
  customerId: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "Customer",
  required: true,
},
  image: {
    type: String, // URL or base64 string
    required: false,
  },
}, { timestamps: true });

const Event = mongoose.model("Event", eventSchema);
export default Event;
