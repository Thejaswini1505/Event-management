// // backend/controller/adminController.js

// import Admin from "../models/Admin.js";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";

// export const loginAdmin = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const admin = await Admin.findOne({ email });
//     if (!admin) return res.status(404).json({ message: "Admin not found" });

//     const isMatch =await bcrypt.compare(password, admin.password);
//     if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

//     const token = jwt.sign({ id: admin._id }, "secret", { expiresIn: "1d" });

//     res.status(200).json({ token, admin: { email: admin.email } });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };


import jwt from "jsonwebtoken";

export const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  // Hardcoded credentials
  const hardcodedEmail = "admin@gmail.com";
  const hardcodedPassword = "admin123";

  try {
    if (email !== hardcodedEmail || password !== hardcodedPassword) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ email }, "secret", { expiresIn: "1d" });

    res.status(200).json({
      token,
      admin: { email: hardcodedEmail },
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
