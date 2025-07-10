import express from "express";
import { bookEvent, getMyBookings } from "../controller/bookingController.js";
import { authCustomer } from "../middleware/authCustomer.js";

const router = express.Router();

router.post("/book", authCustomer, bookEvent);
router.get("/my-bookings", authCustomer , getMyBookings);

export default router;
