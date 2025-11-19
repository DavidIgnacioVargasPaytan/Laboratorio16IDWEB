const boton = document.getElementById("btnModoOscuro");
const body = document.body;

boton.addEventListener("click", () => {
    body.classList.toggle("oscuro");
});