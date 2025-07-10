// import express from "express";
// import { registerCustomer, loginCustomer, updateCustomer } from "../controller/customerController.js";

// const router = express.Router();

// router.post("/register", registerCustomer);
// router.post("/login", loginCustomer);
// router.put("/:id", updateCustomer);




// export default router;


import express from "express";
import {
  registerCustomer,
  loginCustomer,
  updateCustomer,
} from "../controller/customerController.js";
import {
  createBooking,
  getCustomerEvents,
} from "../controller/bookingController.js"; // ✅ new

const router = express.Router();

router.post("/register", registerCustomer);
router.post("/login", loginCustomer);
router.put("/:id", updateCustomer);

// ✅ new booking routes
router.post("/book", createBooking); // Book an event
router.get("/:customerId/my-events", getCustomerEvents); // Get customer's booked events

export default router;
