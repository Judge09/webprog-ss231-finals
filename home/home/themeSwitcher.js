const themeToggle = document.getElementById("themeToggle");
const body = document.body;
const characterImg = document.getElementById("characterImg");

// Function to toggle theme and update image size
function toggleTheme() {
    // Toggle between dark and light mode
    body.classList.toggle("dark-mode");
    body.classList.toggle("light-mode");

    // Switch character image based on the theme
    if (body.classList.contains("dark-mode")) {
        characterImg.src = "UTOPIA01.png"; // Dark mode image
    } else {
        characterImg.src = "quasar01.png"; // Light mode image
    }
}

// Event listener for theme toggle
themeToggle.addEventListener("click", toggleTheme);
