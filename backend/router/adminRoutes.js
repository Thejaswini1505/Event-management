// // backend/router/adminRoutes.js

// import express from "express";
// import { loginAdmin } from "../controller/adminController.js";

// const router = express.Router();

// router.post("/login", loginAdmin);

// export default router;

import express from "express";
import { loginAdmin } from "../controller/adminController.js";
import Admin from "../models/Admin.js";
import bcrypt from "bcryptjs";

const router = express.Router();

// Admin login
router.post("/login", loginAdmin);

// TEMP: Admin register
router.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newAdmin = new Admin({ email, password: hashedPassword });
    await newAdmin.save();
    res.status(201).json({ message: "Admin created" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
