const { createApp } = Vue;

createApp({
    data() {
        return {
            feedbackMessage: "",
            rating: 0,
            submittedMessage: ""
        };
    },
    methods: {
        setRating(star) {
            this.rating = star;
        },
        submitFeedback() {
            if (this.feedbackMessage.trim() === "" || this.rating === 0) {
                alert("Please provide feedback and a rating.");
                return;
            }
            this.submittedMessage = `You rated ${this.rating} stars and said: "${this.feedbackMessage}"`;
            this.feedbackMessage = "";
            this.rating = 0;
        }
    }
}).mount("#feedback-app");
