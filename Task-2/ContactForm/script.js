function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    // Let us check if name is empty
    if (name === "") {
        alert("Name is required.");
        return false;
    }
    // Let us validate the email format
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA0-9]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }
    // Let us Check if message is empty
    if (message === "") {
        alert("Message is required.");
        return false;
    }
    alert("Thank you for submitting this contact form");
    return true; // Form is valid(when all 3 fields are entered and also in the correct format)
}
