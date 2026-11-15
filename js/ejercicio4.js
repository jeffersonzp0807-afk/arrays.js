let estudiantes = ["Carlos", "Ana", "Sofia", "Mateo", "Valentina", "Andres", "Lucia", "David"];

let inputBuscar = document.getElementById("buscarNombre");
let btnBuscar = document.getElementById("btnBuscar");
let resultado = document.getElementById("resultado");
let listaEstudiantes = document.getElementById("listaEstudiantes");

function mostrarListaInicial() {
    listaEstudiantes.innerHTML = "";
    for (let i = 0; i < estudiantes.length; i++) {
        listaEstudiantes.innerHTML += `<li>${estudiantes[i]}</li>`;
    }
}

mostrarListaInicial();

btnBuscar.addEventListener("click", function() {
    let nombreBuscado = inputBuscar.value.trim();

    if (nombreBuscado === "") {
        alert("Por favor, ingresa un nombre para buscar");
        resultado.textContent = "";
        return;
    }

    let encontrado = estudiantes.find(function(estudiante) {
        return estudiante.toLowerCase() === nombreBuscado.toLowerCase();
    });

    if (encontrado) {
        resultado.textContent = `El estudiante "${encontrado}" sí se encuentra registrado.`;
    } else {
        resultado.textContent = "El estudiante no se encuentra registrado.";
    }
});