document.addEventListener("DOMContentLoaded", function() {
    const input = document.getElementById("input");
    const terminal = document.getElementById("terminal");

    if (input) {
        input.addEventListener("keypress", function(event) {
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
    }

    // Function to toggle visibility of TOC sections with animation
    function toggleTOC(sectionId) {
        let section = document.getElementById(sectionId);
        if (section) {
            section.classList.toggle("active");
        } else {
            console.error("Section with ID " + sectionId + " not found.");
        }
    }

    // Attach toggleTOC function globally
    window.toggleTOC = toggleTOC;

    function processCommand(cmd) {
        switch(cmd) {
            case "help":
                return "Available commands: help, hack, clear";
            case "hack":
                return "Accessing secure database... ████████ 99% COMPLETE";
            case "clear":
                terminal.innerHTML = "";
                return "Console cleared.";
            default:
                return "Unknown command. Type 'help' for available commands.";
        }
    }
});
