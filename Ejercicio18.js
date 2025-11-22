const contenedor = document.getElementById("contenedorLibros");

const librosJSON = `
[
    { "titulo": "Cien años de soledad", "autor": "Gabriel García Márquez", "year": 1967 },
    { "titulo": "El código Da Vinci", "autor": "Dan Brown", "year": 2003 },
    { "titulo": "Don Quijote de la Mancha", "autor": "Miguel de Cervantes", "year": 1605 }
]
`;

const libros = JSON.parse(librosJSON);

const tabla = document.createElement("table");
let htmlTabla = `
    <thead>
        <tr>
            <th>Título</th>
            <th>Autor</th>
            <th>Año</th>
        </tr>
    </thead>
    <tbody>
`;

libros.forEach(libro => {
    htmlTabla += `
        <tr>
            <td>${libro.titulo}</td>
            <td>${libro.autor}</td>
            <td>${libro.year}</td>
        </tr>
    `;
});

htmlTabla += `</tbody>`;
tabla.innerHTML = htmlTabla;
contenedor.appendChild(tabla);