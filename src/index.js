import cipher from './cipher.js';

//se declaran las variables 'globales' que en este caso serían el numero de desplazamiento  y el mensaje a encriptar
const string = document.getElementById("string").value;
const offset = document.getElementById("offset").value;
const stringCifrado = cipher.encode(offset, string);
const stringDescifrado = cipher.decode(offset, string);

console.log(string);
console.log(offset);


document.getElementById("cifrar").addEventListener("click", (event) => {
    event.preventDefault();
    //se declaran las variables 'globales' que en este caso serían el numero de desplazamiento  y el mensaje a encriptar
    // offset = parseInt(offset); //no olvidar usar el ParseInt que es lo que nos permite tomar el vaslor numerico

    const visualizarResultado = document.getElementById("output");
    visualizarResultado.innerHTML = stringCifrado;

    console.log(stringCifrado);
});


document.getElementById("descifrar").addEventListener("click", (event) => {
    event.preventDefault();
    //se declaran las variables 'globales' que en este caso serían el numero de desplazamiento  y el mensaje a encriptar
    // offset = parseInt(offset); //no olvidar usar el ParseInt que es lo que nos permite tomar el vaslor numerico

    const visualizarResultado = document.getElementById("output");
    visualizarResultado.innerHTML = stringDescifrado;

    console.log(stringDescifrado);
});