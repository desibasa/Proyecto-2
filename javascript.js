function loadComponent(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
            
            // Inicializamos el navbar solo si es el componente correcto
            if (id === "navbar") {
                initNavbar();
            }
        })
        .catch(error => console.error(`Error al cargar ${file}:`, error));
}

// Función para inicializar el comportamiento del navbar
function initNavbar() {
    const botonmenu = document.getElementById("botonmenu");
    const seleccion = document.getElementById("seleccion");

    // Verificamos que los elementos existan
    if (botonmenu && seleccion) {
        // Forzamos el estado inicial (oculto)
        seleccion.style.display = "none";

        // Añadimos el evento click
        botonmenu.addEventListener("click", () => {
            seleccion.style.display = seleccion.style.display === "none" ? "block" : "none";
        });
    } else {
        console.warn("Elementos 'botonmenu' o 'seleccion' no encontrados");
    }
}

// Cargar componentes al iniciar la página
document.addEventListener("DOMContentLoaded", function () {
    loadComponent("navbar", "navbar.html");
    loadComponent("footer", "footer.html");
});