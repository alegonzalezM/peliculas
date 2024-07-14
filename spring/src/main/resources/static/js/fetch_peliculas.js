
document.addEventListener('DOMContentLoaded', obtenerPeliculas);

// function displayPeliculas(peliculas) {
//     const peliculasList = document.getElementById('peliculas-list');
//     peliculasList.innerHTML = '';
//     peliculas.forEach(pelicula => {
//         const li = document.createElement('li');
//         li.textContent = `${pelicula.titulo} (${pelicula.anio}) - Dirigida por ${pelicula.director}`;
//         peliculasList.appendChild(li);
//     });
// }

// obtenerPeliculas();
// //////////////////////////////////

// // // Función para crear elementos HTML
// // const createElement = (tag, className, attributes = {}) => {
// //     const element = document.createElement(tag);
    
// //// Si se especificó una clase, la añadimos al elemento
// //    if (className) {
// //      element.classList.add(className);
// //  }
    
// //  Iteramos sobre los atributos pasados como argumento y los añadimos al elemento
// //  Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
    
// //  Devolvemos el elemento creado
// //  return element;
// // };

// // // Función para cargar películas en la cuadrícula de tendencias
// // const fetchMoviesGrid = async (page = 1) => {
// //     // Realizamos una petición fetch a la API para obtener las películas populares
// //     const response = await fetch(`${API_SERVER}/movie/popular?page=${page}`, options);//anulada
    
// //     const data = await response.json();
// //     const movies = data.results;

// //     // Seleccionamos el contenedor de películas de tendencia en el DOM
// //     const tendenciasContainer = document.querySelector('.peliculasTendencia .peliculas');
    
// //     // Limpiamos el contenido previo del contenedor
// //     tendenciasContainer.innerHTML = '';

// //     // Iteramos sobre cada película obtenida
// //     movies.forEach(movie => {
// //         // Creamos los elementos HTML para mostrar la película
// //         const pelicula = createElement('div', 'pelicula');
// //         const anchor = createElement('a', '');
// //         anchor.href = './pages/detalle.html';
// //         const img = createElement('img', 'imgTendencia', {
// //             src: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
// //             alt: movie.title,
// //             loading: 'lazy'
// //         });
// //         const tituloPelicula = createElement('div', 'tituloPelicula');
// //         const titulo = createElement('h4', '');
// //         titulo.textContent = movie.title;
        
// //         // Agregamos los elementos al DOM
// //         // Creamos un contenedor para la película dentro del enlace
// //         tituloPelicula.appendChild(titulo); // título de la película contenedor de título
// //         pelicula.append(img, tituloPelicula); // imagen y el contenedor de título 
// //         anchor.appendChild(pelicula); // Agregamos la película al enlace
// //         const peliculaWrapper = createElement('div', 'peliculas'); //contenedor adicional para la película
// //         peliculaWrapper.appendChild(anchor); // Agregamos el enlace con la película al contenedor adicional
// //         tendenciasContainer.appendChild(peliculaWrapper); // Agregamos el contenedor adicional al contenedor de tendencias
// //     });

// //     // Actualizamos el atributo data-page con el número de página actual
// //     tendenciasContainer.parentElement.setAttribute('data-page', page);
// // };

// // // Función para cargar películas en el carrusel de películas aclamadas
// // const fetchMoviesFlex = async () => {
// //     // Realizamos una petición fetch a la API para obtener las películas más aclamadas
// //     const response = await fetch(`${API_SERVER}/movie/top_rated`, options);
// //     const data = await response.json();
// //     const movies = data.results;

// //     // Seleccionamos el contenedor de películas aclamadas en el DOM
// //     const aclamadasContainer = document.querySelector('.aclamadas');
    
// //     // Iteramos sobre cada película obtenida
// //     movies.forEach(movie => {
// //         // Creamos los elementos HTML para mostrar la película
// //         const peliculaItem = createElement('div', 'peliculaItem');
// //         const img = createElement('img', 'imgAclamada', {
// //             src: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
// //             alt: movie.title,
// //             loading: 'lazy'
// //         });
        
