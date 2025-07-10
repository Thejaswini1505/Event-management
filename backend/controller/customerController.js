import Customer from "../models/Customer.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerCustomer = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existing = await Customer.findOne({ email });
    if (existing) return res.status(400).json({ message: "Email already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newCustomer = new Customer({ name, email, password: hashedPassword });
    await newCustomer.save();
    res.status(201).json({ message: "Registered Successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const loginCustomer = async (req, res) => {
  const { email, password } = req.body;
  try {
    const customer = await Customer.findOne({ email });
    if (!customer) return res.status(404).json({ message: "User not found" });

    const valid = await bcrypt.compare(password, customer.password);
    if (!valid) return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: customer._id }, "secret", { expiresIn: "1d" });
    res.status(200).json({ token, customer });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateCustomer = async (req, res) => {
  try {
    const { name, email, password, profilePicture } = req.body;

    // Find the customer by ID
    const customer = await Customer.findById(req.params.id);
    if (!customer) return res.status(404).json({ message: "Customer not found" });

    // Update fields if provided
    if (name) customer.name = name;
    if (email) customer.email = email;
    if (password) customer.password = await bcrypt.hash(password, 10);
    if (profilePicture) customer.profilePicture = profilePicture;

    await customer.save();
    res.status(200).json({ message: "Customer profile updated successfully", customer });
  } catch (error) {
    res.status(500).json({ message: "Update failed", error: error.message });
  }
};

