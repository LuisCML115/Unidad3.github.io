// Navegar al enlace seleccionado
function navigateToLink() {
    const menu = document.getElementById('menu');
    const selectedValue = menu.value;
    if (selectedValue) {
        window.open(selectedValue, '_blank'); // Abre el enlace en una nueva pestaña
    }
}

// Botón de eliminar el primer elemento
const deleteButton = document.getElementById('delete-btn');
deleteButton.addEventListener('click', () => {
    const menu = document.getElementById('menu');
    if (menu.options.length > 0) {
        menu.remove(0);
    } else {
        alert('El menú está vacío, no se puede eliminar más elementos.');
    }
});

// Botón para agregar un nuevo enlace
const addButton = document.getElementById('add-btn');
addButton.addEventListener('click', () => {
    const menu = document.getElementById('menu');
    const newMovie = prompt('Ingresa el nombre de la nueva película:');
    const newUrl = prompt('Ingresa el enlace de la película:');
    if (newMovie && newUrl) {
        const option = document.createElement('option');
        option.text = newMovie;
        option.value = newUrl;
        menu.add(option);
    } else {
        alert('Debes ingresar un nombre y un enlace válidos.');
    }
});
