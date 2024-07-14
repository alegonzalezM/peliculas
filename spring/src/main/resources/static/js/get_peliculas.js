
document.addEventListener('DOMContentLoaded', async () => {
  
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const response = await fetch('http://localhost:8088/api/obtenerPeliculas', options);
    const data = await response.json();
    console.log(data);

    const movies = data;  
    const tbody = document.getElementById('bodyTablePeliculas');

    movies.forEach(movie => {
        const tr = document.createElement('tr');
        const tdTitle = document.createElement('td');
        tdTitle.textContent = movie.titulo;
        const tdDuration = document.createElement('td');
        tdDuration.textContent = movie.duracion;
        const tdGenres = document.createElement('td');
        tdGenres.textContent = movie.genero;
        const tdImage = document.createElement('td');
        const img = document.createElement('img');

        const tdButton = document.createElement('td'); 
        const deleteButton = document.createElement('button');
         deleteButton.textContent = 'Eliminar';
         deleteButton.onclick = () => deletePelicula(movie.id_pelicula);
         tdButton.appendChild(deleteButton);

        img.src = movie.poster;
        img.width = '150';
        img.alt = movie.titulo;
        tdImage.appendChild(img);
        img.classList.add('img-fluid');
        img.classList.add('img-thumbnail');
        tr.appendChild(tdTitle);
        tr.appendChild(tdDuration);
        tr.appendChild(tdGenres);
        tr.appendChild(tdImage);
        tr.appendChild(tdButton);
        tbody.appendChild(tr);

    });
});

// Función para eliminar una película
async function deletePelicula(id_pelicula) {
    console.log(id_pelicula);
    const API_SERVER = 'http://localhost:8088/api';
    try {
        const response = await fetch(`${API_SERVER}/deletePelicula/${id_pelicula}`, {
            method: 'DELETE'
            
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        console.log('Película eliminada con éxito');
        // Llamar a obtenerPeliculas nuevamente para actualizar la lista
        obtenerPeliculas();
    } catch (error) {
        console.error('Error al eliminar la película: ', error);
    }
   
}

//////////////////////////

//Función para agregar una película

// // document.getElementById('btn_submit').addEventListener('submit', async (event) => {
// //     event.preventDefault();
// //     const titulo = document.getElementById('titulo').value;
// //     const director = document.getElementById('genero').value;
// //     const poster = document.getElementById('imagen').value;

// //     const pelicula = { titulo, director, poster };
// //     await postPelicula(pelicula);
// // });

// // Cargar películas al cargar la página
// document.addEventListener('DOMContentLoaded', obtenerPeliculas);
document.getElementById('btn_submit').addEventListener('submit', async (event) => {
async function agregarPelicula(pelicula) {
    try {
        const response = await fetch(`${API_SERVER}/agregarPelicula`, {
       
            method: 'POST',
            body: JSON.stringify(pelicula)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Película agregada:', data);

        // Refrescar la lista de películas
        obtenerPeliculas();
    } catch (error) {
        console.error('Error posting the data:', error);
    }
}});