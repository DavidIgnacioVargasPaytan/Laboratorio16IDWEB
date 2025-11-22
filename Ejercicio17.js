const usuarioJS = { 
    nombre: "David", 
    correo: "dvargasp@unsa.edu.pe", 
    rol: "Administrador" 
};

const jsonUsuario = JSON.stringify(usuarioJS); 
localStorage.setItem("usuarioData", jsonUsuario);

const jsonRecuperado = localStorage.getItem("usuarioData");

if (jsonRecuperado) {
    const usuarioRecuperado = JSON.parse(jsonRecuperado); 

    document.getElementById("displayNombre").textContent = usuarioRecuperado.nombre;
    document.getElementById("displayCorreo").textContent = usuarioRecuperado.correo;
    document.getElementById("displayRol").textContent = usuarioRecuperado.rol;

    console.log("Datos de usuario recuperados de localStorage:", usuarioRecuperado);
} else {
    console.log("No se encontraron datos de usuario en localStorage.");
}