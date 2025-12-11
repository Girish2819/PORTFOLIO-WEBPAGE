import Contact from "../models/Contact.js";
import Mailjet from "node-mailjet";

const mjClient = new Mailjet({
  apiKey: process.env.MAILJET_API_KEY,
  apiSecret: process.env.MAILJET_API_SECRET,
});

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

    // ---------- Mailjet send block ----------
    try {
      console.log("🧪 DEBUG ENV:", {
        MAILJET_API_KEY: process.env.MAILJET_API_KEY ? "SET" : "NOT_SET",
        MAILJET_API_SECRET: process.env.MAILJET_API_SECRET ? "SET" : "NOT_SET",
        EMAIL_FROM: process.env.EMAIL_FROM,
        EMAIL_TO: process.env.EMAIL_TO,
      });

      if (process.env.MAILJET_API_KEY && process.env.MAILJET_API_SECRET && process.env.EMAIL_FROM && process.env.EMAIL_TO) {
        console.log('📧 Attempting to send email via Mailjet...', {
          from: process.env.EMAIL_FROM,
          to: process.env.EMAIL_TO
        });

        const request = mjClient
          .post("send", { version: "v3.1" })
          .request({
            Messages: [
              {
                From: {
                  Email: process.env.EMAIL_FROM,
                  Name: "Portfolio Contact",
                },
                To: [
                  {
                    Email: process.env.EMAIL_TO,
                    Name: "Owner",
                  },
                ],
                ReplyTo: {
                  Email: email,
                  Name: name,
                },
                Subject: `New Portfolio Message from ${name}`,
                TextPart: `From: ${email}\n\nMessage:\n${message}`,
                HTMLPart: `
                  <div style="font-family: Arial, sans-serif; max-width:600px;">
                    <h3>New Portfolio Message</h3>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                    <p><strong>Message:</strong></p>
                    <div style="white-space: pre-wrap; background:#fff; padding:10px; border-radius:4px;">${message}</div>
                  </div>
                `,
              },
            ],
          });

        const result = await request;
        console.log('✅ Mailjet send result full body:', JSON.stringify(result.body, null, 2));
      } else {
        console.log('⚠️ Mailjet env not configured - skipping email send');
      }
    } catch (mailErr) {
      console.error('❌ Mailjet ERROR:', mailErr && (mailErr.message || mailErr));
      if (mailErr && mailErr.response && mailErr.response.data) {
        console.error('❌ Mailjet RESPONSE DATA:', JSON.stringify(mailErr.response.data, null, 2));
      }
    }
    // ---------- end Mailjet send block ----------

    console.log('✅ Sending success response to client');
    return res.status(201).json({ success: true, message: "Message sent successfully" });

  } catch (error) {
    console.error('❌ Contact form error:', error);
    return res.status(500).json({ success: false, message: "Failed to send message. Please try again." });
  }
};
