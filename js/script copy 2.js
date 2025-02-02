document.getElementById("gestionForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const updatedData = {
      estado: document.getElementById("estado").value,
      observaciones: document.getElementById("observaciones").value
    };
  
    localStorage.setItem("ticketStatus", JSON.stringify(updatedData));
  
    // Mostrar SweetAlert con la animación
    Swal.fire({
      title: '¡Proceso Exitoso!',
      text: 'Proceso registrado con exito',
      icon: 'success',
      showConfirmButton: false,
      timer: 3000  // La animación desaparece después de 3 segundos
    });
  });
 