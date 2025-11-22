const miniaturas = document.querySelectorAll(".miniatura");
const imagenPrincipal = document.getElementById("imagenPrincipal");

miniaturas.forEach(miniatura => {
    miniatura.addEventListener("click", (event) => {
        const urlImagenGrande = event.target.getAttribute("data-imagen-grande");
        
        imagenPrincipal.style.backgroundImage = `url(${urlImagenGrande})`;
        imagenPrincipal.textContent = "";
    });
});

if (miniaturas.length > 0) {
    const urlInicial = miniaturas[0].getAttribute("data-imagen-grande");
    imagenPrincipal.style.backgroundImage = `url(${urlInicial})`;
    imagenPrincipal.textContent = "";
}