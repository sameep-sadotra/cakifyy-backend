import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 10000;

// MongoDB Connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ MongoDB Connected Successfully!');
  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    process.exit(1); // Exit with failure
  }
};

// Initialize DB Connection
connectDB();

// Middleware
app.use(express.json());

// Sample Route
app.get('/', (req, res) => {
  res.send('Server is running successfully!');
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server started on port ${PORT}`);
});
