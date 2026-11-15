let productos = [];

let formulario = document.getElementById("formulario");
let inputProducto = document.getElementById("producto");
let inputPrecio = document.getElementById("precio");
let inputCantidad = document.getElementById("cantidad");
let tabla = document.getElementById("tabla");
let totalP = document.getElementById("total");

formulario.addEventListener("submit", function(e) {
    e.preventDefault();

    let nombre = inputProducto.value.trim();
    let precio = parseFloat(inputPrecio.value);
    let cantidad = parseInt(inputCantidad.value);

    if (nombre === "" || isNaN(precio) || precio < 0 || isNaN(cantidad) || cantidad <= 0) {
        alert("Por favor, ingresa datos válidos. El precio debe ser mayor o igual a 0 y la cantidad un entero positivo.");
        return;
    }

    let producto = {
        nombre: nombre,
        precio: precio,
        cantidad: cantidad
    };

    productos.push(producto);

    formulario.reset();
    inputProducto.focus();

    mostrarProductos();
});

function mostrarProductos() {
    tabla.innerHTML = "";
    let valorTotal = 0;

    for (let i = 0; i < productos.length; i++) {
        let subtotal = productos[i].precio * productos[i].cantidad;
        valorTotal += subtotal;

        tabla.innerHTML += `
            <tr>
                <td>${productos[i].nombre}</td>
                <td>${productos[i].precio}</td>
                <td>${productos[i].cantidad}</td>
                <td>${subtotal}</td>
            </tr>
        `;
    }

    totalP.textContent = `Valor total del inventario: ${valorTotal}`;
}