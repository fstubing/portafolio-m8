let productos;
let ventas;
let productoBuscado = []
let ventaBuscada = []
let tabla = document.querySelector('#tablaModal')
let btnClose = document.querySelectorAll('.btnCerrarModal')
let btnMostrarProductos = document.querySelector('#btnInventario')
let btnProductoxSku = document.querySelector('#btnProductoxSku')
let btnVentaxId = document.querySelector('#btnVentaxId')


btnMostrarProductos.addEventListener("click", () => {

   axios.get("http://localhost:3000/productos")
     .then(function (response) {
            tabla.deleteCaption()
            console.log(response)
            productos= response.data.productos

            let template1 =  `<tr>
                                <th scope="col">#</th>
                                <th scope="col">Imagen</th>
                                <th scope="col">ID</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Marca</th>
                                <th scope="col">Descripción</th>
                                <th scope="col">Precio</th>
                                <th scope="col">Stock</th>
                            </tr>`;
            let template2 = "";
            let contador=0
                productos.forEach(producto => {
                    contador++
                    template2 += `
                    <tr scope="row">
                        <td>${contador}</td>
                        <td><img class="img-inventario" src="../public/img/${producto.imagen1}" alt="Imagen ${producto.nombre}"></td>
                        <td>${producto.id}</td>
                        <td>${producto.nombre}</td>
                        <td>${producto.marca}</td>
                        <td>${producto.descripcion}</td>
                        <td>${producto.precio}</td>
                        <td>${producto.stock}</td>
                    </tr>
                    `
                });
                document.querySelector("#staticBackdropLabel").innerText = `Inventario de Productos`;
                document.querySelector("#tableHeaders").innerHTML = template1; 
                document.querySelector("#tableBody").innerHTML = template2;
     })
     .catch(function (error) {
        alert(`Código: ${error.response.status} \nMensaje: No se pudo obtener la data requerida`);
     });

});

btnProductoxSku.addEventListener("click", () => {

   let skuProducto= document.querySelector("#skuProducto").value;

   axios.get(`http://localhost:3000/producto/${skuProducto}`)
     .then(function (response) {
            tabla.deleteCaption()
            console.log(response)
            productoBuscado.push(response.data.data) 
            if(productoBuscado.length==0){
                return alert('Producto no encontrado'); 
               }else if(skuProducto.length==0){
                    return alert('Debe ingresar el id del producto');
                }else{
                    let template1 =  `<tr>
                        <th scope="col">#</th>
                        <th scope="col">Imagen</th>
                        <th scope="col">ID</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Marca</th>
                        <th scope="col">Descripción</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Stock</th>
                    </tr>`;
                    let template2 = "";
                    let contador=0
                    productoBuscado.forEach(producto => {
                            contador++
                            template2 += `
                            <tr scope="row">
                                <td>${contador}</td>
                                <td><img class="img-inventario" src="../public/img/${producto.imagen1}" alt="Imagen ${producto.nombre}"></td>
                                <td>${producto.id}</td>
                                <td>${producto.nombre}</td>
                                <td>${producto.marca}</td>
                                <td>${producto.descripcion}</td>
                                <td>${producto.precio}</td>
                                <td>${producto.stock}</td>
                            </tr>
                            `
                });
                document.querySelector("#staticBackdropLabel").innerText = `Producto Buscado`;
                document.querySelector("#tableHeaders").innerHTML = template1; 
                document.querySelector("#tableBody").innerHTML = template2;
               }
            
     })
     .catch(function (error) {
        console.log(error);
        alert(`Código: ${error.response.status} \nMensaje: No se puedo obtener la data requerida`);
     });

});

