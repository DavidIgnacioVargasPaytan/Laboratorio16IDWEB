const productoJSON = '{"nombre": "Smartphone", "precio": 800, "stock": 50}';
console.log("JSON Inicial:", productoJSON);

let productoJS = JSON.parse(productoJSON);
console.log("Objeto JS Inicial:", productoJS);

productoJS.precio = 750; 
productoJS.stock = productoJS.stock - 5; 
console.log("Objeto JS Modificado:", productoJS);

const productoJSONActualizado = JSON.stringify(productoJS);
console.log("JSON Actualizado:", productoJSONActualizado);