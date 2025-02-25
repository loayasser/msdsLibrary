// List of documents (replace with actual filenames in your documents folder)
const documents = [
    { name: "311 – DURA PVA PRIMER - MSDS", file: "documents/311_DURA PVA PRIMER.pdf" },
    { name: "Chlorinated Polyvinyl Chloride/ Solvent Mixture - MSDS", file: "documents/Chlorinated Polyvinyl.pdf" },
    { name: "FlexPRIME Part A | SUPRASEC® 9584 | SDS 400001002735 - MSDS", file: "documents/231943.pdf" },
    { name: "RENITHERM TOP COAT, Komp.B - MSDS", file: "documents/MSDS_RENITHERM-TC-B_GB.pdf"},
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
    { name: "PVC Parabond Cement - MSDS", file: "documents/Parabond+C-70+Clear+Low+VOC+2018.pdf" },
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
    { name: "WELD-ON_C-65 - MSDS", file: "documents/WELD-ON_C-65_SDS.pdf" },
    { name: "Aerosol ALL Purpose Spray Paint  - MSDS", file: "documents/SPRAY PAINT SDS.pdf" },
    { name: "RENITHERM TOP COAT KOMP A - MSDS", file: "documents/RENITHERM TOP COAT.pdf" },
    { name: "RENITHERM PMA 600 - MSDS", file: "documents/RENITHERM PMA 600.pdf" },
    { name: "polyfix adhesive - MSDS", file: "documents/polyfix adhesive SDS.pdf" },
    { name: "Nitobond EP Base - MSDS", file: "documents/Nitobond-EP Base-SDS.pdf" },
    { name: "Nitobond EP Hardener - MSDS", file: "documents/Nitobond-EP Hardener-SDS.pdf" },
    { name: "ISOVER Glass wool - MSDS", file: "documents/msds-fi-isover-glaswool.pdf" },
    { name: "Kwik Grip - MSDS", file: "documents/Kwik SDS.pdf" },
    { name: "Jotafloor Topcoat E Comp A - MSDS", file: "documents/jotun topcoat SDS.pdf" },
    { name: "Fenomastic Zero Matt - MSDS", file: "documents/jotun fenomastic SDS.pdf" },
    { name: "Hempathane Fast Dry 55759 Base - MSDS", file: "documents/HEMPATHENE 55759.pdf" },
    { name: "GT Proof AC (LIQUID) - MSDS", file: "documents/GT Proof AC - LIQUID.pdf" },
    { name: "Weberdry prime SB - MSDS", file: "documents/GAR prime_SB-SDS.pdf" },
    { name: "Fosroc Cure B - MSDS", file: "documents/Fosroc-Cure-B-SDS25548-44.pdf" },
    { name: "Formcoat WB - MSDS", file: "documents/Formcoat WB_SDS.pdf" },
    { name: "Ezy Bond Construction Adhesive - MSDS", file: "documents/1819_Ezy Bond Construction Adhesive SDS (1).pdf" },
    { name: "Hilti GC 22 - MSDS", file: "documents/Material-safety-datasheet-GC-22-EN-Material-safety-datasheet-IBD.pdf" },
    { name: "AKPEROX A50 - MSDS", file: "documents/AKPEROX_A50_MSDS_EN.pdf" },
    { name: "PURINJECT 1C 115 ECO - MSDS", file: "documents/MSDS CIKOinject PUR-1.pdf" },
    { name: "GT BOND EP Base - MSDS", file: "documents/GT BOND EP Base.pdf" },
    { name: "GT Bond EP Hardener - MSDS", file: "documents/GT Bond EP Hardener.pdf" },
    { name: "ORYX ALUMINIUM PAINT - MSDS", file: "documents/National Paint Protective Coating Aluminium Paint.pdf" },
    { name: "UNI COATE - MSDS", file: "documents/MSDS UNICOATE NC THINNER U650-U750-U850.pdf" },
    { name: "Eurocol 615 eurostar lino ec - MSDS", file: "documents/Eurocol 615 eurostar lino ec.pdf" },
    { name: "Rob Stucco Filler - MSDS", file: "documents/Rob Stucco Filler.pdf" },
    { name: "ROB GUARD EPOXY THINNER MSDS - MSDS", file: "documents/ROB GUARD EPOXY THINNER MSDS.pdf" },
    { name: "Rob Red Oxide Primer - MSDS", file: "documents/Rob Red Oxide Primer.pdf" },
    { name: "Rob Zinc Chromate Epoxy Primer - MSDS", file: "documents/Rob Zinc Chromate Epoxy Primer.pdf" },
    { name: "PVC PIPE ADHESIVE - MSDS", file: "documents/PVC PIPE ADHESIVE (1).pdf" },
    { name: "Rob Enamel Flat - MSDS", file: "documents/Rob Enamel Flat.pdf" },
    { name: "ROB GP THINNER - MSDS", file: "documents/ROB GP THINNER.pdf" },
    { name: "Rob Enamel Gloss - MSDS", file: "documents/Rob Enamel Gloss.pdf" },
    { name: "Rob Aqua Acryl Matt - MSDS", file: "documents/Rob Aqua Acryl Matt.pdf" },
    { name: "Robshield Topcoat Silk - MSDS", file: "documents/Robshield Topcoat Silk.pdf" },
    { name: "FEVICOL_SH_MSDS - MSDS", file: "documents/FEVICOL_SH_MSDS.pdf" },
    { name: "GT Repoxy FF Base & Hardener - MSDS", file: "documents/GT Repoxy FF Base & Hardener.pdf" },
    { name: "Sikadur 31 CF - MSDS", file: "documents/Sikadur 31 CF.pdf" },
    { name: "TREMSTOP ACRYLIC SP - MSDS", file: "documents/TREMSTOP ACRYLIC SP.pdf" },
    { name: "JOTUN STEELMASTER 1200WF - MSDS", file: "documents/JOTUN STEELMASTER 1200WF.pdf" },
    { name: "Repelicone X - MSDS", file: "documents/Repelicone X.pdf" },
    { name: "JOTUN HARD TOP XP COMP A BASE 1 - MSDS", file: "documents/JOTUN HARD TOP XP COMP A BASE 1.pdf" },
    { name: "EZ WELD 786 CPVC CEMENT - MSDS", file: "documents/EZ WELD 786 CPVC CEMENT.pdf" },
    { name: "PVC PIPE ADHESIVE - MSDS", file: "documents/PVC PIPE ADHESIVE.pdf" },
    { name: "HILTI GC 52 - MSDS", file: "documents/HILTI GC 52.pdf" },
    { name: "S100 PVC - MSDS", file: "documents/S100 PVC.pdf" },
    { name: "GT CURE AB - MSDS", file: "documents/GT CURE AB.pdf" },
    { name: "HEMPEL THINNER 08080 - MSDS", file: "documents/HEMPEL THINNER 08080.pdf" },
    { name: "SUPRASEC 5025 - MSDS", file: "documents/SUPRASEC 5025.pdf" },
    { name: "DALTOFOAM TE 34280 - MSDS", file: "documents/DALTOFOAM TE 34280.pdf" },
    { name: "National Penetrating Siloxane Primer - MSDS", file: "documents/National_Penetrating_Siloxane_Primer_Sealer.pdf" },
    { name: "CRAYCOAT 81-10 - MSDS", file: "documents/CRAYCOAT 81-10.pdf" },
    { name: "Bostick Adhesives - MSDS", file: "documents/Bostick Adhesives.pdf" },
    { name: "ACF Non-Sag Epoxy Putty Part A - MSDS", file: "documents/ACF Non-Sag Epoxy Putty Part A.pdf" },
    { name: "Diff Floor Cleaner - MSDS", file: "documents/Diff Floor Cleaner.pdf" },
    { name: "ROB Guard Epoxy Top Coat - MSDS", file: "documents/ROB Guard Epoxy Top Coat.pdf" },
    { name: "BITUMEN-PRIMER - MSDS", file: "documents/BITUMEN-PRIMER.pdf" },
    { name: "Cempatch - MSDS", file: "documents/Cempatch SBR100_MSDS_1.pdf" },
    { name: "Jotun Pva Primer - MSDS", file: "documents/jotun pva primer.pdf" },
    { name: "National Paint Matt Emulsion - MSDS", file: "documents/National Paint Matt Emulsion.pdf" },
    { name: "NATIONAL PAINT PVA PRIMER - MSDS", file: "documents/NATIONAL PAINT PVA PRIMER.pdf" },
    { name: "NATIONAL PAINT TEXO COMPOUND - MSDS", file: "documents/NATIONAL PAINT TEXO COMPOUND.pdf" },
    { name: "Jotashield topcoat silk - MSDS", file: "documents/Jotashield topcoat silk.pdf" }
];

