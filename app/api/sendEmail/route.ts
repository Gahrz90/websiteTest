import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, email, city, date, phone, company, message } = req.body;

    // Validazione dei dati
    if (!name || !email || !message) {
      return res
        .status(400)
        .json({ message: "Name, email, and message are required" });
    }
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER as string,
        pass: process.env.EMAIL_PASS as string,
      },
    });

    try {
      await transporter.sendMail({
        from: email,
        to: process.env.EMAIL_TO,
        subject: `New Contact Form Submission from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nCity: ${city}\nDate: ${date}\nPhone: ${phone}\nCompany: ${company}\nMessage: ${message}`,
      });
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error sending email", error });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
