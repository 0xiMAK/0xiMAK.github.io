// Function to toggle visibility of TOC sections
function toggleTOC(sectionId) {
    let section = document.getElementById(sectionId);
    if (section.style.display === "none" || section.style.display === "") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}

// Dark mode toggle function
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode") ? "enabled" : "disabled");
}

// Apply dark mode if previously enabled
window.onload = function () {
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
    }

    // Attach event listener for dark mode button if it exists
    document.getElementById("dark-mode-btn")?.addEventListener("click", toggleDarkMode);
};

// Terminal functionality
document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("input");
    const terminal = document.getElementById("terminal");

    input.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            let command = input.value.toLowerCase();
            let response = processCommand(command);
            let newLine = document.createElement("p");
            newLine.classList.add("green-text");
            newLine.textContent = "> " + response;
            terminal.appendChild(newLine);
            input.value = "";
            terminal.scrollTop = terminal.scrollHeight;
        }
    });
});

// Process terminal commands
function processCommand(cmd) {
    switch (cmd) {
        case "help":
            return "Available commands: help, hack, clear";
        case "hack":
            return "Accessing secure database... ████████ 99% COMPLETE";
        case "clear":
            document.getElementById("terminal").innerHTML = "";
            return "Console cleared.";
        default:
            return "Unknown command. Type 'help' for available commands.";
    }
}
