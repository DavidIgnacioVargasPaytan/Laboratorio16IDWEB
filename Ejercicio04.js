const parrafo = document.getElementById("parrafoAlternante");
const boton = document.getElementById("btnAlternar");

boton.addEventListener("click", () => {
    if (parrafo.textContent === "Texto original") {
        parrafo.textContent = "Texto cambiado";
    } else {
        parrafo.textContent = "Texto original";
    }
});