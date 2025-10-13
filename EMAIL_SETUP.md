# Email Setup Instructions for Portfolio Contact Form

## 🚀 Quick Setup Guide

### 1. **Configure Email Settings**

Edit the `.env` file in your `server` folder:
```bash
cd /home/girish/Desktop/portfolio/server
nano .env
```

Replace the email configuration with your actual Gmail credentials:
```env
# MongoDB Configuration
MONGO_URI=mongodb://localhost:27017/portfolio

# Email Configuration (Gmail)
EMAIL_USER=girishranjan71@gmail.com
EMAIL_PASS=your-app-password-here

# Server Configuration
PORT=5000
```

### 2. **Get Gmail App Password**

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
   - Use this password in `EMAIL_PASS`

### 3. **Start the Backend Server**

```bash
cd /home/girish/Desktop/portfolio/server
npm run dev
```

### 4. **Start the Frontend**

```bash
cd /home/girish/Desktop/portfolio/portfolio
npm run dev
```

## 📧 How It Works

1. **User fills contact form** → Frontend sends data to backend
2. **Backend receives data** → Saves to MongoDB + Sends email to you
3. **You receive email** → With sender's name, email, and message
4. **User gets confirmation** → "Message sent successfully!"

## 🔧 Features

✅ **Form Validation**: Required fields (name, email, message)
✅ **Email Delivery**: Messages sent directly to your Gmail
✅ **Database Storage**: All messages saved in MongoDB
✅ **Error Handling**: Proper error messages for users
✅ **Success Feedback**: Confirmation when message is sent

## 🛠️ Troubleshooting

- **"Failed to send message"**: Check if backend server is running
- **Email not received**: Verify Gmail app password is correct
- **Connection error**: Ensure both frontend and backend are running

## 📱 Testing

1. Open your portfolio website
2. Go to Contact section
3. Fill out the form
4. Click "Send Message"
5. Check your email for the message!

---

**Note**: Make sure both servers are running simultaneously for the contact form to work properly.
