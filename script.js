
document.addEventListener("DOMContentLoaded", () => {
    // Elements
    const fileInput = document.getElementById("fileInput");
    const loadingIndicator = document.getElementById("loading");
    const uploadButton = document.getElementById("uploadButton");
    const patientTableBody = document.querySelector("#patient-table-body");

    // --- PDF Processing ---
    async function extractTextFromPDF(file) {
        const reader = new FileReader();
        return new Promise((resolve, reject) => {
            reader.onload = async function () {
                try {
                    const typedArray = new Uint8Array(this.result);
                    const pdf = await pdfjsLib.getDocument(typedArray).promise;
                    let fullText = "";

                    for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
                        const page = await pdf.getPage(pageNum);
                        const textContent = await page.getTextContent();
                        fullText += textContent.items.map((s) => s.str).join(" ") + "\n";
                    }
                    resolve(fullText);
                } catch (err) {
                    reject(err);
                }
            };
            reader.readAsArrayBuffer(file);
        });
    }

    function parseCategories(text) {
        const categories = {
            Wellness: [],
            Traits: [],
            Monogenic: [],
            Complex: [],
            Pharma: [],
        };

        const sectionRegex =
            /(Wellness|Traits|Monogenic|Complex|Pharma) Results:\s*([\s\S]*?)(?=\n[A-Z][a-z]+ Results:|$)/g;

        let match;
        while ((match = sectionRegex.exec(text)) !== null) {
            const category = match[1];
            const content = match[2].trim();

            const entryRegex = /(.+?):\s*(Positive|Negative|Likely|Unlikely)/g;
            let entry;
            while ((entry = entryRegex.exec(content)) !== null) {
                categories[category].push({
                    name: entry[1].trim(),
                    result: entry[2],
                });
            }
        }

        return categories;
    }

    // --- Upload Handling ---
    async function handleFileUpload() {
        const file = fileInput.files[0];
        if (!file) {
            alert("Please select a PDF file first!");
            return;
        }

        try {
            loadingIndicator.classList.remove("hidden");
            uploadButton.disabled = true;

            const text = await extractTextFromPDF(file);
            const structuredData = parseCategories(text);

            console.log("Extracted Data:", structuredData);

            const response = await fetch(
                "https://www.codex.somee.com/api/Codex/AddResults",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(structuredData),
                }
            );

            if (!response.ok)
                throw new Error(`Server responded with status ${response.status}`);

            const result = await response.json();
            console.log("Server Response:", result);
            alert("Results uploaded successfully!");
            fetchAllPatients();
        } catch (error) {
            console.error("Error processing PDF:", error);
            alert("Failed to process the PDF: " + error.message);
        } finally {
            loadingIndicator.classList.add("hidden");
            uploadButton.disabled = false;
        }
    }

    uploadButton.addEventListener("click", handleFileUpload);

    // --- Patient Fetching ---
    async function fetchAllPatients() {
        const allPatientsApiUrl =
            "https://www.codex.somee.com/api/Codex/GetAllPatients";
        try {
            const response = await fetch(allPatientsApiUrl);
            if (!response.ok) {
                throw new Error(`Server responded with status ${response.status}`);
            }
            const patients = await response.json();

            console.log("Fetched Patients:", patients);

            // Clear table before reloading
            patientTableBody.innerHTML = "";

            patients.forEach((patient, index) => {
                populateTable(patient, index + 1);
            });
        } catch (error) {
            console.error("Failed to fetch patient data:", error);
            alert("Could not load patients: " + error.message);
        }
    }

    function populateTable(patient, index) {
        const row = document.createElement("tr");

        const reportCount = patient.reports ? patient.reports.length : 0;
        const testTypes = patient.reports
            ? patient.reports.map((r) => r.type).join(", ")
            : "N/A";

        row.innerHTML = `
            <td class="border px-4 py-2">${index}</td>
            <td class="border px-4 py-2">${patient.name}</td>
            <td class="border px-4 py-2">${patient.age}</td>
            <td class="border px-4 py-2">${patient.gender}</td>
            <td class="border px-4 py-2">${reportCount}</td>
            <td class="border px-4 py-2">${testTypes}</td>
            <td class="border px-4 py-2 space-x-2">
                <button onclick="launchReport('${patient.id}')" class="bg-blue-500 text-white px-2 py-1 rounded">Launch</button>
                <button onclick="copyUserLink('${patient.id}')" class="bg-green-500 text-white px-2 py-1 rounded">Copy Link</button>
                <button onclick="deletePatient('${patient.id}', '${patient.name}')" class="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
            </td>
        `;

        patientTableBody.appendChild(row);
    }

    // Load patients on page load
    fetchAllPatients();

    // --- GLOBAL ACTIONS ---
    window.launchReport = function(patientId) {
        const reportUrl = `https://cultivbureau.github.io/Codexx/report.html?patientId=${patientId}`;
        window.open(reportUrl, "_blank");
    };

    window.copyUserLink = async function(patientId) {
        const link = `https://cultivbureau.github.io/Codexx/report.html?patientId=${patientId}`;
        try {
            await navigator.clipboard.writeText(link);
            alert("Link copied to clipboard!");
        } catch (err) {
            console.error("Failed to copy:", err);
            alert("Could not copy link. Please copy manually:\n" + link);
        }
    };

    window.deletePatient = async function(patientId, patientName) {
        if (
            !confirm(
                `Are you sure you want to delete patient "${patientName}"? This cannot be undone.`
            )
        ) {
            return;
        }

        const deleteUrl = `https://www.codex.somee.com/api/Codex/DeletePatient/${patientId}`;
        try {
            const response = await fetch(deleteUrl, { method: "DELETE" });
            if (!response.ok)
                throw new Error(`Failed with status ${response.status}`);

            alert(`Patient "${patientName}" deleted successfully.`);
            // Refresh list
            fetchAllPatients();
        } catch (error) {
            console.error("Delete failed:", error);
            alert(`Failed to delete patient: ${error.message}`);
        }
    };
});
