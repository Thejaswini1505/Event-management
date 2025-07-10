// // router/reviewRoutes.js
// import express from "express";
// import Review from "../models/Review.js"; 

// const router = express.Router();

// // POST /api/reviews
// router.post("/reviews", async (req, res) => {
//   try {
//     const { eventName, email, review, rating } = req.body;
//     const newReview = new Review({ eventName, email, review, rating });
//     await newReview.save();
//     res.status(201).json({ message: "Review submitted successfully" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Error submitting review" });
//   }
// });

// // GET /api/reviews
// router.get("/reviews", async (req, res) => {
//   try {
//     const reviews = await Review.find().sort({ createdAt: -1 });
//     res.json({ reviews });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Error fetching reviews" });
//   }
// });

// export default router;




// router/reviewRoutes.js
import express from "express";
import Review from "../models/Review.js"; 

const router = express.Router();

// POST /api/reviews
router.post("/", async (req, res) => {
  try {
    const { eventName, email, review, rating } = req.body;
    const newReview = new Review({ eventName, email, review, rating });
    await newReview.save();
    res.status(201).json({ message: "Review submitted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error submitting review" });
  }
});

// GET /api/reviews
router.get("/", async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 });
    res.json({ reviews });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error fetching reviews" });
  }
});

export default router;
