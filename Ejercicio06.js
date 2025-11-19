const contadorSpan = document.getElementById("contador");
const btnIncrementar = document.getElementById("btnIncrementar");
const btnDecrementar = document.getElementById("btnDecrementar");
const mensajeError = document.getElementById("mensajeError");
let contador = 0;

btnIncrementar.addEventListener("click", () => {
    contador++;
    contadorSpan.textContent = contador;
    mensajeError.textContent = "";
});

btnDecrementar.addEventListener("click", () => {
    if (contador > 0) {
        contador--;
        contadorSpan.textContent = contador;
        mensajeError.textContent = "";
    } else {
        mensajeError.textContent = "El contador no puede ser menor que cero.";
    }
});