import Contact from "../models/Contact.js";
import nodemailer from "nodemailer";

export const sendMessage = async (req, res) => {
  try {
    console.log('📧 Contact form request received:', { name: req.body.name, email: req.body.email });
    
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      console.log('❌ Validation failed: Missing required fields');
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    // Save message to database
    console.log('💾 Saving message to database...');
    const newMsg = new Contact({ name, email, message });
    await newMsg.save();
    console.log('✅ Message saved to database successfully');

    // Send email in background
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      console.log('📧 Sending email notification...');
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER, // Only send to yourself
        replyTo: email, // This allows you to reply to the sender
        subject: `New Portfolio Message from ${name}`,
        html: `
          <h3>New Portfolio Message</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
      };

      // non-blocking send
      transporter.sendMail(mailOptions)
        .then(() => console.log('✅ Email notification sent successfully'))
        .catch(err => console.log('⚠️ Email sending failed:', err.message));
    } else {
      console.log('⚠️ Email credentials not configured - skipping email notification');
    }

    // Respond immediately
    console.log('✅ Sending success response to client');
    res.status(201).json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    console.error('❌ Contact form error:', error);
    res.status(500).json({ success: false, message: "Failed to send message. Please try again." });
  }
};