import cipher from './cipher.js';

//se declaran las variables 'globales' que en este caso serían el numero de desplazamiento, el mensaje a encriptar 
//al igual que estos en la función de encode y decode

/* const string = document.getElementById("string").value;
const offset = document.getElementById("offset").value; */



document.getElementById("cifrar").addEventListener("click", (event) => {
    event.preventDefault();
    cipher.offset = Number(document.getElementById('offset').value);
    cipher.string = document.getElementById('string').value;
    console.log(cipher.offset + cipher.string)
        /*const stringCifrado =*/
    cipher.encode(cipher.offset, cipher.string);
    let visualizar = document.getElementById("output");
    visualizar.innerHTML += cipher.encode(cipher.offset, cipher.string);
    visualizar.style.display = "inline";
});


document.getElementById("descifrar").addEventListener("click", (event) => {
    event.preventDefault();
    cipher.offset = Number(document.getElementById('offset').value);
    cipher.string = document.getElementById('string').value;
    console.log(cipher.offset + cipher.string)
        /*const stringCifrado =*/
    cipher.decode(cipher.offset, cipher.string);
    let visualizar = document.getElementById("output");
    visualizar.innerHTML += cipher.decode(cipher.offset, cipher.string);
    visualizar.style.display = "inline";
});

document.getElementById("copiar").addEventListener("click", (event) => {
    let result = document.getElementById("output");
    result.select();
    result.setSelectionRange(0, 999999);
    document.execCommand("copy");
});