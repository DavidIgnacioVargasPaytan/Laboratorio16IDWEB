const contenedor = document.getElementById("contenedorTareas");

const tareasJSON = `
[
    { "titulo": "Hacer la compra", "completada": true },
    { "titulo": "Estudiar eventos JS", "completada": false },
    { "titulo": "Preparar el avance del lab", "completada": true },
    { "titulo": "Investigar JSON", "completada": false }
]
`;

const tareas = JSON.parse(tareasJSON);

const lista = document.createElement("ul");

tareas.forEach(tarea => {
    const li = document.createElement("li");
    li.textContent = tarea.titulo;
    
    if (tarea.completada) {
        li.classList.add("completada");
        li.textContent += " (Completada)";
    } else {
        li.textContent += " (Pendiente)";
    }
    
    lista.appendChild(li);
});

contenedor.appendChild(lista);