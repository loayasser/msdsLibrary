const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

// Multer configuration for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    },
});
const upload = multer({ storage });

// MongoDB connection (if needed)
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const FileSchema = new mongoose.Schema({
    filename: String,
    path: String,
    uploadedAt: { type: Date, default: Date.now },
});
const File = mongoose.model("File", FileSchema);

// Upload file API
app.post("/upload", upload.single("file"), async (req, res) => {
    const file = new File({ filename: req.file.filename, path: req.file.path });
    await file.save();
    res.json({ message: "File uploaded successfully", file });
});

// Get all files API
app.get("/files", async (req, res) => {
    const files = await File.find();
    res.json(files);
});

// Delete file API
app.delete("/files/:id", async (req, res) => {
    const file = await File.findById(req.params.id);
    if (!file) return res.status(404).json({ message: "File not found" });

    fs.unlinkSync(file.path);
    await File.deleteOne({ _id: req.params.id });
    res.json({ message: "File deleted successfully" });
});

// Start server
app.listen(5000, () => console.log("Server running on port 5000"));
