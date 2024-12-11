const apiBaseUrl = "http://localhost:3000"; // Base URL for the server

// Function to fetch and display the document list
async function fetchDocuments() {
    const response = await fetch(`${apiBaseUrl}/documents`);
    const documents = await response.json();
    displayDocuments(documents);
}

// Function to display documents
function displayDocuments(docs) {
    const results = document.getElementById("results");
    results.innerHTML = ""; // Clear current list

    docs.sort((a, b) => a.name.localeCompare(b.name)); // Sort alphabetically

    docs.forEach((doc, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. `; // Add numbering
        const link = document.createElement("a");
        link.href = `${apiBaseUrl}${doc.file}`;
        link.textContent = doc.name;
        link.target = "_blank"; // Open in a new tab
        li.appendChild(link);
        results.appendChild(li);
    });
}

// Search functionality
function searchDocuments() {
    const query = document.getElementById("searchBar").value.toLowerCase();

    fetch(`${apiBaseUrl}/documents`)
        .then(response => response.json())
        .then(documents => {
            const filteredDocs = documents.filter(doc => doc.name.toLowerCase().includes(query));
            displayDocuments(filteredDocs);
        });
}

// Show library section
function showLibrary() {
    document.getElementById("library").style.display = "block";
    document.getElementById("upload").style.display = "none";
    fetchDocuments(); // Reload the document list
}

// Show upload section
function showUpload() {
    document.getElementById("library").style.display = "none";
    document.getElementById("upload").style.display = "block";
}

// Handle file upload
document.getElementById("uploadForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const fileInput = document.getElementById("fileInput");
    const formData = new FormData();
    formData.append("file", fileInput.files[0]);

    const response = await fetch(`${apiBaseUrl}/upload`, {
        method: "POST",
        body: formData,
    });

    const message = document.getElementById("uploadMessage");
    if (response.ok) {
        message.textContent = "File uploaded successfully!";
        fileInput.value = ""; // Clear input
    } else {
        message.textContent = "Failed to upload file.";
    }
});
