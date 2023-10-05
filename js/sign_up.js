const form = document.getElementById("signup-form");
        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const passwordInput = document.getElementById("password");
        const nameError = document.getElementById("name-error");
        const emailError = document.getElementById("email-error");
        const passwordError = document.getElementById("password-error");

        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const nameValue = nameInput.value.trim();
            const emailValue = emailInput.value.trim();
            const passwordValue = passwordInput.value.trim();

            nameError.textContent = "";
            emailError.textContent = "";
            passwordError.textContent = "";

            if (nameValue === "") {
                nameError.textContent = "Name is required";
                return;
            }

            if (!isValidEmail(emailValue)) {
                emailError.textContent = "Invalid email address";
                return;
            }

            if (passwordValue.length < 6) {
                passwordError.textContent = "Password must be at least 6 characters";
                return;
            }

            
            alert("Sign-up successful!");

            form.reset();

            window.location.href = "http://127.0.0.1:5500/index.html"
        });

        function isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }