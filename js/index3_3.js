// Cambiar el estado de los cubículos entre disponible y ocupado
function toggleSpace(space) {
    if (space.classList.contains("available")) {
        space.classList.remove("available");
        space.classList.add("occupied");
    } else if (space.classList.contains("occupied")) {
        space.classList.remove("occupied");
        space.classList.add("available");
    }
}

// Agregar un evento de clic para cada cubículo en el estacionamiento
document.querySelectorAll('.space').forEach(space => {
    space.addEventListener('click', () => toggleSpace(space));
});
