const inputTarea = document.getElementById("inputTarea");
const btnAgregar = document.getElementById("btnAgregar");
const btnEliminar = document.getElementById("btnEliminarUltimo");
const lista = document.getElementById("listaElementos");

btnAgregar.addEventListener("click", () => {
    const texto = inputTarea.value.trim();

    if (texto !== "") {
        const nuevoLi = document.createElement("li");
        nuevoLi.textContent = texto;

        lista.appendChild(nuevoLi); 
        inputTarea.value = ""; 
        inputTarea.focus();
    }
});

btnEliminar.addEventListener("click", () => {
    const ultimoElemento = lista.lastElementChild;
    if (ultimoElemento) {
        lista.removeChild(ultimoElemento);
    }
});