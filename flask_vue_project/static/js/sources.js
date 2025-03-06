document.addEventListener("DOMContentLoaded", function () {
    const terminalOutput = document.getElementById("terminal-output");
    const text = [
        "Initializing source logs...",
        "Loading system dependencies...",
        "Fetching references...",
        "Accessing documentation...",
        "System check: OK",
        "Source logs successfully loaded.",
        "Source 1: Bootstrap - https://getbootstrap.com/",
        "Source 2: Font Awesome - https://fontawesome.com/",
        "Source 3: Vue.js - https://vuejs.org/",
        "Source 4: Flask - https://flask.palletsprojects.com/",
        "Source 5: JSDelivr CDN - https://www.jsdelivr.com/",
        "Source 6: Google Fonts - https://fonts.google.com/",
        "Source 7: Mozilla Developer Network (MDN) - https://developer.mozilla.org/",
        "Source 8: W3Schools - https://www.w3schools.com/",
        "Source 9: Flask Static Files - https://flask.palletsprojects.com/en/2.0.x/tutorial/static/"

    ];
    
    let index = 0;

    function typeLine() {
        if (index < text.length) {
            let line = document.createElement("p");
            terminalOutput.appendChild(line);

            let charIndex = 0;
            function typeChar() {
                if (charIndex < text[index].length) {
                    line.innerHTML = text[index].slice(0, charIndex) + `<span class="cursor">|</span>`;
                    charIndex++;
                    setTimeout(typeChar, 50); // Typing speed
                } else {
                    line.innerHTML = text[index]; // Remove cursor after typing
                    index++;
                    setTimeout(typeLine, 500); // Delay before next line
                }
            }
            typeChar();
        } else {
            // Keep the blinking cursor at the last line
            let cursorSpan = document.createElement("span");
            cursorSpan.classList.add("cursor");
            cursorSpan.textContent = "|";
            terminalOutput.appendChild(cursorSpan);
        }
    }

    typeLine();
});
