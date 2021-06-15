$('#register').click(()=>{
    Swal.fire({
        title: 'Ingrese su numero de Pasaporte Masonico',
        input: 'text',
        inputAttributes: {
          autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Registrarse',
        showLoaderOnConfirm: true,
        preConfirm: (login) => {
          return fetch(`//api.github.com/users/${login}`)
            .then(response => {
              if (!response.ok) {
                throw new Error(response.statusText)
              }
              return response.json()
            })
            .catch(error => {
              Swal.showValidationMessage(
                `Request failed: ${error}`
              )
            })
        },
        allowOutsideClick: () => !Swal.isLoading()
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: `${result.value.login}'s avatar`,
            imageUrl: result.value.avatar_url
          })
        }
      })
})

$('#login').click(()=>{
    if($('#staticEmail').val() != ''){
        Swal.fire('Ingrese su Password')
        if($('#inputPassword').val() != ''){
            Swal.fire('User o Password Incorrectos')
        }
    }else{
        Swal.fire('Ingrese User y Password')
    }
    
})