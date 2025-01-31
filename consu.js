function consultarTicket() {
    const ticketId = document.getElementById("ticketId").value;
    const resultDiv = document.getElementById("result");

    if (!ticketId) {
        Swal.fire('Error', 'Por favor ingresa un número de ticket', 'error');
        return;
    }

    const ticketsDB = {
        "1234": {
            id: "1234",
            nombre: "Juan Pérez",
            fecha: "2025-01-29",
            hora: "10:00 AM",
            descripcion: "Consulta sobre el estado del servicio.",
            status: "Abierto",
        },
        "5678": {
            id: "5678",
            nombre: "Ana López",
            fecha: "2025-01-28",
            hora: "10:00 AM",
            descripcion: "Problema con la conexión a internet.",
            status: "Cerrado",
        },
        "4321": {
            id: "4321",
            nombre: "Mario Gomez",
            fecha: "2025-01-28",
            hora: "10:00 AM",
            descripcion: "Problema con la torre del Computador.",
            status: "En Proceso",
        }
    };

    // Verificar si el ticket existe en la "base de datos"
    const ticketData = ticketsDB[ticketId];

    if (ticketData) {
    
        Swal.fire({
            icon: 'success',
            title: 'Ticket encontrado!',
            text: `Tu ticket fue encontrado exitosamente.`,
            showConfirmButton: false,
            timer: 1500,
            didClose: () => {
                
                resultDiv.style.display = 'block';
                resultDiv.innerHTML = `
                    <p><strong>Solicitado por:</strong> ${ticketData.nombre}</p>
                    <p><strong>ID:</strong> ${ticketData.id}</p>
                    <p><strong>Estado:</strong> ${ticketData.status}</p>
                    <p><strong>Fecha:</strong> ${ticketData.fecha}</p>
                    <p><strong>Hora:</strong> ${ticketData.hora}</p>
                    <p><strong>Descripción:</strong> ${ticketData.descripcion}</p>
                `;
            }
        });
    } else {
        // mensaje de "No encontrado"
        Swal.fire({
            icon: 'error',
            title: 'Ticket no encontrado',
            text: 'El ticket con ese ID no está registrado en nuestra base de datos.',
            showConfirmButton: true,
            timer: 3000,
        });
    }
}
