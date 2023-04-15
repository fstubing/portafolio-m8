// LOGICA PARA DESPLEGAR INFORMACIÓN DE LA BASE DE DATOS

/* let btnSiguiente = document.getElementById("btnSiguiente");
btnSiguiente.addEventListener("click", (event) => {
    let categoria = document.getElementById('categoriaNombre').textContent
    let limitOrden = document.getElementById('optionOrden').value

    axios.get(`/buscador/categorias?categoria=${categoria}&orden=${limitOrden}`)
    .then(function (response) {     
           cargarTabla(response.data.noticiasRender)     
    })
    .catch(function (error) {
       alert(`Código: ${error.response.data.code} \nMensaje: ${error.response.data.message}`);
    });
})


function cargarTabla(data){

    let arrayNoticias = data
    
    let template = "";
    arrayNoticias.forEach(noticia => {        
        template += `
        <tr>
            <td>${noticia.titulo}</td>
            <td>${noticia.autor}</td>
            <td>${noticia.fecha_creacion.slice(0,10)}</td>
            <td>${noticia.nombre}</td>
            <td><a href="/entrada/${noticia.id}" class="btn btn-success">Ver</a></td>
        </tr>
        `
    });

    document.querySelector("#receptorFilas").innerHTML= template;
} */


function btnMostrarVentas(id) {

    let limitOrden = document.getElementById('optionOrden').value

    axios.get("/ventas/"+id+"?orden="+limitOrden)
      .then(function (response) {
             console.log(response)
             let ventas= response.data.ventasByUserId
 
             let template = "";
             let contador=0
                 ventas.forEach(venta => {
                     contador++
                     template += `
                     <tr scope="row">
                         <td>${contador}</td>
                         <td>${venta.id}</td>
                         <td>${venta.idUsuario}</td>
                         <td>${venta.createdAt.slice(0,10)}</td>
                         <td>$ ${venta.precioTotal}</td>
                         <td><button type="button" class="btn btn-info d-block m-2 ms-5" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="detalleProductosVendidos('${venta.id}')">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-fill" viewBox="0 0 16 16">
                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z"/>
                            </svg>
                         </button></td>
                     </tr>
                     `                     
                 });

                 document.querySelector("#receptorFilas").innerHTML = template;
      })
      .catch(function (error) {
        console.log(error);
         alert(`Código: ${error.response.status} \nMensaje: No se pudieron obtener los datos requeridos`);
      });
 };


 const detalleProductosVendidos = (id) => {
    
    axios.get(`/detalleVenta/${id}`)
      .then(function (response) {
             ventaBuscada=response.data.productosVendidos
             console.log(ventaBuscada)
             console.log(response)
             if(ventaBuscada.length==0){
                 return alert('Venta no encontrada'); 
                }else if(id.length==0){
                     return alert('Debe ingresar el ID de la venta');
                 }else{
                     let template1 =  `<tr>
                         <th scope="col">#</th>
                         <th scope="col">ID</th>
                         <th scope="col">Nombre</th>
                         <th scope="col">Cantidad</th>
                         <th scope="col">Precio Unitario</th>
                     </tr>`;
                     let template2 = "";
                     let contador=0
                     ventaBuscada.forEach(venta => {
                             contador++
                             template2 += `
                             <tr scope="row">
                                 <td>${contador}</td>
                                 <td>${venta.idProducto}</td>
                                 <td>${venta.nombre}</td>
                                 <td>${venta.cantidad}</td>
                                 <td>$ ${venta.precioUnitario}</td>
                             </tr>
                             `
                 });
                 document.querySelector("#staticBackdropLabel").innerText = `Detalle de Venta ID ${id}
                 Productos comprados:`;
                 document.querySelector("#tableHeaders").innerHTML = template1; 
                 document.querySelector("#tableBody").innerHTML = template2;
                }
             
      })
      .catch(function (error) {
         console.log(error);
         alert(`Código: ${error.response.status} \nMensaje: no se pudo obtener la data requerida`);
      });
 }