// This function confirms form submission for sign-up and login
function confirmFormSubmission(formId) {
    const form = document.getElementById(formId);
    if (form) {
        form.onsubmit = function() {
            return confirm("Are you sure you want to submit this form?");
        };
    }
}

// Call the confirmFormSubmission function for signup and login forms
confirmFormSubmission("signup-form");
confirmFormSubmission("login-form");

