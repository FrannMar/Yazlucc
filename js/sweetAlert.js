Swal.fire({
    title: 'Inserte su mail para recibir novedades',
    input: 'text',
    inputAttributes: {
    autocapitalize: 'off'
    },
    showCancelButton: true,
    confirmButtonText: 'Look up',
    showLoaderOnConfirm: true,
    preConfirm: (login) => {
    return
        then(response => {
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
        title: '¡Gracias!',
        imageUrl: result.value.avatar_url
    })
    }
})