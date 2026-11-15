let listaNombres = [];

let inputNombre = document.getElementById("nombre");
let btnAgregar = document.getElementById("btnAgregar");
let lista = document.getElementById("lista");
let cantidad = document.getElementById("cantidad");

btnAgregar.addEventListener("click", function() {
    let nombre = inputNombre.value.trim().toUpperCase();

    if (nombre === "") {
        alert("Ingresa un nombre válido");
        inputNombre.style.backgroundColor = "red";
    } 
   
    else if (listaNombres.includes(nombre)) {
        alert(`el nombre ${nombre} ya está en la lista`);
    
    } 
    else {
        inputNombre.style.backgroundColor = "white";
        listaNombres.push(nombre);
        
        inputNombre.value = "";
        inputNombre.focus();
        
        mostrarLista();
    }
});

function mostrarLista() {
    lista.innerHTML = "";

    for (let i = 0; i < listaNombres.length; i++) {
        lista.innerHTML += `<li>${listaNombres[i]}</li>`;
    }
    
    cantidad.textContent = `Cantidad de nombres: ${listaNombres.length}`;
}