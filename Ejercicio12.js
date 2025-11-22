const cuadrado = document.getElementById("cuadrado");
const btnMover = document.getElementById("btnMover");
const btnReiniciar = document.getElementById("btnReiniciar");

btnMover.addEventListener("click", () => {
    cuadrado.classList.add("mover"); 
});

btnReiniciar.addEventListener("click", () => {
    cuadrado.classList.remove("mover"); 
});