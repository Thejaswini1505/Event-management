import express from "express";
import { getAllEvents, createEvent, getEventsByCustomer } from "../controller/eventController.js";

const router = express.Router();

router.get("/all", getAllEvents); // GET all events
router.post("/create", createEvent); // Create new event (used by admin)
router.get("/my-events/:customerId", getEventsByCustomer); 


export default router;
