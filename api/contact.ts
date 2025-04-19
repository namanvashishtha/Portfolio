// server/routes/contact.ts
import { Request, Response, Router } from "express";

const router = Router();

router.post("/contact", (req: Request, res: Response) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ message: "Name, email, and message are required fields" });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: "Invalid email format" });
  }

  // In real app: send email, save to DB, etc.
  return res.status(200).json({ message: "Message received successfully!" });
});

export default router;
