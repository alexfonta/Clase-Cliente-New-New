let email = document.getElementById("email");
let password = document.getElementById("password");
let errorEmail = document.getElementById("errorEmail");
let errorPassword = document.getElementById("errorPassword");
let botonEnviar = document.getElementById("enviar");

let emailValido = false;
let passwordValido = false;

email.addEventListener("input", function() {
    if (email.value.indexOf("@") === -1) {
        errorEmail.textContent = "El email debe contener un '@'";
        emailValido = false;
    } else {
        errorEmail.textContent = "";
        emailValido = true;
    }
    comprobar();
});

password.addEventListener("input", function() {
    if (password.value.length < 8 || password.value.length > 10) {
        errorPassword.textContent = "La contraseña debe tener entre 8 y 10 caracteres";
        passwordValido = false;
    } else {
        errorPassword.textContent = "";
        passwordValido = true;
    }
    comprobar();
});

email.addEventListener("focus", function() {
    errorEmail.textContent = "";
});

password.addEventListener("focus", function() {
    errorPassword.textContent = "";
});

function comprobar() {
    if (emailValido && passwordValido) {
        botonEnviar.disabled = false;
    } else {
        botonEnviar.disabled = true;
    }
}

