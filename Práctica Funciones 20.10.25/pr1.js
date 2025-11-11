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

const palabrasRepesNo = new Set(palabras);
palabras = [...palabrasRepesNo];
ordenar(palabras);

document.getElementById('array').innerHTML = palabras;

function ordenar(palabras) {
    palabras.sort();
    palabras.reverse();
    return palabras;
}







