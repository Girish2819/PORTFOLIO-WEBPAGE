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

    // Send email notification
    let emailSent = false;
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      try {
        console.log('📧 Attempting to send email notification...');
        console.log('📧 Email config:', { 
          user: process.env.EMAIL_USER, 
          passSet: !!process.env.EMAIL_PASS 
        });
        
        const transporter = nodemailer.createTransport({
          service: "gmail",
          host: "smtp.gmail.com",
          port: 587,
          secure: false, // true for 465, false for other ports
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });

        // Verify transporter configuration
        await transporter.verify();
        console.log('✅ Email transporter verified successfully');

        const mailOptions = {
          from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
          to: process.env.EMAIL_USER, // Send to yourself
          replyTo: email, // This allows you to reply to the sender
          subject: `New Portfolio Message from ${name}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #2563eb;">New Portfolio Message</h2>
              <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                <p><strong>Message:</strong></p>
                <p style="white-space: pre-wrap; background-color: white; padding: 15px; border-radius: 4px;">${message.replace(/\n/g, '<br>')}</p>
              </div>
              <p style="color: #6b7280; font-size: 12px;">This message was sent from your portfolio contact form.</p>
            </div>
          `,
          text: `
New Portfolio Message

Name: ${name}
Email: ${email}

Message:
${message}
          `,
        };

        // Send email and wait for result
        const info = await transporter.sendMail(mailOptions);
        console.log('✅ Email notification sent successfully:', info.messageId);
        emailSent = true;
      } catch (emailError) {
        console.error('❌ Email sending failed:', emailError.message);
        console.error('❌ Full error:', emailError);
        // Don't fail the request if email fails, but log it
        emailSent = false;
      }
    } else {
      console.log('⚠️ Email credentials not configured - skipping email notification');
      console.log('⚠️ EMAIL_USER:', process.env.EMAIL_USER ? 'Set' : 'Not set');
      console.log('⚠️ EMAIL_PASS:', process.env.EMAIL_PASS ? 'Set' : 'Not set');
    }

    // Respond immediately
    console.log('✅ Sending success response to client');
    res.status(201).json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    console.error('❌ Contact form error:', error);
    res.status(500).json({ success: false, message: "Failed to send message. Please try again." });
  }
};