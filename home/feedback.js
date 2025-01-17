const { createApp } = Vue;

createApp({
    data() {
        return {
            name: '',
            email: '',
            message: '',
            submitted: false
        };
    },
    methods: {
        submitFeedback() {
            this.submitted = true;
            // Add additional logic to handle the form data if needed.
            console.log("Feedback submitted:", {
                name: this.name,
                email: this.email,
                message: this.message
            });
        }
    }
}).mount('#app');
