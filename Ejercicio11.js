const lista = document.getElementById("listaDelegada");

lista.addEventListener("click", (event) => {
    
    if (event.target.tagName.toLowerCase() === "li") {
        lista.removeChild(event.target);
        console.log(`Eliminado: ${event.target.textContent}`);
    }
});