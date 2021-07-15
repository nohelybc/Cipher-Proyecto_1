import cipher from './cipher.js';



document.getElementById("cifrar").addEventListener("click", (event) => {
    event.preventDefault();
    cipher.offset = Number(document.getElementById('offset').value);
    cipher.string = document.getElementById('string').value;
    console.log(cipher.offset + cipher.string);
    cipher.encode(cipher.offset, cipher.string);
    let visualizar = document.getElementById("output");
    visualizar.innerHTML += cipher.encode(cipher.offset, cipher.string);
});


document.getElementById("descifrar").addEventListener("click", (event) => {
    event.preventDefault();
    cipher.offset = Number(document.getElementById('offset').value);
    cipher.string = document.getElementById('string').value;
    console.log(cipher.offset + cipher.string);
    cipher.decode(cipher.offset, cipher.string);
    let visualizar = document.getElementById("output");
    visualizar.innerHTML += cipher.decode(cipher.offset, cipher.string);
});

document.getElementById("copiar").addEventListener("click", (event) => {
    event.preventDefault();
    let result = document.getElementById("output");
    result.select();
    result.setSelectionRange(0, 999999);
    document.execCommand("copy");
});

document.getElementById("limpiar").addEventListener("click", (event) => {
    event.preventDefault();
    let offset = document.getElementById("offset").value = "";
    let string = document.getElementById("string").value = "";
    let output = document.getElementById("output").innerHTML = "";
});