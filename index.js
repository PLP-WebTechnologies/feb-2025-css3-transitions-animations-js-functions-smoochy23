document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    let isValid = true;

    // Fullname validation
    const fullname = document.getElementById("Fullname");
    const fullnameError = document.getElementById("Fullname-error");
    if (fullname.value.trim() === "") {
        fullnameError.textContent = "This field is required";
        fullname.classList.add("invalid");
        fullname.classList.remove("valid");
        fullnameError.style.display = "block";
        isValid = false;
    } else {
        fullnameError.textContent = "";
        fullname.classList.add("valid");
        fullname.classList.remove("invalid");
        fullnameError.style.display = "none";
    }

    // Email validation
    const email = document.getElementById("email");
    const emailError = document.getElementById("email-error");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
        emailError.textContent = "Please enter a valid email address";
        email.classList.add("invalid");
        email.classList.remove("valid");
        emailError.style.display = "block";
        isValid = false;
    } else {
        emailError.textContent = "";
        email.classList.add("valid");
        email.classList.remove("invalid");
        emailError.style.display = "none";
    }

    // Password validation
    const password = document.getElementById("password");
    const passwordError = document.getElementById("password-error");
    if (password.value.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters";
        password.classList.add("invalid");
        password.classList.remove("valid");
        passwordError.style.display = "block";
        isValid = false;
    } else {
        passwordError.textContent = "";
        password.classList.add("valid");
        password.classList.remove("invalid");
        passwordError.style.display = "none";
    }

    // Confirm Password validation
    const confirmPassword = document.getElementById("confirm-password");
    const confirmPasswordError = document.getElementById("confirm-password-error");
    if (confirmPassword.value !== password.value) {
        confirmPasswordError.textContent = "Passwords do not match";
        confirmPassword.classList.add("invalid");
        confirmPassword.classList.remove("valid");
        confirmPasswordError.style.display = "block";
        isValid = false;
    } else {
        confirmPasswordError.textContent = "";
        confirmPassword.classList.add("valid");
        confirmPassword.classList.remove("invalid");
        confirmPasswordError.style.display = "none";
    }

    // If all fields are valid, submit the form
    if (isValid) {
        alert("Form submitted successfully!");
        this.submit();
    }
});