documents.sort((a, b) => a.name.localeCompare(b.name));

// Populate the list of documents when the page loads
window.onload = function () {
    displayDocuments(documents);
};
function displayDocuments(docs) {
    const results = document.getElementById("results");
    results.innerHTML = ""; // Clear the current list

    docs.forEach((doc, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. `; // Add numbering
        const link = document.createElement("a");
        link.href = doc.file;
        link.textContent = doc.name;
        link.target = "_blank"; // Open in a new tab
        li.appendChild(link);
        results.appendChild(li);
    });
}
// Function to search documents
function searchDocuments() {
    const query = document.getElementById("searchBar").value.toLowerCase();

    // If the search bar is empty, display the full list of documents
    if (query.trim() === "") {
        displayDocuments(documents);
        return;
    }

    // Filter documents and display the filtered results
    const filteredDocs = documents.filter(doc => doc.name.toLowerCase().includes(query));
    displayDocuments(filteredDocs);
}
// =========== ADDED "Chemical Quantity" Button Functionality (Line 119) ===========
document.addEventListener("DOMContentLoaded", function () {
    // Get the "Chemical Quantity" button
    const chemicalQuantityBtn = document.getElementById("chemicalQuantityBtn");

    // Add click event listener to the button
    chemicalQuantityBtn.addEventListener("click", function () {
        // Open "chemical_quantity.pdf" in a new tab
        window.open("documents/CMHS CHEMICAL QUANTITY FEB 2025.pdf", "_blank");
    });
});
