import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import contactRoutes from './routes/contactRoutes.js';
import blogRoutes from './routes/blogRoutes.js';

dotenv.config();
const app = express();
const __dirname = path.resolve();

app.use(cors());
app.use(express.json());

// API routes
app.use('/api/contacts', contactRoutes);
app.use('/api/blogs', blogRoutes);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => console.log('❌ MongoDB connection error:', err));

// Serve frontend build
app.use(express.static(path.join(__dirname, '../portfolio/dist')));

// Catch-all route for SPA - handle all non-API routes
app.use((req, res, next) => {
  // Skip if it's an API route
  if (req.path.startsWith('/api/')) {
    return next();
  }
  // Serve the React app for all other routes
  res.sendFile(path.join(__dirname, '../portfolio/dist/index.html'));
});

// Start server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`✅ Server is running on port ${port}`);
});
