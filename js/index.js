// Esperar hasta que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("login-form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const errorMessage = document.getElementById("error-message");

        // Validar que el usuario sea un número mayor a 1000000
        if (parseInt(username) > 1000000 && password) {
            // Redirigir a la siguiente página
            window.location.href = "index2.html";
        } else {
            errorMessage.textContent = "El usuario debe ser tu matrícula y la contraseña no puede estar vacía.";
        }
    });
});
