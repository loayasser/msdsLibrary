// List of documents (replace with actual filenames in your documents folder)
const documents = [
    { name: "311 – DURA PVA PRIMER - MSDS", file: "documents/311_DURA PVA PRIMER.pdf" },
    { name: "Chlorinated Polyvinyl Chloride/ Solvent Mixture - MSDS", file: "documents/Chlorinated Polyvinyl.pdf" },
    { name: "FlexPRIME Part A | SUPRASEC® 9584 | SDS 400001002735 - MSDS", file: "documents/231943.pdf" },
    { name: "RENITHERM TOP COAT, Komp.B Artikel-Nr.: RE-TC.19001.B - MSDS", file: "documents/MSDS_RENITHERM-TC-B_GB.pdf"},
    { name: "LONGLIFE LOBE H - MSDS", file: "documents/robuschi-longlife-lobe-h-msds-eng.pdf" },
    { name: "Strongcoat HB - Base - MSDS", file: "documents/Strongcoat HB - Base_4.pdf" },
    { name: "BCR470EPOXY 21 - MSDS", file: "documents/CIKOdowel EP 21.pdf" },
    { name: "Jotashield UltraBond Filler - MSDS", file: "documents/jotun.pdf" },
    { name: "Industrial Enamel Gloss Metal Art Bronze Alkyd-MSDS", file: "documents/500N62.pdf" },
    { name: "Aquacryl - MSDS", file: "documents/PAIN1437.pdf" },
    { name: "Quickmast 341 - MSDS", file: "documents/Quickmast 341 - Base_MSDS_0.pdf" },
    { name: "Vital Coat Silane Siloxane Penetrating Sealers - MSDS", file: "documents/Vital Coat Silane Siloxane Penetrating Sealers.pdf" },
    { name: "TREMSIL 200 CLEAR W/O FUNGICIDE - MSDS", file: "documents/9715005_323_U.pdf" },
    { name: "GT Epoxy Base – Part A - MSDS", file: "documents/CSNRI_SDS_US_GT-Epoxy-Base-Part-A_9Nov20.pdf" },
    { name: "C-70™ Low VOC All Purpose Cleaner for Plastic Pipe - MSDS", file: "documents/Parabond+C-70+Clear+Low+VOC+2018.pdf" },
    { name: "Lacquer Thinner - MSDS", file: "documents/Lacquer-Thinner.pdf" },
    { name: "T-262A-66 Epoxy Thinner - MSDS", file: "documents/T0038.pdf" },
    { name: "RENITHERM® PMA 600 HD - MSDS", file: "documents/SDB_PMA600HD_GB.pdf" },
    { name: "Strongcoat UN101 Base_MSDS_1 - MSDS", file: "documents/Strongcoat UN101 Base_MSDS_1.pdf" },
    { name: "Fine Casting Plaster - MSDS", file: "documents/Fine-Casting-Plaster-MSDS.pdf" },
    { name: "Fenomastic Hygiene Emulsion Matt - MSDS", file: "documents/Downloada36c.pdf" },
    { name: "Fire Stop Foam - MSDS", file: "documents/FireStop-Hand-Foam.pdf" },
    { name: "Hardtop XP Comp B - MSDS", file: "documents/jotun 2.pdf" },
    { name: "FiAM Intumescent Acoustic Mastic - MSDS", file: "documents/FIAM-INTUMESCENT-ACOUSTIC-MASTIC.pdf" },
    { name: "Strongcoat HB - Hardener - MSDS", file: "documents/Strongcoat HB - Hardener_4.pdf" },
    { name: "Quickmast 341 - Hardener - MSDS", file: "documents/Quickmast 341 - Hardener_MSDS_0.pdf" },
    { name: "RENITHERM Top Coat - MSDS", file: "documents/MSDS_RENITHERM-TC-A_GB.pdf" },
    { name: "YELLOW 77 Wire Pulling Lubricant - MSDS", file: "documents/Yellow 77.pdf" },
    { name: "Ezy Bond Construction Adhesive  - MSDS", file: "documents/1819_Ezy Bond Construction Adhesive SDS (1).pdf" },
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