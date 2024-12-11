const express = require("express");
const multer = require("multer");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const uploadDir = path.join(__dirname, "documents");

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(uploadDir)); // Serve files from the "documents" folder
app.use(express.static(__dirname)); // Serve static files, including index.html

// Serve the index.html file for the root route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Multer setup for file uploads
const storage = multer.diskStorage({
    destination: uploadDir,
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage });

// API endpoint to list files in the "documents" folder
app.get("/documents", (req, res) => {
    fs.readdir(uploadDir, (err, files) => {
        if (err) return res.status(500).json({ error: "Failed to list files" });
        const fileList = files.map(file => ({
            name: file,
            file: `/documents/${file}`,
        }));
        res.json(fileList);
    });
});

// API endpoint to handle file uploads
app.post("/upload", upload.single("file"), (req, res) => {
    if (!req.file) return res.status(400).json({ error: "No file uploaded" });
    res.json({ message: "File uploaded successfully" });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
