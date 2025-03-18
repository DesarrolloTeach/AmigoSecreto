// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre && /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre)) {
        amigos.push(nombre);
        actualizarLista();
        input.value = ""; 
    } else {
        alert("Ingresa un nombre válido (solo letras y espacios)");
    }
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length > 0) {
        let index = Math.floor(Math.random() * amigos.length);
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `El amigo seleccionado es: <strong>${amigos[index]}</strong>`;
    } else {
        alert("Agrega un amigo para poder hacer el sorteo.");
    }
}
