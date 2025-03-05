document.addEventListener("DOMContentLoaded", function () {
    setupFeedbackTerminal();
    setupCloseButton();
    setupReopenTerminal();
    loadFeedback();
});

let step = 0;
let userName = "";
let userSection = "";
let userFeedback = "";

function setupFeedbackTerminal() {
    const inputField = document.getElementById("terminal-input");
    const outputDiv = document.getElementById("terminal-output");

    inputField.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            let userInput = inputField.value.trim();
            if (userInput) {
                processStep(userInput, outputDiv, inputField);
            }
        }
    });
}

function processStep(input, outputDiv, inputField) {
    outputDiv.innerHTML += `<p>> ${input}</p>`;

    if (step === 0) {
        userName = input;
        outputDiv.innerHTML += `<p>Hello, ${userName}! What is your section?</p>`;
        step++;
    } else if (step === 1) {
        userSection = input;
        outputDiv.innerHTML += `<p>Got it! Now, please enter your feedback:</p>`;
        step++;
    } else if (step === 2) {
        userFeedback = input;
        outputDiv.innerHTML += `<p>Thank you, ${userName} from ${userSection}!</p>`;
        outputDiv.innerHTML += `<p>Your feedback has been recorded.</p>`;

        submitFeedback(userName, userSection, userFeedback);
        step = 0;
    }

    inputField.value = "";
    outputDiv.scrollTop = outputDiv.scrollHeight;
}

function submitFeedback(name, section, feedback) {
    fetch("/submit_feedback", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            section: section,
            message: feedback
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            loadFeedback(); // Refresh feedback list
        }
    })
    .catch(error => console.error("Error:", error));
}

function loadFeedback() {
    fetch("/get_feedback")
        .then(response => response.json())
        .then(data => {
            const feedbackList = document.getElementById("feedback-list");
            feedbackList.innerHTML = "";

            data.forEach(feedback => {
                const feedbackEntry = document.createElement("div");
                feedbackEntry.classList.add("feedback-entry");
                feedbackEntry.innerHTML = `
                    <p><strong>${feedback.name}</strong> (Section: ${feedback.section})</p>
                    <p>${feedback.message}</p>
                    <hr>
                `;
                feedbackList.prepend(feedbackEntry);
            });
        })
        .catch(error => console.error("Error fetching feedback:", error));
}

/* Close Terminal */
function setupCloseButton() {
    document.getElementById("closeTerminal").addEventListener("click", function () {
        document.querySelector(".terminal-container").style.display = "none";
    });
}

/* Reopen Terminal When Clicking the Feedback List */
function setupReopenTerminal() {
    document.querySelector(".feedback-list-container").addEventListener("click", function () {
        document.querySelector(".terminal-container").style.display = "block";
    });
}
