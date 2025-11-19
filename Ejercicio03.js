const parrafo = document.getElementById("parrafo");
const boton = document.getElementById("btnCambiar");

boton.addEventListener("click", () => {
    parrafo.textContent = "Texto cambiado";
});