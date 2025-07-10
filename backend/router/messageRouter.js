// import express from "express";
// import { sendMessage, getAllMessages } from "../controller/messageController.js";

// const router = express.Router();

// // Route to send a message (contact form)
// router.post("/send", sendMessage);

// // ✅ New route to fetch all messages for admin
// router.get("/all", getAllMessages);

// export default router;

import express from "express";
import {
  sendMessage,
  getAllMessages,
  updateEventStatus, // ✅ Import the new controller function
} from "../controller/messageController.js";

const router = express.Router();

// Customer submits form
router.post("/send", sendMessage);

// Admin fetches all customer messages
router.get("/all", getAllMessages);

// ✅ Admin updates booking status and sends confirmation email
router.put("/update-status/:id", updateEventStatus);


export default router;
