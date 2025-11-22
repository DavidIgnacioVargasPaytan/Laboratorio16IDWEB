const inputNombre = document.getElementById("inputNombre");
const btnGuardar = document.getElementById("btnGuardar");
const mensajeParrafo = document.getElementById("mensaje");

btnGuardar.addEventListener("click", () => {
    const nombre = inputNombre.value.trim();

    if (nombre === "") {
        mensajeParrafo.textContent = "Por favor, ingresa tu nombre.";
        return;
    }

    const datosUsuario = {
        nombre: nombre,
        timestamp: new Date().toISOString()
    };

    const datosJSON = JSON.stringify(datosUsuario);

    console.log("Objeto de datos creado:", datosUsuario);
    console.log("JSON generado:", datosJSON);
    
    mensajeParrafo.textContent = `Datos de ${nombre} guardados en consola.`;
});