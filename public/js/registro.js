let formulario = document.getElementById("registroForm");

formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    axios.post("/usuarios/registro", formulario)
        .then(function (response) {
            if(response.data.code != 201){
                alert(response.data.message)
            }else {
                alert("Usuario creado correctamente.")
                location.href = "/"
            }
        })
        .catch(function (error) {
            console.log(error)
            alert(`Código: ${error.response.status} \nMensaje: ${error.response.data.message}`);
        })

})
