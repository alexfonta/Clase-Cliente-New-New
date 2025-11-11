function procesarPago(producto) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if (producto.trim() !== "") {
                resolve('Pago procesado correctamente para "' + producto + '"');
            } else {
                reject("No se puede procesar el pago sin producto");
            }
        }, 1500);
    });
}

function enviarPedido(direccion) {
    return new Promise(function(resolve, reject) {
        if (direccion.trim() === "") {
            reject("Dirección de envío no válida");
            return;
        }
        setTimeout(function() {
            var errorAleatorio = Math.random() < 0.2;
            if (errorAleatorio) {
                reject("Error durante el envío, intente de nuevo.");
            } else {
                resolve('Pedido enviado correctamente a "' + direccion + '"');
            }
        }, 2000);
    });
}

document.getElementById("btnComprar").addEventListener("click", function() {
    var producto = document.getElementById("producto").value;
    var direccion = document.getElementById("direccion").value;
    var resultado = document.getElementById("resultado");

    resultado.textContent = "Procesando compra...";

    procesarPago(producto)
        .then(function(mensajePago) {
            resultado.textContent = mensajePago + " | Enviando pedido...";
            return enviarPedido(direccion);
        })
        .then(function(mensajeEnvio) {
            resultado.textContent = mensajeEnvio;
        })
        .catch(function(error) {
            resultado.textContent = error;
        });
});
