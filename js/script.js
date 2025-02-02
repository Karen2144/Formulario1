
       // Función para obtener la fecha y la hora actual
function setFechaYHora() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Meses comienzan desde 0
    const day = String(today.getDate()).padStart(2, '0');
    const hour = String(today.getHours()).padStart(2, '0');
    const minute = String(today.getMinutes()).padStart(2, '0');

    const date = `${year}-${month}-${day}`; // Formato yyyy-mm-dd
    const time = `${hour}:${minute}`; // Formato hh:mm

    // Asignar los valores a los campos de fecha y hora
    document.getElementById('fecha').value = date;
    document.getElementById('hora').value = time;
}

// Llamar a la función cuando se carga la página
window.addEventListener("DOMContentLoaded", setFechaYHora);

document.getElementById("ticketForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Validación de los campos
    const nombre = document.getElementById("nombreSolicitante").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const descripcion = document.getElementById("descripcion").value.trim();

    if (!nombre || !correo || !telefono || !descripcion) {
        Swal.fire({
            icon: 'error',
            title: '¡Oops!',
            text: 'Por favor, complete todos los campos requeridos.',
            confirmButtonColor: '#d33',
        });
        return;
    }

    // Simulación de envío del formulario
    Swal.fire({
        icon: 'success',
        title: '¡Solicitud Enviada!',
        text: 'Su solicitud está siendo procesada.',
        confirmButtonColor: '#28a745',
    }).then(() => {
        document.getElementById("ticketForm").reset();
        setFechaYHora(); // Restablece la fecha y la hora después de enviar
    });
});
    
