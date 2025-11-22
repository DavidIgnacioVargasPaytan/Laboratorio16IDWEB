let usuarios = [];
let nextId = 1;

const formulario = document.querySelector("#formularioUsuario"); 
const tablaBody = document.querySelector("#tablaUsuarios tbody"); 
const inputNombre = document.querySelector("#nombre");
const inputEdad = document.querySelector("#edad");
const inputId = document.querySelector("#userId");
const btnGuardar = document.querySelector("#btnGuardar");

const renderizarTabla = () => {
    tablaBody.innerHTML = ""; 

    usuarios.forEach(usuario => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${usuario.id}</td>
            <td>${usuario.nombre}</td>
            <td>${usuario.edad}</td>
            <td>
                <button class="editar" data-id="${usuario.id}">Editar</button>
                <button class="eliminar" data-id="${usuario.id}">Eliminar</button>
            </td>
        `;
        tablaBody.appendChild(fila); 
    });
};

formulario.addEventListener("submit", (event) => {
    event.preventDefault(); 
    
    const nombre = inputNombre.value.trim();
    const edad = parseInt(inputEdad.value.trim());
    const id = inputId.value ? parseInt(inputId.value.trim()) : null;

    if (!nombre || isNaN(edad)) {
        alert("Por favor, ingrese un nombre y una edad válida.");
        return;
    }

    if (id) {
        const index = usuarios.findIndex(u => u.id === id);
        if (index !== -1) {
            usuarios[index].nombre = nombre;
            usuarios[index].edad = edad;
            alert(`Usuario ${nombre} actualizado.`);
        }
    } else {
        usuarios.push({ id: nextId++, nombre, edad });
        alert(`Usuario ${nombre} añadido.`);
    }

    formulario.reset();
    inputId.value = ""; 
    btnGuardar.textContent = "Añadir Usuario";
    renderizarTabla();
});

tablaBody.addEventListener("click", (event) => { 
    const target = event.target;
    if (target.tagName.toLowerCase() === "button") {
        const usuarioId = parseInt(target.dataset.id); 

        if (target.classList.contains("eliminar")) {
            usuarios = usuarios.filter(u => u.id !== usuarioId);
            renderizarTabla();
            alert(`Usuario con ID ${usuarioId} eliminado.`);

        } else if (target.classList.contains("editar")) {
            const usuarioAEditar = usuarios.find(u => u.id === usuarioId);
            
            if (usuarioAEditar) {
                inputId.value = usuarioAEditar.id; 
                inputNombre.value = usuarioAEditar.nombre;
                inputEdad.value = usuarioAEditar.edad;
                btnGuardar.textContent = "Guardar Cambios";
            }
        }
    }
});

renderizarTabla();