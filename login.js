```javascript
/* =========================================================
   VELORA LOGIN
   Login Page JavaScript
========================================================= */


/* =========================
   ELEMENTS
========================= */

const loginForm =
    document.getElementById("loginForm");

const emailInput =
    document.getElementById("email");

const passwordInput =
    document.getElementById("password");

const togglePassword =
    document.getElementById("togglePassword");

const loginButton =
    document.getElementById("loginButton");

const loginMessage =
    document.getElementById("loginMessage");

const emailError =
    document.getElementById("emailError");

const passwordError =
    document.getElementById("passwordError");

const googleLogin =
    document.getElementById("googleLogin");


/* =========================
   SHOW / HIDE PASSWORD
========================= */

if (togglePassword) {

    togglePassword.addEventListener("click", () => {

        const isPassword =
            passwordInput.type === "password";

        if (isPassword) {

            passwordInput.type = "text";

            togglePassword.textContent = "Hide";

            togglePassword.setAttribute(
                "aria-label",
                "Hide password"
            );

        } else {

            passwordInput.type = "password";

            togglePassword.textContent = "Show";

            togglePassword.setAttribute(
                "aria-label",
                "Show password"
            );

        }

    });

}


/* =========================
   EMAIL VALIDATION
========================= */

function validateEmail(email) {

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(email);

}


/* =========================
   CLEAR ERRORS
========================= */

function clearErrors() {

    emailError.textContent = "";

    passwordError.textContent = "";

    emailInput.classList.remove("input-error");

    passwordInput.classList.remove("input-error");

}


/* =========================
   SHOW MESSAGE
========================= */

function showMessage(message, type) {

    loginMessage.textContent = message;

    loginMessage.className =
        "login-message " + type;

}


/* =========================
   LOGIN FORM
========================= */

if (loginForm) {

    loginForm.addEventListener("submit", async (event) => {

        event.preventDefault();

        clearErrors();

        loginMessage.className =
            "login-message";

        const email =
            emailInput.value.trim();

        const password =
            passwordInput.value.trim();


        /* =========================
           VALIDATION
        ========================= */

        let valid = true;


        if (!email) {

            emailError.textContent =
                "Please enter your email address.";

            emailInput.classList.add(
                "input-error"
            );

            valid = false;

        } else if (!validateEmail(email)) {

            emailError.textContent =
                "Please enter a valid email address.";

            emailInput.classList.add(
                "input-error"
            );

            valid = false;

        }


        if (!password) {

            passwordError.textContent =
                "Please enter your password.";

            passwordInput.classList.add(
                "input-error"
            );

            valid = false;

        } else if (password.length < 6) {

            passwordError.textContent =
                "Password must contain at least 6 characters.";

            passwordInput.classList.add(
                "input-error"
            );

            valid = false;

        }


        if (!valid) {
            return;
        }


        /* =========================
           LOADING
        ========================= */

        loginButton.disabled = true;

        loginButton.classList.add("loading");


        /*
            DEMO LOGIN

            Abhi backend connected nahi hai.
            Baad mein yahan API request lagegi:

            POST /api/auth/login
        */


        try {

            await new Promise((resolve) => {

                setTimeout(resolve, 1500);

            });


            /* =========================
               DEMO SUCCESS
            ========================= */

            showMessage(
                "Login successful. Welcome to Velora!",
                "success"
            );


            /*
                Backend connect hone ke baad:

                const response = await fetch(
                    "/api/auth/login",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type":
                                "application/json"
                        },
                        body: JSON.stringify({
                            email,
                            password
                        })
                    }
                );

                const data = await response.json();

                localStorage.setItem(
                    "token",
                    data.token
                );

                window.location.href =
                    "dashboard.html";
            */


        } catch (error) {

            console.error(
                "Login Error:",
                error
            );

            showMessage(
                "Something went wrong. Please try again.",
                "error"
            );

        } finally {

            loginButton.disabled = false;

            loginButton.classList.remove(
                "loading"
            );

        }

    });

}


/* =========================
   GOOGLE LOGIN
========================= */

if (googleLogin) {

    googleLogin.addEventListener("click", () => {

        /*
            Google OAuth baad mein backend
            authentication ke saath connect hoga.
        */

        showMessage(
            "Google login will be available soon.",
            "error"
        );

    });

}


/* =========================
   REAL-TIME INPUT CLEANUP
========================= */

if (emailInput) {

    emailInput.addEventListener("input", () => {

        emailInput.classList.remove(
            "input-error"
        );

        emailError.textContent = "";

        loginMessage.className =
            "login-message";

    });

}


if (passwordInput) {

    passwordInput.addEventListener("input", () => {

        passwordInput.classList.remove(
            "input-error"
        );

        passwordError.textContent = "";

        loginMessage.className =
            "login-message";

    });

}


/* =========================
   ENTER KEY SUPPORT
========================= */

document.addEventListener("keydown", (event) => {

    if (
        event.key === "Enter" &&
        document.activeElement === passwordInput
    ) {

        loginForm.requestSubmit();

    }

});
```
