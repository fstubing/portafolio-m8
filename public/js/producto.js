
let tokenAddProduct = localStorage.getItem("jwt");

const addToCart = (id) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "id_producto": id
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("http://localhost:3000/carritos?token="+tokenAddProduct, requestOptions)
    .then(response => response.json())
    .then(result => {
      alert(result.message)
      location.reload()
    })
    .catch(error => {
      console.log('error', error)
      alert('debes iniciar cesión para agregar productos al carro')
    });
}


