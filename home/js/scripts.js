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
    }, 3000);
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

