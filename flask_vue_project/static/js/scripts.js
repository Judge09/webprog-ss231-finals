function getDeviceName() {
    let userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.includes("windows")) return "Windows PC";
    if (userAgent.includes("mac")) return "MacBook";
    if (userAgent.includes("iphone")) return "iPhone";
    if (userAgent.includes("android")) return "Android Device";
    return "Unknown Device";
}

function showPopup() {
    let popup = document.getElementById("hackedPopup");
    let countdownText = document.getElementById("countdown");
    let deviceText = document.getElementById("deviceName");

    deviceText.textContent = getDeviceName(); // Set detected device name
    popup.style.display = "block";

    let countdown = 5;
    let interval = setInterval(() => {
        countdown--;
        countdownText.textContent = countdown;

        if (countdown <= 0) {
            clearInterval(interval);
            closePopup();
        }
    }, 1000);
}

function closePopup() {
    document.getElementById("hackedPopup").style.display = "none";
    startMatrixIntro();
}

window.onload = showPopup;



// matrix intro with binary of "Jhon Lloyd Nicolas"
function startMatrixIntro() {
    let matrixIntro = document.getElementById("matrixIntro");
    matrixIntro.classList.remove("hidden");

    let canvas = document.getElementById("matrixCanvas");
    let ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let columns = Math.floor(canvas.width / 20);
    let drops = Array(columns).fill(0);

    function drawMatrix() {
        ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#0F0";
        ctx.font = "16px Courier New"; // Slightly smaller for a better look

        for (let i = 0; i < drops.length; i++) {
            let text = Math.random() > 0.5 ? "0" : "1"; // random binary digits
            ctx.fillText(text, i * 20, drops[i] * 20);

            if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    let interval = setInterval(drawMatrix, 50);

    setTimeout(() => {
        clearInterval(interval);
        fadeOutIntro();
    }, 7000);
}

function fadeOutIntro() {
    let matrixIntro = document.getElementById("matrixIntro");
    matrixIntro.style.opacity = "0";

    setTimeout(() => {
        matrixIntro.style.display = "none";
        document.getElementById("mainContent").classList.remove("hidden");
    }, 500);
}

window.onload = startMatrixIntro;



function fadeOutIntro() {
    let matrixIntro = document.getElementById("matrixIntro");
    matrixIntro.style.opacity = "0";
    
    setTimeout(() => {
        matrixIntro.style.display = "none"; 
        document.getElementById("mainContent").classList.remove("hidden"); // ensure visibility
    }, 500);
}

function showMainContent() {
    document.getElementById("mainContent").classList.remove("hidden");
    sessionStorage.setItem("visited", "true");
}

window.onload = showPopup;

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(startTypingEffect, 2000); // 12-second delay
    setupTerminal();
});

/* Typing Effect */
function startTypingEffect() {
    const text = "Welcome! My name is Jhon LLoyd Nicolas";
    const typingElement = document.getElementById("typingText");
    let index = 0;

    function type() {
        if (index < text.length) {
            typingElement.textContent += text[index];
            index++;
            setTimeout(type, 100);
        }
    }
    type();
}

document.addEventListener("DOMContentLoaded", function () {
    startHackingConsole(); // Runs fake console logs
    generateFlickeringCode(); // Runs background flickering text
});

/* Fake Hacking Console */
function startHackingConsole() {
    const consoleOutput = document.getElementById("console-output");
    const logs = [
        "Initializing encryption protocols...",
        "Bypassing firewall...",
        "Connecting to secure node...",
        "Decrypting access keys...",
        "Injecting payload...",
        "Access granted. System compromised."
    ];

    let index = 0;

    function addLog() {
        if (index < logs.length) {
            const logEntry = document.createElement("p");
            logEntry.textContent = "> " + logs[index];
            consoleOutput.appendChild(logEntry);
            consoleOutput.scrollTop = consoleOutput.scrollHeight; // Auto-scroll
            index++;
            setTimeout(addLog, Math.random() * 2000 + 500); // Random delay
        }
    }

    addLog();
}

document.addEventListener("DOMContentLoaded", function () {
    const imageContainer = document.querySelector(".image-container");
    const secretButton = document.querySelector(".secret-text");

    if (imageContainer && secretButton) {
        imageContainer.addEventListener("click", function () {
            // Toggle visibility on click
            if (secretButton.style.display === "block") {
                secretButton.style.display = "none";
                imageContainer.querySelector("img").style.opacity = "1"; // Show image
            } else {
                secretButton.style.display = "block";
                imageContainer.querySelector("img").style.opacity = "0"; // Hide image
            }
        });

        // Show modal when clicking the secret file button
        secretButton.addEventListener("click", function () {
            document.getElementById("hintModal").style.display = "flex";
        });
    }
});
