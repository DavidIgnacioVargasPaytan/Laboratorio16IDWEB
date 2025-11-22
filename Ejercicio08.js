const form = document.getElementById("formularioValidacion");
const inputNombre = document.getElementById("nombre");
const inputCorreo = document.getElementById("correo");
const errorNombreDiv = document.getElementById("error-nombre");
const errorCorreoDiv = document.getElementById("error-correo");

const mostrarError = (contenedorDiv, mensaje) => {
    contenedorDiv.innerHTML = "";

    const spanError = document.createElement("span");
    spanError.textContent = mensaje;
    spanError.style.color = "red";
    
    contenedorDiv.appendChild(spanError);
};

const limpiarError = (contenedorDiv) => {
    contenedorDiv.innerHTML = "";
};


form.addEventListener("submit", (event) => {
    event.preventDefault();

    let esValido = true;
    limpiarError(errorNombreDiv);
    limpiarError(errorCorreoDiv);

    if (inputNombre.value.trim() === "") {
        mostrarError(errorNombreDiv, "El campo Nombre no puede estar vacío.");
        esValido = false;
    }

    if (inputCorreo.value.trim() === "") {
        mostrarError(errorCorreoDiv, "El campo Correo no puede estar vacío.");
        esValido = false;
    }

    if (esValido) {
        alert("Formulario válido y enviado.");
        form.reset();
    }
});