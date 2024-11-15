document.addEventListener("DOMContentLoaded", () => {
    const images = [
        "img/An1.jpeg",
        "img/An2.jpg", // Puedes añadir otras imágenes aquí
        "img/An3.jpg",
        "img/An4.jpg",
        "img/An5.jpg"
    ];

    let currentImageIndex = 0;
    const imageElement = document.getElementById("image-slide");

    // Cambiar imagen cada 3 segundos
    setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        imageElement.src = images[currentImageIndex];
    }, 2000); // 2000 milisegundos (2 segundos)

    // Lógica de cerrar sesión
    const logoutLink = document.querySelector("#logout a");
    logoutLink.addEventListener("click", () => {
        // Aquí podrías hacer algo más si necesitas limpiar datos de sesión, por ahora solo redirige
        window.location.href = "index.html";
    });
});
