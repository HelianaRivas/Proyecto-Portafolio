
const formulario = document.getElementById('consultaForm')

formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    const nombreApellido = document.getElementById('nombreapellido').value;
    const correoElectronico = document.getElementById('correoelectronico').value;
    const telefono = document.getElementById('telefono').value
    const asunto = document.getElementById('asunto').value;
    const mensaje = document.getElementById('mensaje').value;

    const emailVerificacion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const letrasVerificacion = /^[a-zA-Z\s]+$/;
    const numerosTelefono = /^\d+$/;

    if (!emailVerificacion.test(correoElectronico)) {
        alert('Por favor, ingrese un email válido.');
        return;
    }

    if (!numerosTelefono.test(telefono)) {
        alert('Por favor, ingrese un número de telefono válido');
        return;
    }

    if (!letrasVerificacion.test(nombreApellido)) {
        alert('Por favor, ingrese un nombre válido.');
        return;
    }

    if (confirm('¿Desea completar el envío?')) {
        alert('Formulario enviado con éxito.');
        formulario.reset();
    } else {
        alert('Envío cancelado.');
    }
});
