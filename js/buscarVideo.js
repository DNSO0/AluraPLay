import { conectaAPI } from "./conectaAPI.js";
import construyeCard from "./mostrarVideos.js";

const botonBusqueda = document.querySelector("[data-boton-busqueda]");
const inputBusqueda = document.querySelector("[data-busqueda]");
const lista = document.querySelector("[data-lista]");

async function buscarVideo(evento) {
    evento.preventDefault();
    const terminoBusqueda = inputBusqueda.value;
    const busqueda = await conectaAPI.buscarVideo(terminoBusqueda);

    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }

    busqueda.forEach(elemento => lista.appendChild(
        construyeCard(elemento.titulo, elemento.descripcion, elemento.url, elemento.imagen)
    ));

    if (busqueda.length === 0) {
        lista.innerHTML = `<h2 class="mensaje__titulo">No se encontraron videos con el término "${terminoBusqueda}"</h2>`;
    }
}

botonBusqueda.addEventListener("click", evento => buscarVideo(evento));
inputBusqueda.addEventListener("keypress", evento => {
    if (evento.key === "Enter") {
        buscarVideo(evento);
    }
});