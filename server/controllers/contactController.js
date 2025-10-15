import Contact from "../models/Contact.js";
import nodemailer from "nodemailer";

export const sendMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: "All fields are required" 
      });
    }

    // Save message to database
    const newMsg = new Contact({ name, email, message });
    await newMsg.save();

    // Try to send email notification (optional - don't fail if this doesn't work)
    try {
      if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });

        const mailOptions = {
          from: process.env.EMAIL_USER, // Use your email as sender
          to: process.env.EMAIL_USER, // Send to yourself
          replyTo: email, // Allow replies to go to the sender
          subject: `New Portfolio Message from ${name}`,
          text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
          html: `
            <h3>New Portfolio Message</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
          `
        };

        await transporter.sendMail(mailOptions);
        console.log('✅ Email notification sent successfully');
      } else {
        console.log('⚠️ Email credentials not configured - skipping email notification');
      }
    } catch (emailError) {
      console.log('⚠️ Email sending failed:', emailError.message);
      // Don't fail the entire request if email fails
    }

    res.status(201).json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    console.error('❌ Contact form error:', error);
    res.status(500).json({ 
      success: false, 
      message: "Failed to send message. Please try again." 
    });
  }
};