// //         // Agregamos los elementos al DOM
// //         peliculaItem.appendChild(img); // Agregamos la imagen al contenedor de la película
// //         aclamadasContainer.appendChild(peliculaItem); // Agregamos el contenedor de la película al contenedor de películas aclamadas
// //     });
// // };
// // // Event listener para el botón "Anterior"
// // document.querySelector('.anterior').addEventListener('click', () => {
// //     // Obtener el número de página actual
// //     let currentPage = Number(document.querySelector('.peliculasTendencia').getAttribute('data-page'));
// //     // Si es la primera página, no hacemos nada
// //     if (currentPage <= 1) return;
// //     // Cargar las películas de la página anterior
// //     fetchMoviesGrid(currentPage - 1);
// // });

// // // Event listener para el botón "Siguiente"
// // document.querySelector('.siguiente').addEventListener('click', () => {
// //     // Obtener el número de página actual
// //     let currentPage = Number(document.querySelector('.peliculasTendencia').getAttribute('data-page'));
// //     // Cargar las películas de la página siguiente
// //     fetchMoviesGrid(currentPage + 1);
// // });

// // // Ejecutamos las funciones de carga de películas al cargar la página
// // document.addEventListener('DOMContentLoaded', () => {
// //     // Cargamos las películas en la cuadrícula de tendencias
// //     fetchMoviesGrid();
// //     // Cargamos las películas en el carrusel de películas aclamadas
// //     fetchMoviesFlex();
// // });

let todasLasPeliculas = [];
let paginaActual = 1;
const maximoDePeliculas = 72; // Número máximo de películas a obtener
const peliculasPorPagina = 12; // Número de películas por página
// const apiKey = '8965edf75f8148761fc3e080585b805a'; // Reemplaza con tu clave de API de TMDb

const traer_api = document.getElementById("btn_api");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

traer_api.addEventListener('click', function() {
    traer();
});

async function traer() {
    try {
        todasLasPeliculas = [];
        let totalPages = Math.ceil(maximoDePeliculas / 20);

        for (let i = 1; i <= totalPages; i++) {
  
                    const response = await fetch('http://localhost:8088/api/obtenerPeliculas');
                    
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    
                    const data = await response.json();
                    console.log("Datos traer: " , data);
                    renderPeliculas(data); // Renderizar las películas obtenidas
            
            if (data && data.results) {
                todasLasPeliculas = todasLasPeliculas.concat(data.results);
            }
        }

        // Limita el número de películas a `maximoDePeliculas`
        todasLasPeliculas = todasLasPeliculas.slice(0, maximoDePeliculas);

        mostrarPeliculas();
    } catch (error) {
        console.error('Error:', error);
    }
}

/*---------Arma listado y muestra en pantalla--------*/

function mostrarPeliculas() {
    const inicio = (paginaActual - 1) * peliculasPorPagina;
    const fin = inicio + peliculasPorPagina;
    const peliculasParaMostrar = todasLasPeliculas.slice(inicio, fin);

    let contenido = "";
    peliculasParaMostrar.forEach(pelicula => {
        let titulo = `${pelicula.title}`.substring(0, 25);
        
        contenido += `
        <a href="details.html?title=${encodeURIComponent(pelicula.title)}&poster=${encodeURIComponent(pelicula.poster_path)}
        &released=${encodeURIComponent(pelicula.release_date)}&genre=${encodeURIComponent(pelicula.genre_ids)}&runtime=
        ${encodeURIComponent(pelicula.runtime)}&plot=${encodeURIComponent(pelicula.overview)}&director=
        ${encodeURIComponent(pelicula.director)}&actors=${encodeURIComponent(pelicula.actors)}&writer=
        ${encodeURIComponent(pelicula.writer)}&trailer=${encodeURIComponent(pelicula.trailer)}">
        <div class="picture-container-api">
                    <picture class="movie__pic rounded mx-auto">
                        <img src="https://image.tmdb.org/t/p/w500${pelicula.poster_path}" alt="${pelicula.title}">
                    </picture>
                    <div class="nombre">${titulo}</div>
                </div>
            </a>
        `;
    });

    document.querySelector(".container__movies").innerHTML = contenido;
}

