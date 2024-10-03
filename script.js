// Simple login validation
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simple validation check
    if (username === "admin" && password === "password") {
        alert("Login successful!");
    } else {
        // Add shake effect if login fails
        const loginBox = document.querySelector(".login-box");
        loginBox.classList
