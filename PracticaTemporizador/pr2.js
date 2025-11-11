const precioElemento = document.getElementById("precio");
const mensajeElemento = document.getElementById("mensaje");

let precio = 100;

const intervalo = setInterval(() => {
    const cambio = (Math.floor(Math.random()) * 2 - 1) * 5;
    precio += cambio;
    precioElemento.textContent = `Precio: ${precio}`;

    if (precio >= 120) {
        mensajeElemento.textContent = "¡Máximo alcanzado!";
        clearInterval(intervalo);
    } else if (precio <= 80) {
        mensajeElemento.textContent = "¡Mínimo alcanzado!";
        clearInterval(intervalo);
    }
}, 1000);
