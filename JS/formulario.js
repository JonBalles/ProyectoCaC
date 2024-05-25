// Seleccionar el h1
const h1 = document.querySelector('h1');


// Seleccionar un botón
const boton = document.querySelector('button');

document.addEventListener("DOMContentLoaded", function() {
    const ayudaEnlace = document.querySelector('.form-help a');

    ayudaEnlace.addEventListener('click', function(event) {
        event.preventDefault(); 

        const mensajeAyuda = "Instrucciones para completar el formulario:\n\n" +
                             "1. Completa los campos obligatorios marcados con asterisco (*).\n" +
                             "2. Ingresa tu nombre en el campo 'Nombre'.\n" +
                             "3. Ingresa tu apellido en el campo 'Apellido'.\n" +
                             "4. Ingresa tu correo electrónico en el campo 'Email'.\n" +
                             "5. Selecciona tu país en el campo 'País'.\n" +
                             "6. Lee y acepta los términos y condiciones marcando la casilla correspondiente.\n" +
                             "7. Haz clic en el botón 'Enviar' para enviar el formulario.\n\n" +
                             "¡Gracias por completar el formulario!";

        alert(mensajeAyuda);
    });
});

