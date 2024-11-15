document.getElementById("submit-btn").addEventListener("click", function () {
    const suggestionText = document.getElementById("suggestion-text").value.trim(); // Obtener y limpiar el texto
    const errorMessage = document.getElementById("error-message"); // Mensaje de error

    if (suggestionText === "") {
        // Mostrar el mensaje de error si el área de texto está vacía
        errorMessage.textContent = "Por favor, escribe algo en el apartado de preguntas o sugerencias.";
        errorMessage.style.display = "block"; // Hacer visible el mensaje
    } else {
        // Ocultar el mensaje de error y redirigir si hay texto
        errorMessage.style.display = "none";
        window.location.href = "index6-1.html";
    }
});