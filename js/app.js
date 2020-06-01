let loginButton = document.querySelector(".login-link"); 
let modalLogin = document.querySelector(".modal-login");
let modalShod = document.querySelector(".modal-shod");
let buttonModalCloys = document.querySelector(".button-modal-cloys");
let login = modalLogin.querySelector("[name=login]");
let password = modalLogin.querySelector("[name=password]");
let form = modalLogin.querySelector("form");



loginButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalShod.classList.remove("visually-hidden");
    modalLogin.classList.remove("visually-hidden");
    login.focus();
});

buttonModalCloys.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalShod.classList.add("visually-hidden");
    modalLogin.classList.add("visually-hidden");
});

form.addEventListener("submit", function (evt) {
    let passwordValue = password.value;
    if (!login.value || !password.value || passwordValue.length < 8) {
        evt.preventDefault();
        console.log('Нужно ввести логин и пароль. Пароль должен иметь длинну не менее 8!');
        console.log(passwordValue.length);
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (!modalShod.classList.contains("visually-hidden")) {
            modalLogin.classList.add("visually-hidden");
            modalShod.classList.add("visually-hidden");
        } 
    }
});

/*

console.log('klik');

*/

