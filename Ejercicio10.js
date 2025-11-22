const productos = [ 
    {nombre: "Laptop", precio: 3500 },
    {nombre: "Mouse", precio: 80 },
];

const btnGenerar = document.getElementById("btnGenerarTabla");
const contenedorTabla = document.getElementById("contenedorTabla");

btnGenerar.addEventListener("click", () => {
    contenedorTabla.innerHTML = ""; 

    const tabla = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    const encabezado = document.createElement("tr");
    ["Nombre", "Precio"].forEach(texto => {
        const th = document.createElement("th");
        th.textContent = texto;
        encabezado.appendChild(th);
    });
    thead.appendChild(encabezado);
    tabla.appendChild(thead);

    productos.forEach(producto => {
        const fila = document.createElement("tr");
        
        let tdNombre = document.createElement("td");
        tdNombre.textContent = producto.nombre;
        fila.appendChild(tdNombre);

        let tdPrecio = document.createElement("td");
        tdPrecio.textContent = `$${producto.precio.toFixed(2)}`;
        fila.appendChild(tdPrecio);
        
        tbody.appendChild(fila);
    });

    tabla.appendChild(tbody);
    contenedorTabla.appendChild(tabla);
});