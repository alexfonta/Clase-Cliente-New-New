let botonEjecutar = document.getElementById("ejecutar");
let botonRestablecer = document.getElementById("restablecer");
let menu = document.getElementById("menu");
let resultado = document.getElementById("resultado");

botonEjecutar.onclick = function() {
    let opcion = menu.value;

    if (opcion == "1") {
        resultado.innerHTML = "Hola";
    } 
    else if (opcion == "2") {
        let caja = document.createElement("div");
        caja.style.width = "100px";
        caja.style.height = "100px";
        caja.style.backgroundColor = "red";
        caja.style.color = "white";
        caja.style.margin = "10px";
        resultado.appendChild(caja);
    } 
    else if (opcion == "3") {
        let numero = Math.floor(Math.random() * 100) + 1;
        resultado.innerHTML = "Número aleatorio: " + numero;
    } 
    else {
        alert("Selecciona una opción válida.");
    }
};

botonRestablecer.onclick = function() {
    menu.value = "";
    resultado.innerHTML = "";
};
