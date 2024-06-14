"use strict"

const modalTrigger = document.getElementById("modal_trigger")
const modalWrapper = document.getElementById("modal_wrapper")
const modalClose = document.getElementById("modal_close")

modalTrigger.addEventListener("click", function () {
    modalWrapper.style.display = "block";
});

modalClose.addEventListener("click", function () {
    modalWrapper.style.display = "none";
});

modalWrapper.addEventListener("click", function (event) {
    if (event.target === modalWrapper) {
        modalWrapper.style.display = "none";
    }
});

const formElement = document.getElementById('login_form');
const signInButton = document.getElementById("login")
const registerButton = document.getElementById("register")
signInButton.addEventListener("click", submitForm);
registerButton.addEventListener("click", submitForm);

function submitForm(eo) {
    eo.preventDefault();
    const formData = new FormData(formElement);
    const emailTelephone = formData.get('email_telephone');
    const password = formData.get('password');
    const save = formData.get('save');
    console.log(emailTelephone, password, save);
    modalWrapper.style.display = "none";
}