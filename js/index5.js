// Función para cargar los datos desde el archivo JSON
async function loadBooks() {
    try {
        const response = await fetch('BaseData.json');
        if (!response.ok) throw new Error('Error al cargar el archivo JSON');
        return await response.json();
    } catch (error) {
        console.error(error);
        alert('No se pudo cargar la base de datos de libros.');
        return [];
    }
}

// Función para realizar la búsqueda
async function buscarLibros(event) {
    event.preventDefault();
    const searchTerm = document.getElementById('search-input').value.toLowerCase();

    if (!searchTerm.trim()) {
        alert('Por favor, ingrese un término de búsqueda.');
        return;
    }

    const books = await loadBooks();
    const resultados = books.filter(book => 
        book.title.toLowerCase().includes(searchTerm) || 
        book.author.toLowerCase().includes(searchTerm)
    );

    mostrarResultados(resultados);
}

// Función para mostrar los resultados en la lista
function mostrarResultados(resultados) {
    const resultsList = document.getElementById('results-list');
    resultsList.innerHTML = '';

    if (resultados.length === 0) {
        resultsList.innerHTML = '<li>No se encontraron resultados.</li>';
        return;
    }

    resultados.forEach(libro => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = libro.url;
        link.textContent = `${libro.title} - ${libro.author}`;
        link.target = '_blank';
        listItem.appendChild(link);
        resultsList.appendChild(listItem);
    });
}
