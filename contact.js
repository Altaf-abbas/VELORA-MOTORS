/* =========================================================
   VELORA CONTACT PAGE
========================================================= */


const contactForm =
    document.getElementById("contactForm");

const submitBtn =
    document.getElementById("submitBtn");

const successMessage =
    document.getElementById("successMessage");


/* =========================
   FORM ELEMENTS
========================= */

const nameInput =
    document.getElementById("name");

const emailInput =
    document.getElementById("email");

const phoneInput =
    document.getElementById("phone");

const subjectInput =
    document.getElementById("subject");

const messageInput =
    document.getElementById("message");


/* =========================
   ERROR ELEMENTS
========================= */

const nameError =
    document.getElementById("nameError");

const emailError =
    document.getElementById("emailError");

const phoneError =
    document.getElementById("phoneError");

const subjectError =
    document.getElementById("subjectError");

const messageError =
    document.getElementById("messageError");


/* =========================
   VALIDATE EMAIL
========================= */

function isValidEmail(email) {

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        .test(email);

}


/* =========================
   VALIDATE PHONE
========================= */

function isValidPhone(phone) {

    const cleanPhone =
        phone.replace(/\D/g, "");

    return cleanPhone.length >= 10;

}


/* =========================
   CLEAR ERRORS
========================= */

function clearErrors() {

    const groups =
        document.querySelectorAll(
            ".form-group"
        );


    groups.forEach((group) => {

        group.classList.remove(
            "error"
        );

    });


    nameError.textContent = "";

    emailError.textContent = "";

    phoneError.textContent = "";

    subjectError.textContent = "";

    messageError.textContent = "";

}


/* =========================
   VALIDATE FORM
========================= */

function validateForm() {

    clearErrors();

    let valid = true;


    /* NAME */

    const name =
        nameInput.value.trim();


    if (name.length < 2) {

        nameInput
            .closest(".form-group")
            .classList.add("error");

        nameError.textContent =
            "Please enter your name.";

        valid = false;

    }


    /* EMAIL */

    const email =
        emailInput.value.trim();


    if (!isValidEmail(email)) {

        emailInput
            .closest(".form-group")
            .classList.add("error");

        emailError.textContent =
            "Please enter a valid email.";

        valid = false;

    }


    /* PHONE */

    const phone =
        phoneInput.value.trim();


    if (!isValidPhone(phone)) {

        phoneInput
            .closest(".form-group")
            .classList.add("error");

        phoneError.textContent =
            "Please enter a valid phone number.";

        valid = false;

    }


    /* SUBJECT */

    if (!subjectInput.value) {

        subjectInput
            .closest(".form-group")
            .classList.add("error");

        subjectError.textContent =
            "Please select an enquiry type.";

        valid = false;

    }


    /* MESSAGE */

    const message =
        messageInput.value.trim();


    if (message.length < 10) {

        messageInput
            .closest(".form-group")
            .classList.add("error");

        messageError.textContent =
            "Message must be at least 10 characters.";

        valid = false;

    }


    return valid;

}


/* =========================
   FORM SUBMIT
========================= */

contactForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const isValid =
            validateForm();


        if (!isValid) {

            return;

        }


        /* Loading */

        submitBtn.classList.add(
            "loading"
        );

        submitBtn.querySelector("span")
            .textContent =
            "Sending...";


        /*
            Demo submission.

            Later this can be replaced
            with your Node.js / Express
            API call.
        */

        setTimeout(() => {

            submitBtn.classList.remove(
                "loading"
            );


            submitBtn.querySelector("span")
                .textContent =
                "Message Sent";


            successMessage.style.display =
                "flex";


            contactForm.reset();


            /* Hide success message */

            setTimeout(() => {

                successMessage.style.display =
                    "none";

                submitBtn.querySelector("span")
                    .textContent =
                    "Send Message";

            }, 5000);


        }, 1500);

    }
);


/* =========================
   LIVE ERROR CLEAR
========================= */

const inputs =
    document.querySelectorAll(
        "input, select, textarea"
    );


inputs.forEach((input) => {

    input.addEventListener(
        "input",
        () => {

            const group =
                input.closest(
                    ".form-group"
                );


            if (group) {

                group.classList.remove(
                    "error"
                );

            }

        }
    );


    input.addEventListener(
        "change",
        () => {

            const group =
                input.closest(
                    ".form-group"
                );


            if (group) {

                group.classList.remove(
                    "error"
                );

            }

        }
    );

});