document.addEventListener("DOMContentLoaded", function () {

    function isStrongPassword(password) {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return regex.test(password);
    }

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
    
   

    const registerForm = document.getElementById("registerForm");
    const registrationMessage = document.getElementById("registrationMessage");

    registerForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const username = registerForm.elements.username.value;
        const password = registerForm.elements.password.value;

        if (isStrongPassword(password)) {
           
            registrationMessage.textContent = "Registration successful!";
            registrationMessage.style.color = "green";
            setTimeout(function () {
                window.location.href = "login.html";
            }, 3000);
        } else {
            registrationMessage.textContent = "Please fix the password issues.";
            registrationMessage.style.color = "red";
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const username = loginForm.elements.username.value;
        const password = loginForm.elements.password.value;

        const validUsername = "Dhivya";
        const validPassword = "Dhivya@2003";

        if (username === validUsername && password === validPassword) {
          
            window.location.href = "secure.html";
        } else {
            alert("Invalid username or password. Please try again.");
        }
    });
});
