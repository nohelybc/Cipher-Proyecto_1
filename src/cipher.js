//const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const cipher = {
    // originalmente tenía declaradas las variables para el desplazamiento y el mensaje a encriptar pero ahora he decidido declararlas en el archivo de indes
    // esto es porque dichos valores se extraerían del DOM y de esta manera pueden quedar como 'variables globales'

    function(mensaje, desplazamiento) {
        mensaje = mensaje.trim();

        function encode(mensaje, desplazamiento) {
            let valorAscii = mensaje.charCodeAt(i);

            if (valorAscii >= 65 && <= 90) {
                desplazo = (valorAscii - 65 + 3) % 26 + 65;
            }
        }


    }



};

export default cipher;