// Boton que envia una alerta
$('#alert').click(()=>{
    Swal.fire({
        position: 'top-end',
        icon: 'info',
        title: 'Esta es una alerta de prueba',
        showConfirmButton: false,
        timer: 6500
      })
})