// List of documents (replace with actual filenames in your documents folder)
const documents = [
    { name: "311–DURA PVA PRIMER", file: "documents/311–DURA PVA PRIMER.pdf" },
    { name: "Chlorinated Polyvinyl Chloride/ Solvent Mixture ", file: "documents/Chlorinated Polyvinyl.pdf" },
    { name: "FlexPRIME Part A | SUPRASEC® 9584 | SDS 400001002735", file: "documents/231943.pdf" },
    { name: "RENITHERM TOP COAT, Komp.B Artikel-Nr.: RE-TC.19001.B", file: "MSDS_RENITHERM-TC-B_GB"},
    { name: "LONGLIFE LOBE H", file: "robuschi-longlife-lobe-h-msds-eng.pdf" },
    { name: "Strongcoat HB - Base_4", file: "Strongcoat HB - Base_4.pdf" },
    { name: "311–DURA PVA PRIMER", file: "CIKOdowel EP 21.pdf" },
    { name: "311–DURA PVA PRIMER", file: "documents/311–DURA PVA PRIMER.pdf" },
    { name: "311–DURA PVA PRIMER", file: "documents/311–DURA PVA PRIMER.pdf" },
    { name: "311–DURA PVA PRIMER", file: "documents/311–DURA PVA PRIMER.pdf" },
    { name: "311–DURA PVA PRIMER", file: "documents/311–DURA PVA PRIMER.pdf" },
    { name: "311–DURA PVA PRIMER", file: "documents/311–DURA PVA PRIMER.pdf" },
    { name: "311–DURA PVA PRIMER", file: "documents/311–DURA PVA PRIMER.pdf" },
    { name: "311–DURA PVA PRIMER", file: "documents/311–DURA PVA PRIMER.pdf" },
    { name: "311–DURA PVA PRIMER", file: "documents/311–DURA PVA PRIMER.pdf" },
    { name: "311–DURA PVA PRIMER", file: "documents/311–DURA PVA PRIMER.pdf" },
    { name: "311–DURA PVA PRIMER", file: "documents/311–DURA PVA PRIMER.pdf" },
    { name: "311–DURA PVA PRIMER", file: "documents/311–DURA PVA PRIMER.pdf" },
    { name: "311–DURA PVA PRIMER", file: "documents/311–DURA PVA PRIMER.pdf" },
    { name: "311–DURA PVA PRIMER", file: "documents/311–DURA PVA PRIMER.pdf" },
    { name: "311–DURA PVA PRIMER", file: "documents/311–DURA PVA PRIMER.pdf" },
];

// Function to search documents
function searchDocuments() {
    const query = document.getElementById("searchBar").value.toLowerCase();
    const results = document.getElementById("results");

    // Clear previous results
    results.innerHTML = "";

    // Filter and display results
    documents
        .filter(doc => doc.name.toLowerCase().includes(query))
        .forEach(doc => {
            const li = document.createElement("li");
            const link = document.createElement("a");
            link.href = doc.file;
            link.textContent = doc.name;
            link.target = "_blank"; // Open in a new tab
            li.appendChild(link);
            results.appendChild(li);
        });
}