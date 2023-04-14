let tokenRoute = localStorage.getItem("jwtA");
let linkInventario = document.getElementById('inventario');
let linkBuscador = document.getElementById('buscador');

linkBuscador.addEventListener("click", (event) => {
    event.preventDefault();
    if (tokenRoute) {
      location.href = "/usuario/buscador?token=" + tokenRoute;
    } else {
      alert("No cuentas con permisos para ingresar a esta sección");
    }
});

linkInventario.addEventListener("click", (event) => {
    event.preventDefault();
    if (tokenRoute) {
      location.href = "/usuario/inventario?token=" + tokenRoute;
    } else {
      alert("No cuentas con permisos para ingresar a esta sección");
    }
});