function btnMostrarVentas() {

    axios.get("http://localhost:3000/ventas")
      .then(function (response) {
             tabla.deleteCaption()
             console.log(response)
             ventas= response.data.ventas
 
             let template1 =  `<tr>
                                 <th scope="col">#</th>
                                 <th scope="col">Id Venta</th>
                                 <th scope="col">Id Comprador</th>
                                 <th scope="col">Fecha</th>
                                 <th scope="col">Precio Total</th>
                                 <th scope="col">Productos Vendidos</th>
                             </tr>`;
             let template2 = "";
             let contador=0
                 ventas.forEach(venta => {
                     contador++
                     template2 += `
                     <tr scope="row">
                         <td>${contador}</td>
                         <td>${venta.id}</td>
                         <td>${venta.idUsuario}</td>
                         <td>${venta.createdAt.slice(0,10
                            )}</td>
                         <td>$ ${venta.precioTotal}</td>
                         <td><button type="button" class="btn btn-info d-block m-2" onclick="detalleProductosVendidos('${venta.id}')">Ver Más</button></td>
                     </tr>
                     `                     
                 });
                 
                 document.getElementById('btnAtrasModal').classList.add('d-none')
                 document.querySelector("#staticBackdropLabel").innerText = `Registro de Ventas`;
                 document.querySelector("#tableHeaders").innerHTML = template1; 
                 document.querySelector("#tableBody").innerHTML = template2;
      })
      .catch(function (error) {
        console.log(error);
         alert(`Código: ${error.response.status} \nMensaje: No se pudieron obtener los datos requeridos`);
      });
 
 };

 const detalleProductosVendidos = (id) => {
    
    axios.get(`http://localhost:3000/detalleVenta/${id}`)
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
                         <th scope="col">ID Producto</th>
                         <th scope="col">Articulos Vendidos</th>
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
                                 <td>${venta.cantidad}</td>
                                 <td>${venta.precioUnitario}</td>
                             </tr>
                             `
                 });
                 document.getElementById('btnAtrasModal').classList.remove('d-none')
                 document.querySelector("#staticBackdropLabel").innerText = `Detalle de Venta ID ${id}`;
                 document.querySelector("#tableHeaders").innerHTML = template1; 
                 document.querySelector("#tableBody").innerHTML = template2;
                }
             
      })
      .catch(function (error) {
         console.log(error);
         alert(`Código: ${error.response.status} \nMensaje: no se pudo obtener la data requerida`);
      });
 }
 
 btnVentaxId.addEventListener("click", () => {
 
    let id= document.querySelector("#IdVenta").value;
 
    axios.get(`http://localhost:3000/detalleVenta/${id}`)
      .then(function (response) {
        console.log(response);
            ventaBuscada=response.data.productosVendidos
             
             console.log(ventaBuscada)
             if(ventaBuscada.length==0){
                 return alert('Venta no encontrada'); 
                }else if(id.length==0){
                     return alert('Debe ingresar el ID de la venta');
                 }else{
                     let template1 =  `<tr>
                         <th scope="col">#</th>
                         <th scope="col">ID Producto</th>
                         <th scope="col">Articulos Vendidos</th>
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
                                 <td>${venta.cantidad}</td>
                                 <td>${venta.precioUnitario}</td>
                             </tr>
                             `
                 });

                 document.querySelector("#staticBackdropLabel").innerText = `Venta ID: ${id}\nFecha: ${ventaBuscada[0].createdAt.slice(0,10)}\nPrecio Total: $ ${response.data.totalVenta}`;
                 document.querySelector("#tableHeaders").innerHTML = template1; 
                 document.querySelector("#tableBody").innerHTML = template2;
                }
             
      })
      .catch(function (error) {
         console.log(error);
         alert(`Código: ${error.response.status} \nMensaje: no se puedieron obtener los datos requeridos`);
      }); 
 });

for (let i = 0; i < btnClose.length; i++) {
    btnClose[i].addEventListener('click',  () => {

        document.getElementById('btnAtrasModal').classList.add('d-none');

        document.querySelector("#tableBody").innerHTML = `
        <tr scope="row">
        </tr>
        `;
    })
}

function cambio(){
    alert('Cerraste cesión correctamente');
    location.replace("/")
  }