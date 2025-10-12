# Portfolio Website

A modern, responsive portfolio website built with React, Node.js, and MongoDB featuring an animated background with twinkling stars.

## Features

- ✨ **Animated Background**: Light magenta gradient with twinkling stars
- 📱 **Responsive Design**: Works on all devices
- 🎨 **Modern UI**: Clean, professional design with glass-morphism effects
- 📝 **Blog Management**: Add and manage blog posts
- 📧 **Contact Form**: Send messages with email integration
- 🚀 **Single Page Application**: Smooth scrolling navigation

## Tech Stack

### Frontend
- React 19
- Vite
- Tailwind CSS
- Axios
- Framer Motion

### Backend
- Node.js
- Express
- MongoDB
- Mongoose
- Nodemailer
- CORS

## Quick Start

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (running locally or MongoDB Atlas)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install all dependencies**
   ```bash
   npm run install-all
   ```

3. **Set up environment variables**
   - Copy `.env.example` to `.env` in the `server` directory
   - Update the MongoDB connection string and email credentials

4. **Start the development server**
   ```bash
   npm run dev
   ```

This will start both the backend server (port 5000) and frontend development server (port 5173/5174) simultaneously.

## Available Scripts

- `npm run dev` - Start both frontend and backend in development mode
- `npm run server` - Start only the backend server
- `npm run client` - Start only the frontend development server
- `npm run build` - Build the frontend for production
- `npm run install-all` - Install dependencies for all parts of the project
- `npm run clean` - Remove all node_modules directories

## Project Structure

```
portfolio/
├── server/                 # Backend API
│   ├── controllers/       # Route controllers
│   ├── models/           # MongoDB models
│   ├── routes/           # API routes
│   └── server.js         # Main server file
├── Frontend/
│   └── client/           # React frontend
│       ├── src/
│       │   ├── components/   # Reusable components
│       │   ├── pages/        # Page components
│       │   └── App.jsx       # Main app component
│       └── package.json
└── package.json          # Root package.json with scripts
```

## Environment Variables

Create a `.env` file in the `server` directory:

```env
MONGO_URI=mongodb://localhost:27017/portfolio
PORT=5000
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

## API Endpoints

- `GET /api/blogs` - Get all blog posts
- `POST /api/blogs` - Create a new blog post
- `POST /api/contacts` - Send a contact message

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the ISC License.











