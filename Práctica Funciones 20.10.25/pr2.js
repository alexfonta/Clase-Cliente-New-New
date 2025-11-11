let sigue;
let respuesta;
let palabras = [];
do{
    let respuesta = prompt("Escribe cualquier cosa: ");
    console.log(respuesta);
    palabras.push(respuesta);
    
    if(respuesta === '') {
        sigue = false;
        console.log('se para');
    } else {
        sigue = true;
        console.log('bien');
    }
}while(sigue == true);

function añadirPalabras() {
    let mapa = new Map();
    for(let i = 0; i < palabras.length; i++) {
        let palabra = palabras[i];
        if(mapa.has(palabra)) {
            mapa.set(palabra, mapa.get(palabra) +1);
        } else {
            mapa.set(palabra, 1);
        }
    }
    console.log(mapa);
    return mapa;
}

let mapaResultado = añadirPalabras(palabras);
let resultado = "<h3>Resultados:</h3><ul>";

for (let [palabra, veces] of mapaResultado) {
    resultado += `<li>${palabra}: ${veces}</li>`;
}

resultado += "</ul>";

document.getElementById('array').innerHTML = resultado;
