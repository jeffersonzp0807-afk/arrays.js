let listaNumeros = [];

let formulario = document.getElementById("formulario");
let numero = document.getElementById("numero");
let lista = document.getElementById("lista");
let suma = document.getElementById("suma");
let promedio = document.getElementById("promedio");
let mayor = document.getElementById("mayor");
let menor = document.getElementById("menor");

formulario.addEventListener("submit", AgregarNumero);

function AgregarNumero(event) {
    event.preventDefault();
    if (numero.value.trim() === "") {
        alert("Ingrese un número");
        numero.style.backgroundColor = "#cb3232";
    } else {
        numero.style.backgroundColor = "#ffffff";
        listaNumeros.push(parseFloat(numero.value));
        
      
        numero.value = ""; 
        
        mostrarResultados();
    }
}

function mostrarResultados() {
    lista.innerHTML = "";

    let total = 0;
    let numMayor = listaNumeros[0];
    let numMenor = listaNumeros[0];

    for (let i = 0; i < listaNumeros.length; i++) {
        lista.innerHTML += `<li>${listaNumeros[i]}</li>`;
        total += listaNumeros[i];

        if (listaNumeros[i] > numMayor) {
            numMayor = listaNumeros[i];
        }

        if (listaNumeros[i] < numMenor) {
            numMenor = listaNumeros[i];
        }
    }

   
    let prom = total / listaNumeros.length;
    
    suma.innerText = total;
    promedio.innerText = prom.toFixed(2);
    mayor.innerText = numMayor;
    menor.innerText = numMenor;
}