const express = require("express");
const multer = require("multer");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 5000;

// Enable CORS (Allows frontend to access backend)
app.use(cors());
app.use(express.json());

// Set up storage for file uploads
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

const storage = multer.diskStorage({
    destination: uploadDir,
    filename: (req, file, cb) => {
        cb(null, file.originalname); // Keep the original file name
    },
});

const upload = multer({ storage });

// Serve static files (Uploaded documents)
app.use("/uploads", express.static(uploadDir));

// Get list of uploaded files
app.get("/files", (req, res) => {
    fs.readdir(uploadDir, (err, files) => {
        if (err) {
            return res.status(500).json({ error: "Failed to list files." });
        }

        const fileList = files.map((file) => ({
            name: file,
            file: `http://localhost:${PORT}/uploads/${file}`,
        }));

        res.json(fileList);
    });
});

// Upload a new file
app.post("/upload", upload.single("file"), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: "No file uploaded." });
    }
    res.json({ message: "File uploaded successfully!", file: req.file.filename });
});

// Delete a file
app.post("/delete", (req, res) => {
    const { fileName } = req.body;
    if (!fileName) {
        return res.status(400).json({ error: "No file specified." });
    }

    const filePath = path.join(uploadDir, fileName);
    fs.unlink(filePath, (err) => {
        if (err) {
            return res.status(500).json({ error: "Failed to delete file." });
        }
        res.json({ message: "File deleted successfully!" });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
// Define the root route
app.get("/", (req, res) => {
    res.send("Welcome to the File Upload API. Use /files to get files, /upload to upload, and /delete to delete files.");
});
