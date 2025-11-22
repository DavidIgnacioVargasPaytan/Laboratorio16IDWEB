const cadenaJSON = '{"nombre": "Luisa", "ocupacion": "Ingeniera", "activo": true}'; 

const objetoJS = JSON.parse(cadenaJSON); 
const spanNombre = document.getElementById("nombreUsuario");
spanNombre.textContent = objetoJS.nombre; 