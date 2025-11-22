const contenedor = document.getElementById("contenedorLista");

const productosJS = [
    { nombre: "Tablet", precio: 1200 },
    { nombre: "Teclado", precio: 150 },
    { nombre: "Monitor", precio: 750 }
];

const productosJSON = JSON.stringify(productosJS);

const productosRecuperadosJS = JSON.parse(productosJSON);

const lista = document.createElement("ul");

productosRecuperadosJS.forEach(producto => {
    const li = document.createElement("li");
    li.textContent = `${producto.nombre} - Precio: $${producto.precio}`;
    lista.appendChild(li);
});

contenedor.appendChild(lista);