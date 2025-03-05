document.addEventListener("DOMContentLoaded", function () {
    setupFeedbackTerminal();
    setupCloseButton();
    setupReopenTerminal();
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
    outputDiv.innerHTML += `<p>> ${input}</p>`; // Show user input

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

        displayFeedback(userName, userSection, userFeedback);
        step = 0; // Reset for new feedback
    }

    inputField.value = "";
    outputDiv.scrollTop = outputDiv.scrollHeight;
}

function displayFeedback(name, section, feedback) {
    const feedbackList = document.getElementById("feedback-list");
    const feedbackEntry = document.createElement("div");
    feedbackEntry.classList.add("feedback-entry");
    feedbackEntry.innerHTML = `
        <p><strong>${name}</strong> (Section: ${section})</p>
        <p>${feedback}</p>
        <hr>
    `;
    feedbackList.prepend(feedbackEntry);
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
