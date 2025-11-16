const container = document.getElementById("container");
const containerHtml = document.getElementById("containerHtml");

let puntuacion = 0;
let usuarioActual = "";

const preguntas = [
    { texto: "El sol es una estrella", respuesta: true },
    { texto: "La tierra es plana", respuesta: false },
    { texto: "2 + 2 = 4", respuesta: true },
    { texto: "JavaScript es un lenguaje de programación", respuesta: true },
];

function mostrarLogin() {
    container.innerHTML = 
        `<h2>Bienvenido al Login</h2>
        <input type="text" placeholder="Usuario" id="usuario">
        <p id="mensajeErrorArroba"></p>
        <button type="submit" id="enviar">Iniciar sesión</button>
    `;

    document.getElementById('enviar').onclick = function () {
        const input = document.getElementById('usuario');
        const mensaje = document.getElementById('mensajeErrorArroba');
        let usuario = input.value;

        if (usuario.indexOf("@") === -1) {
            mensaje.textContent = "El usuario debe contener un @";
            input.select();
            return;
        }

        usuarioActual = usuario;
        ocultarHtml();
        mostrarPantalla2(usuarioActual);
    };
}

function ocultarHtml() {
    containerHtml.innerHTML = "";
}

const temporizador = setTimeout(function (){
    mostrarLogin();
    ocultarHtml();
}, 5000);

document.addEventListener("keydown", function(evento) {
    if(evento.ctrlKey && evento.key === "F10") {
        clearTimeout(temporizador); 
        mostrarLogin();
        ocultarHtml();
    }
});

function mostrarPantalla2(usuario) {
    container.innerHTML = `
        <h2>Hola ${usuario}</h2>
        <button id="botonPreguntas">Preguntas</button>
        <div id="panelDerecha">
            <h4>Panel de respuestas:</h4>
        </div>
    `;

    document.getElementById("botonPreguntas").onclick = function () {
        mostrarPantalla3();
    };
}

function mostrarPantalla3() {
    const pregunta = preguntas[Math.floor(Math.random() * preguntas.length - 1)];
    let respuestaSeleccionada = null;
    let preguntaContestada = false;

    const panel = document.getElementById("panelDerecha");
    panel.id = "panelDerecha";

    container.innerHTML = 
        `<h3>Pregunta:</h3>
        <p>${pregunta.texto}</p>
        <button id="verdadero">Verdadero</button>
        <button id="falso">Falso</button>
        <p>Puntuación: <span id="puntuacion">${puntuacion}</span></p>
        <button id="atras">Atrás</button>
        <button id="grabar">Grabar</button>`;

    container.appendChild(panel);

    function seleccionarRespuesta(valor) {
        if (!preguntaContestada) {
            respuestaSeleccionada = valor;
            if (respuestaSeleccionada === pregunta.respuesta) {
                puntuacion += 5;
            }
            document.getElementById("puntuacion").textContent = puntuacion;
            preguntaContestada = true;
        }
    }

    document.getElementById("verdadero").onclick = function () {
        seleccionarRespuesta(true);
    };

    document.getElementById("falso").onclick = function () {
        seleccionarRespuesta(false);
    };

    document.getElementById("atras").onclick = function () {
        mostrarPantalla2(usuarioActual);
    };

    document.getElementById("grabar").onclick = function () {
    let estado;

    if (respuestaSeleccionada === pregunta.respuesta) {
        estado = "OK";
    } else {
        estado = "Incorrecto";
    }

    let respuestaTexto;
    if (respuestaSeleccionada) {
        respuestaTexto = "Verdadero";
    } else {
        respuestaTexto = "Falso";
    }

    panel.innerHTML += `<p>Pregunta: ${pregunta.texto} | Respuesta: ${respuestaTexto} | Puntuación: ${puntuacion} | Estado: ${estado}</p>`;

    mostrarPantalla3();
};

}
