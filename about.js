document.addEventListener("DOMContentLoaded", function () {
    // Fake IP Address Generator
    function generateFakeIP() {
        return "192.168." + Math.floor(Math.random() * 255) + "." + Math.floor(Math.random() * 255);
    }

    document.getElementById("fake-ip").textContent = generateFakeIP();

    // Fake Last Login Time
    let now = new Date();
    document.getElementById("last-login").textContent = now.toLocaleString();

    // Typing Bio Effect
    let bioText = "Security enthusiast and OSINT specialist. Passionate about ethical hacking and understanding digital security. Likes to sleep a lot";
    let typedBio = document.getElementById("typed-bio");
    let index = 0;

    function typeBio() {
        if (index < bioText.length) {
            typedBio.textContent += bioText[index];
            index++;
            setTimeout(typeBio, 50);
        }
    }

    typeBio();

    // Improved Skills Chart
    const ctx = document.getElementById("skillsChart").getContext("2d");
    new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["Sleeping", "Python", "Java", "Web Dev", "Cybersecurity", "Prompt Engineering"],
            datasets: [{
                label: "Skill Level (%)",
                data: [100, 30, 50, 10, 70, 100],
                backgroundColor: "rgba(0, 255, 153, 0.6)",
                borderColor: "#00ff99",
                borderWidth: 2,
                borderRadius: 5
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    grid: { color: "rgba(0, 255, 153, 0.2)" },
                    ticks: { color: "#00ff99", font: { size: 14 } }
                },
                x: {
                    grid: { color: "rgba(0, 255, 153, 0.2)" },
                    ticks: { color: "#00ff99", font: { size: 14 } }
                }
            },
            plugins: {
                legend: {
                    labels: { color: "#00ff99", font: { size: 14 } }
                }
            }
        }
    });
});
