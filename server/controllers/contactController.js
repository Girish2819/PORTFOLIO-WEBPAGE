import Contact from "../models/Contact.js";
import nodemailer from "nodemailer";
import mongoose from "mongoose";

export const sendMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    // Check if MongoDB is connected
    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({ 
        success: false, 
        message: "Database connection not ready. Please try again in a moment." 
      });
    }

    const newMsg = new Contact({ name, email, message });
    await newMsg.save();

    // Optional: send email to you (only if email is configured)
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });

        const mailOptions = {
          from: email,
          to: process.env.EMAIL_USER,
          subject: `New Portfolio Message from ${name}`,
          text: message,
        };

        await transporter.sendMail(mailOptions);
      } catch (emailError) {
        console.log('Email sending failed:', emailError.message);
        // Don't fail the whole request if email fails
      }
    }

    res.status(201).json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ success: false, message: error.message });
  }
};
