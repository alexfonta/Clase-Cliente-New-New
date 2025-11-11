const titulo = document.getElementById("titulo");
const contenido = document.getElementById("contenido");

const nombreGuardado = localStorage.getItem("nombreUsuario");

if (nombreGuardado) {
    titulo.textContent = `Bienvenido ${nombreGuardado}`;
} else {
    titulo.textContent = "Bienvenido";
}

contenido.innerHTML = `
    <input type="text" id="nombre" placeholder="Ingresa tu nombre">
    <button id="guardar">Guardar</button>
`;

document.getElementById("guardar").addEventListener("click", () => {
    const nombre = document.getElementById("nombre").value.trim();
    if (nombre !== "") {
        localStorage.setItem("nombreUsuario", nombre);
        location.reload();
    }
});