/*****Envia info por parametros a details.html************************/
document.addEventListener('DOMContentLoaded', () => {
    console.log('Script loaded')
    const containerDetails = document.querySelector('.container__details');

    function getQueryParams() {
        const params = new URLSearchParams(window.location.search);
        return {
            title: params.get('title'),
            poster: params.get('poster'),
            released: decodeURIComponent(params.get('released')),
            genre: params.get('genre'),
            runtime: params.get('runtime'),
            plot: params.get('plot'),
            director: params.get('director'),
            actors: params.get('actors'),
            writer: params.get('writer'),
            trailer: params.get('trailer')
        };
    }

    const peliculaSeleccionada = getQueryParams();
    console.log(peliculaSeleccionada)

    if (peliculaSeleccionada.title && peliculaSeleccionada.poster) {
        containerDetails.style.background = `linear-gradient(rgba(80, 75, 75, 0.792), rgba(251, 246, 246, 0.8)), url(${peliculaSeleccionada.poster})`;
        containerDetails.style.backgroundSize = 'cover';
        containerDetails.style.backgroundPosition = 'center';

        const contenido_details = ` 
                <div class="container__movie">
                <div class="image__movie"><img src="${peliculaSeleccionada.poster}" alt="${peliculaSeleccionada.title}"></div>
                <div class="detalle__movie">
                    <h1>${peliculaSeleccionada.title}</h1>
                    <p>${peliculaSeleccionada.released} • ${peliculaSeleccionada.genre} • ${peliculaSeleccionada.runtime}</p>
                    <h2>Descripción:</h2>
                    <p>${peliculaSeleccionada.plot}</p>
                </div>
                <div id="director__movie_1">
                    <h3>${peliculaSeleccionada.director}</h3>
                    <p>Director</p>
                </div>
                <div id="director__movie_2">
                    <h3>${peliculaSeleccionada.actors}</h3>
                    <p>Actores</p>
                </div>
                <div id="director__movie_3">
                    <h3>${peliculaSeleccionada.writer}</h3>
                    <p>Autor</p>
                </div>
            </div>
            <section class="container container__show_movie">
                <div>
                    <h2>Ver trailer</h2>
                    <iframe width="560" height="315" src="${peliculaSeleccionada.trailer}"  allowfullscreen></iframe>
                </div>
                <div class="redes_soc">
                    <ul>
                        <li><a href="https://www.facebook.com/supermariomovie" target="_blank"><i class="fab fa-facebook"></i></a></li>
                        <li><a href="https://twitter.com/supermariomovie" target="_blank"><i class="fab fa-twitter"></i></a></li>
                        <li><a href="https://instagram.com/supermariomovie/" target="_blank"><i class="fab fa-instagram"></i></a></li>
                        <li><a href="https://www.thesupermariobros.movie/" target="_blank"><i class="fas fa-link"></i></a></li>
                    </ul>
                </div>
            </section>
        `;

        containerDetails.innerHTML = contenido_details;
    } else {
        containerDetails.innerHTML = '<p>No se ha seleccionado ninguna película.</p>';
    }
});

//////////////////////////////
        async function obtenerPeliculas() {
            try {
                const response = await fetch('http://localhost:8088/api/obtenerPeliculas');
                
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                
                const data = await response.json();
                console.log("Datos func: " , data);
                renderPeliculas(data); // Renderizar las películas obtenidas
            } catch (error) {
                console.error('Ocurrió un error:', error);
            }
        }

function renderPeliculas(peliculas) {
    const container = document.getElementById('tendenciasContainer');
    container.innerHTML = ''; // Limpiar el contenido anterior
    peliculas.forEach(pelicula => {
        const peliculaDiv = document.createElement('div');
        peliculaDiv.classList.add('pelicula');
        peliculaDiv.innerHTML = `
            <h2>${pelicula.titulo}</h2>
            <p>Director: ${pelicula.director}</p>
            <p>Genero: ${pelicula.genero}</p>
            <img src="${pelicula.poster}" alt="${pelicula.titulo}" />
        `;
        container.appendChild(peliculaDiv);
    });
}


