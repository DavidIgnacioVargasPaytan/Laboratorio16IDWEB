const form = document.getElementById("formularioPerfil");
const inputNombre = document.getElementById("inputNombre");
const inputEdad = document.getElementById("inputEdad");
const inputPais = document.getElementById("inputPais");
const perfilDiv = document.getElementById("perfilGuardado");
const btnBorrar = document.getElementById("btnBorrar");
const FORM_KEY = "perfilUsuario";

const mostrarPerfil = (datos) => {
    document.getElementById("displayPerfilNombre").textContent = datos.nombre;
    document.getElementById("displayPerfilEdad").textContent = datos.edad;
    document.getElementById("displayPerfilPais").textContent = datos.pais;
    
    perfilDiv.style.display = "block"; 
    btnBorrar.style.display = "block";

    document.getElementById("formularioContainer").style.display = "none"; 
};

const cargarPerfil = () => {
    const jsonGuardado = localStorage.getItem(FORM_KEY);

    if (jsonGuardado) {
        const perfil = JSON.parse(jsonGuardado);
        mostrarPerfil(perfil);
    } else {
        document.getElementById("formularioContainer").style.display = "block";
        perfilDiv.style.display = "none";
        btnBorrar.style.display = "none";
    }
};

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const perfilUsuario = {
        nombre: inputNombre.value.trim(),
        edad: inputEdad.value.trim(),
        pais: inputPais.value.trim()
    };

    const perfilJSON = JSON.stringify(perfilUsuario);
    localStorage.setItem(FORM_KEY, perfilJSON);
    console.log("Perfil guardado:", perfilUsuario);

    mostrarPerfil(perfilUsuario);
});

btnBorrar.addEventListener("click", () => {
    localStorage.removeItem(FORM_KEY);
    alert("Perfil borrado de localStorage. Recarga la página para ver el formulario.");
    window.location.reload();
});

cargarPerfil();