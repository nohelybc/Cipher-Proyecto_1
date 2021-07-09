import cipher from './cipher.js';

document.getElementById("cifrar").addEventListener("click", (event) => {
    event.preventDefault();
    //se declaran las variables 'globales' que en este caso serían el numero de desplazamiento  y el mensaje a encriptar
    let string = document.getElementById("string").value;

    let offset = document.getElementById("offset").value;
    offset = parseInt(offset);

    let resultado = cipher.encode(offset, string);
    let mostrarResultado = document.getElementById("string")
    mostrarResultado.value = resultado;
})

console.log(string);
console.log(offset);

//console.log(cipher);