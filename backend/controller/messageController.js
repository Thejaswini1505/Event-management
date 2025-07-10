// import { Message } from "../models/messageSchema.js";
// import sendEmail from "../utils/sendEmail.js"; // 👈 add this


// export const sendMessage = async (req, res) => {
//   try {
//     const { name, email, subject, bookingDate, eventDate , message } = req.body;
//     if (!name || !email || !subject || !bookingDate || !eventDate || !message) {
//       return res.status(400).json({
//         success: false,
//         message: "All fields are required!",
//       });
//     }
//     await Message.create({ name, email, subject,  bookingDate, eventDate ,message });
//     res.status(200).json({
//       success: true,
//       message: "Message Sent Successfully!",
//     });
//   } catch (error) {
//     if (error.name === "ValidationError") {
//       let errorMessage = "";
//       if (error.errors.name) {
//         errorMessage += error.errors.name.message + " ";
//       }
//       if (error.errors.email) {
//         errorMessage += error.errors.email.message + " ";
//       }
//       if (error.errors.subject) {
//         errorMessage += error.errors.subject.message + " ";
//       }
//       if (error.errors.bookingDate) {
//         errorMessage += error.errors.bookingDate.message + " ";
//       }
//       if (error.errors.eventDate) {
//         errorMessage += error.errors.eventDate.message + " ";
//       }
//       if (error.errors.message) {
//         errorMessage += error.errors.message.message + " ";
//       }
//       return res.status(400).json({
//         success: false,
//         message: errorMessage,
//       });
//     }

//     return res.status(500).json({
//       success: false,
//       message: "Unknown Error",
//     });
//   }
// };
// // ✅ Add this new function
// export const getAllMessages = async (req, res) => {
//   try {
//     const messages = await Message.find();
//     res.status(200).json({
//       success: true,
//       messages,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "Failed to fetch messages",
//     });
//   }
// };

import { Message } from "../models/messageSchema.js";
import sendEmail from "../utils/sendEmail.js";

// Send form message (customer side)
export const sendMessage = async (req, res) => {
  try {
    const { name, email, subject, bookingDate, eventDate, message } = req.body;

    if (!name || !email || !subject || !bookingDate || !eventDate || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required!",
      });
    }

    await Message.create({ name, email, subject, bookingDate, eventDate, message });

    res.status(200).json({
      success: true,
      message: "Message Sent Successfully!",
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      let errorMessage = "";
      if (error.errors.name) {
        errorMessage += error.errors.name.message + " ";
      }
      if (error.errors.email) {
        errorMessage += error.errors.email.message + " ";
      }
      if (error.errors.subject) {
        errorMessage += error.errors.subject.message + " ";
      }
      if (error.errors.bookingDate) {
        errorMessage += error.errors.bookingDate.message + " ";
      }
      if (error.errors.eventDate) {
        errorMessage += error.errors.eventDate.message + " ";
      }
      if (error.errors.message) {
        errorMessage += error.errors.message.message + " ";
      }
      return res.status(400).json({
        success: false,
        message: errorMessage,
      });
    }

    return res.status(500).json({
      success: false,
      message: "Unknown Error",
    });
  }
};

// Admin fetches all messages
export const getAllMessages = async (req, res) => {
  try {
    const messages = await Message.find();
    res.status(200).json({
      success: true,
      messages,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch messages",
    });
  }
};

// Admin updates status and sends email to customer
export const updateEventStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const updatedMessage = await Message.findByIdAndUpdate(id, { status }, { new: true });

    if (!updatedMessage) {
      return res.status(404).json({ success: false, message: "Message not found!" });
    }

    const emailText = `Hi ${updatedMessage.name}, your event has been ${status}. Thank you for booking with us!`;
    await sendEmail(updatedMessage.email, `Event ${status}`, emailText);

    res.status(200).json({
      success: true,
      message: `Status updated to ${status} and email sent.`,
      data: updatedMessage,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to update status" });
  }
};
