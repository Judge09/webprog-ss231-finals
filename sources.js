document.addEventListener("DOMContentLoaded", function () {
    const terminalOutput = document.getElementById("terminal-output");

    // List of sources (Modify as needed)
    const sources = [
        "[INFO] Source loaded: https://example.com/article1",
        "[INFO] Source loaded: https://example.com/tutorial",
        "[INFO] API reference: https://developer.mozilla.org/",
        "[WARNING] Unverified source detected...",
        "[SECURE] Encrypted database access granted",
        "[INFO] Fetching latest documentation updates...",
        "[ALERT] Unauthorized attempt to modify logs detected",
    ];

    let index = 0;

    function addLogEntry() {
        if (index < sources.length) {
            const p = document.createElement("p");
            p.textContent = sources[index];
            terminalOutput.appendChild(p);
            terminalOutput.scrollTop = terminalOutput.scrollHeight;
            index++;
            setTimeout(addLogEntry, 1500);
        }
    }

    setTimeout(addLogEntry, 1000);
});
