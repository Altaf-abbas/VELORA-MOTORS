```javascript
/* =========================================================
   VELORA SIGNUP
   Signup Page JavaScript
========================================================= */


/* =========================
   ELEMENTS
========================= */

const signupForm =
    document.getElementById("signupForm");

const fullName =
    document.getElementById("fullName");

const email =
    document.getElementById("email");

const password =
    document.getElementById("password");

const confirmPassword =
    document.getElementById("confirmPassword");

const terms =
    document.getElementById("terms");

const togglePassword =
    document.getElementById("togglePassword");

const toggleConfirmPassword =
    document.getElementById("toggleConfirmPassword");

const signupButton =
    document.getElementById("signupButton");

const signupMessage =
    document.getElementById("signupMessage");

const nameError =
    document.getElementById("nameError");

const emailError =
    document.getElementById("emailError");

const passwordError =
    document.getElementById("passwordError");

const confirmPasswordError =
    document.getElementById("confirmPasswordError");

const termsError =
    document.getElementById("termsError");

const passwordStrength =
    document.querySelector(".password-strength");

const strengthText =
    document.getElementById("strengthText");

const googleSignup =
    document.getElementById("googleSignup");


/* =========================
   SHOW / HIDE PASSWORD
========================= */

function setupPasswordToggle(button, input) {

    if (!button || !input) {
        return;
    }

    button.addEventListener("click", () => {

        if (input.type === "password") {

            input.type = "text";

            button.textContent = "Hide";

        } else {

            input.type = "password";

            button.textContent = "Show";

        }

    });

}


setupPasswordToggle(
    togglePassword,
    password
);


setupPasswordToggle(
    toggleConfirmPassword,
    confirmPassword
);


/* =========================
   EMAIL VALIDATION
========================= */

function isValidEmail(value) {

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        .test(value);

}


/* =========================
   PASSWORD STRENGTH
========================= */

function checkPasswordStrength(value) {

    passwordStrength.classList.remove(
        "weak",
        "medium",
        "strong"
    );


    if (!value) {

        strengthText.textContent =
            "Use 8 or more characters";

        return;

    }


    let score = 0;


    if (value.length >= 8) {
        score++;
    }

    if (/[A-Z]/.test(value)) {
        score++;
    }

    if (/[0-9]/.test(value)) {
        score++;
    }

    if (/[^A-Za-z0-9]/.test(value)) {
        score++;
    }


    if (score <= 1) {

        passwordStrength.classList.add(
            "weak"
        );

        strengthText.textContent =
            "Weak password";

    } else if (score <= 3) {

        passwordStrength.classList.add(
            "medium"
        );

        strengthText.textContent =
            "Medium password";

    } else {

        passwordStrength.classList.add(
            "strong"
        );

        strengthText.textContent =
            "Strong password";

    }

}


password.addEventListener(
    "input",
    () => {

        checkPasswordStrength(
            password.value
        );

    }
);


/* =========================
   CLEAR ERRORS
========================= */

function clearErrors() {

    nameError.textContent = "";

    emailError.textContent = "";

    passwordError.textContent = "";

    confirmPasswordError.textContent = "";

    termsError.textContent = "";


    fullName.classList.remove(
        "input-error"
    );

    email.classList.remove(
        "input-error"
    );

    password.classList.remove(
        "input-error"
    );

    confirmPassword.classList.remove(
        "input-error"
    );

}


/* =========================
   MESSAGE
========================= */

function showMessage(message, type) {

    signupMessage.textContent =
        message;

    signupMessage.className =
        "signup-message " + type;

}


/* =========================
   FORM SUBMIT
========================= */

signupForm.addEventListener(
    "submit",
    async (event) => {

        event.preventDefault();

        clearErrors();

        signupMessage.className =
            "signup-message";


        const nameValue =
            fullName.value.trim();

        const emailValue =
            email.value.trim();

        const passwordValue =
            password.value;

        const confirmValue =
            confirmPassword.value;


        let valid = true;


        /* =========================
           NAME
        ========================= */

        if (!nameValue) {

            nameError.textContent =
                "Please enter your full name.";

            fullName.classList.add(
                "input-error"
            );

            valid = false;

        } else if (nameValue.length < 3) {

            nameError.textContent =
                "Name must contain at least 3 characters.";

            fullName.classList.add(
                "input-error"
            );

            valid = false;

        }


        /* =========================
           EMAIL
        ========================= */

        if (!emailValue) {

            emailError.textContent =
                "Please enter your email address.";

            email.classList.add(
                "input-error"
            );

            valid = false;

        } else if (!isValidEmail(emailValue)) {

            emailError.textContent =
                "Please enter a valid email address.";

            email.classList.add(
                "input-error"
            );

            valid = false;

        }


        /* =========================
           PASSWORD
        ========================= */

        if (!passwordValue) {

            passwordError.textContent =
                "Please create a password.";

            password.classList.add(
                "input-error"
            );

            valid = false;

        } else if (passwordValue.length < 8) {

            passwordError.textContent =
                "Password must contain at least 8 characters.";

            password.classList.add(
                "input-error"
            );

            valid = false;

        }


        /* =========================
           CONFIRM PASSWORD
        ========================= */

        if (!confirmValue) {

            confirmPasswordError.textContent =
                "Please confirm your password.";

            confirmPassword.classList.add(
                "input-error"
            );

            valid = false;

        } else if (
            passwordValue !== confirmValue
        ) {

            confirmPasswordError.textContent =
                "Passwords do not match.";

            confirmPassword.classList.add(
                "input-error"
            );

            valid = false;

        }


        /* =========================
           TERMS
        ========================= */

        if (!terms.checked) {

            termsError.textContent =
                "Please accept the Terms & Conditions.";

            valid = false;

        }


        if (!valid) {
            return;
        }


        /* =========================
           LOADING
        ========================= */

        signupButton.disabled = true;

        signupButton.classList.add(
            "loading"
        );


        /*

            FRONTEND DEMO

            Backend connect hone ke baad
            yahan API request lagegi:

            POST /api/auth/register

        */


        try {

            await new Promise(
                (resolve) => {

                    setTimeout(
                        resolve,
                        1500
                    );

                }
            );


            /* =========================
               DEMO SUCCESS
            ========================= */

            showMessage(
                "Account created successfully!",
                "success"
            );


            /*
                Backend ke baad:

                const response = await fetch(
                    "/api/auth/register",
                    {
                        method: "POST",

                        headers: {
                            "Content-Type":
                                "application/json"
                        },

                        body: JSON.stringify({
                            name: nameValue,
                            email: emailValue,
                            password: passwordValue
                        })
                    }
                );

                const data =
                    await response.json();

                if (!response.ok) {
                    throw new Error(
                        data.message
                    );
                }

                window.location.href =
                    "login.html";
            */


        } catch (error) {

            console.error(
                "Signup Error:",
                error
            );

            showMessage(
                "Something went wrong. Please try again.",
                "error"
            );

        } finally {

            signupButton.disabled = false;

            signupButton.classList.remove(
                "loading"
            );

        }

    }
);


/* =========================
   INPUT ERROR CLEANUP
========================= */

fullName.addEventListener(
    "input",
    () => {

        fullName.classList.remove(
            "input-error"
        );

        nameError.textContent = "";

    }
);


email.addEventListener(
    "input",
    () => {

        email.classList.remove(
            "input-error"
        );

        emailError.textContent = "";

    }
);


password.addEventListener(
    "input",
    () => {

        password.classList.remove(
            "input-error"
        );

        passwordError.textContent = "";

    }
);


confirmPassword.addEventListener(
    "input",
    () => {

        confirmPassword.classList.remove(
            "input-error"
        );

        confirmPasswordError.textContent = "";

    }
);


terms.addEventListener(
    "change",
    () => {

        termsError.textContent = "";

    }
);


/* =========================
   GOOGLE SIGNUP
========================= */

googleSignup.addEventListener(
    "click",
    () => {

        showMessage(
            "Google signup will be available soon.",
            "error"
        );

    }
);
```
