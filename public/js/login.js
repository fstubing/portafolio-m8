let formularioLogin = document.getElementById("form-login");

formularioLogin.addEventListener("submit", (event) => {
  event.preventDefault();
  axios.post("/usuarios/login", formularioLogin)
    .then(function (response) {
      console.log(response);
      if(response.data.tokenAdmin){
        alert("Usuario autenticado correctamente");
        localStorage.setItem("jwtA", response.data.tokenAdmin);
      } else {
        alert("Usuario autenticado correctamente");
        localStorage.setItem("jwt", response.data.token);
      }
      //location.href = "/";
    })
    .catch(function (error) {
      console.log(error);
      alert(
        `Código: ${error.response.data.code} \nMensaje: ${error.response.data.message}`
      );
    });
});

let token = localStorage.getItem("jwt");
let tokenAdmin = localStorage.getItem("jwtA");

let btnIniciarSesion = document.getElementById("btnIniciarSesion");
let btnCerrarSesion = document.getElementById("btnCerrarSesion");
let entrada = document.getElementById("entrada");
let entradaAdmin = document.getElementById("entradaAdmin");
let linkPerfil = document.getElementById("linkPerfil");
let linkPerfilAdmin = document.getElementById("linkPerfilAdmin");

if(token || tokenAdmin) {
  btnIniciarSesion.classList.add("d-none");
  btnCerrarSesion.classList.remove("d-none");
} else {
  btnIniciarSesion.classList.remove("d-none");
  btnCerrarSesion.classList.add("d-none");
}

if (token) {
  entrada.classList.remove("d-none");
} else {
  entrada.classList.add("d-none");
}

if (tokenAdmin) {
  entradaAdmin.classList.remove("d-none");
} else {
  entradaAdmin.classList.add("d-none");
}

btnCerrarSesion.addEventListener("click", (event) => {
  alert("Ha cerrado cesión correctamente");
  localStorage.clear();
  location.href = "/";
});

linkPerfil.addEventListener("click", (event) => {
  event.preventDefault();
  if (token) {
    location.href = "/perfil?token=" + token;
  } else {
    alert("No cuentas con permisos para ingresar a esta sección");
  }
});


linkPerfilAdmin.addEventListener("click", (event) => {
  event.preventDefault();
  if (tokenAdmin) {
    location.href = "/usuario?token=" + tokenAdmin;
  } else {
    alert("No cuentas con permisos para ingresar a esta sección");
  }
});


if(token){
  axios.get(`/carritos?token=${token}`)
  .then(function (response) {
    console.log(response)
    document.querySelector("#cantidad-productos").innerHTML= response.data.indicadorCarro[0].sum    
  })
  .catch(function (error) {
     console.log(error);
  });
}

linkCarro = document.getElementById("irAlCarro");

linkCarro.addEventListener("click", (event) => {
  event.preventDefault();
  if (token) {
    location.href = "/cart?token=" + token;
  } else {
    location.href = "/cart";
  }
});