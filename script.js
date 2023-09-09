document.addEventListener("DOMContentLoaded", function () {
    // Password validation function
    function isStrongPassword(password) {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return regex.test(password);
    }

    // Validation for strong password
    const passwordInput = document.getElementById("password");
    const passwordError = document.getElementById("passwordError");

    passwordInput.addEventListener("input", function () {
        const password = passwordInput.value;

        if (!isStrongPassword(password)) {
            passwordError.textContent =
                "Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one digit, and one special character.";
        } else {
            passwordError.textContent = "";
        }
    });
    
   

    // Registration form submission
    const registerForm = document.getElementById("registerForm");
    const registrationMessage = document.getElementById("registrationMessage");

    registerForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const username = registerForm.elements.username.value;
        const password = registerForm.elements.password.value;

        if (isStrongPassword(password)) {
            // Implement your registration logic here (e.g., store in a database)

            // Show registration success message and link to login page
            registrationMessage.textContent = "Registration successful!";
            registrationMessage.style.color = "green";
            setTimeout(function () {
                window.location.href = "login.html";
            }, 3000); // Redirect to login after 3 seconds
        } else {
            registrationMessage.textContent = "Please fix the password issues.";
            registrationMessage.style.color = "red";
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Login form submission
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const username = loginForm.elements.username.value;
        const password = loginForm.elements.password.value;

        // Implement your login logic here (e.g., check against a database)
        // For this example, let's assume valid credentials are:
        const validUsername = "Dhivya";
        const validPassword = "Dhivya@2003";

        if (username === validUsername && password === validPassword) {
            // Redirect to secure.html on successful login
            window.location.href = "secure.html";
        } else {
            alert("Invalid username or password. Please try again.");
        }
    });
});
