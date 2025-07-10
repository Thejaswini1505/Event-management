 import express from "express";
import { dbConnection } from "./database/dbConnection.js";
import dotenv from "dotenv";
import messageRouter from "./router/messageRouter.js";
import adminRoutes from "./router/adminRoutes.js"
import cors from "cors";
import customerRoutes from "./router/customerRoutes.js";
import eventRoutes from "./router/eventRoutes.js";
import reviewRoutes from "./router/reviewRoutes.js"; 

const app = express();

dotenv.config({ path: "./config/config.env" });

app.use(
  cors({
    origin: [process.env.FRONTEND_URL || "http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
  })
);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));  //urlencoded: check if data is in string format or not 

//ROUTES
app.use("/api/v1/message", messageRouter);
app.use("/api/admin", adminRoutes);

//CUSTOMER
app.use("/api/customers", customerRoutes);


app.use("/api/v1/events", eventRoutes);

app.use("/api/v1/customers", customerRoutes);

app.use("/api/reviews", reviewRoutes);



dbConnection();

export default app;
