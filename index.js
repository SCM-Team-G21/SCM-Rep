const express = require('express');
const multer = require('multer');
const fs = require('fs');
const http = require('http');
const mongoose = require('mongoose');

// Create Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB database
mongoose.connect("mongodb+srv://Harsainyam_Singh:Harsainyam2005%23@recipewebsite.xavgadu.mongodb.net/RecipeWebsite", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("Connected to MongoDB");
})
.catch((err) => {
  console.error("Error connecting to MongoDB:", err);
});

// Define video schema
const videoSchema = new mongoose.Schema({
  title: String,
  description: String,
  videoPath: String,
});

const Video = mongoose.model('Video', videoSchema);

// Multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

// Upload endpoint
app.post('../upload', upload.single('video'), async (req, res) => {
  try {
    const { title, description } = req.body;
    const videoPath = req.file.path;
    
    const video = new Video({
      title,
      description,
      videoPath,
    });
    await video.save();
    
    res.status(201).send('Video uploaded successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// Start the server
const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Remove endpoint
app.delete('/video/:id', async (req, res) => {
  // Remove video implementation
});

// Display endpoint
app.get('/videos', async (req, res) => {
  // Display videos implementation
});
