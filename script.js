// Validación del formulario
const form = document.getElementById('form-contacto');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const motivo = document.getElementById('motivo').value;
    const correo = document.getElementById('correo').value;
    if (nombre === '' || motivo === '' || correo === '') {
        alert('Por favor, complete todos los campos');
    } else {
        alert('Formulario enviado con éxito');
    }
});