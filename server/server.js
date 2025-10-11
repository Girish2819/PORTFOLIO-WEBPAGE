import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';    
import mongoose from 'mongoose';
import contactRoutes from './routes/contactRoutes.js';
import blogRoutes from './routes/blogRoutes.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

//routes
app.use('/api/contacts', contactRoutes);
app.use('/api/blogs', blogRoutes);

//mongodb connection
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log("mongoDB connection error:",err));

    
app.get('/', (req, res)=>{
    res.send('server is running...');
});

const port = process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
});