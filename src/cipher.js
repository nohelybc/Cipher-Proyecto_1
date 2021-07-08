const cipher = {
    // originalmente tenía declaradas las variables para el desplazamiento y el mensaje a encriptar pero ahora he decidido declararlas en el archivo de indes
    // esto es porque dichos valores se extraerían del DOM y de esta manera pueden quedar como 'variables globales'

    encode: function(mensaje, desplazamiento) {
        string = string.trim(); //.trim sirve para...

        // en estas variables se guardarán el resultado la(s) letra(s) que se mostrarán y su valor en ascii
        let resultado = "";
        let valorAscii = 0;

        //se usa el for para recorrer nuestro string y así poder obtener la posición de nuestras letras en el alfabeto
        for (i = 0; i < mensaje.length; i++) {
            let mensaje_ascii = string.charCodeAt(i);

            //como los valores de las mayusculas en código ascii se encuentran entre 65 y 90 se usa la siguiente condición
            if ((mensaje_ascii >= 65) && (mensaje_ascii < 91)) {
                valorAscii = ((mensaje_ascii - 65 + offset) % 26) + 65;
            }
        }

    }



};

export default cipher;