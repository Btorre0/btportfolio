import { Router } from "express";

const router = Router();

// POST /api/contact
router.post("/", (req, res) => {
  const { name, email, message } = req.body;
  console.log("📩 New contact form submission:", { name, email, message });
  res.json({ success: true, msg: "Message received! 🐱" });
});

export default router;
