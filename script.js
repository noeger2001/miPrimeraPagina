// Seleccionar el formulario y los campos de entrada
const form = document.getElementById('contact-form');
const nombreInput = document.getElementById('nombre');
const emailInput = document.getElementById('email');
const mensajeInput = document.getElementById('mensaje');

// Agregar evento de envío al formulario
form.addEventListener('submit', function(event) {
  // Verificar si los campos están vacíos
  if (nombreInput.value === '' || emailInput.value === '' || mensajeInput.value === '') {
    event.preventDefault(); // Detener el envío del formulario
    alert('Por favor, complete todos los campos.');
  }
});
