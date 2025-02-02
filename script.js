// Function to toggle visibility of TOC sections
function toggleTOC(sectionId) {
    let section = document.getElementById(sectionId);
    if (section.style.display === "none" || section.style.display === "") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}

// Dark mode toggle function (optional)
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// Apply dark mode if previously enabled
window.onload = function() {
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
    }
};

// Save dark mode preference
document.getElementById("dark-mode-btn")?.addEventListener("click", function () {
    let body = document.body;
    body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", body.classList.contains("dark-mode") ? "enabled" : "disabled");
});
