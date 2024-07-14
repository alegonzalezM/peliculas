
// /*---------Conecta con API------*/

// let todasLasPeliculas = [];
// let paginaAPI = 1;
// let paginaActual = 1;
// const maximoDePeliculas = 33; // Número máximo de películas a obtener
// const peliculasPorPagina = 12; // Número de películas por página
// // const urlBase = 'https://raw.githubusercontent.com/alegonzalezM/JAVA2024/main/pages/peliculas.json';
// const apiKey = '8965edf75f8148761fc3e080585b805a'; // Reemplaza con tu clave de API de TMDb
// const urlBase = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${paginaAPI}`;


// const traer_api = document.getElementById("btn_api");
// const nextBtn = document.getElementById("nextBtn");
// const prevBtn = document.getElementById("prevBtn");

// traer_api.addEventListener('click', function() {
//     traer();
// });

// async function traer() {
//     try {
//         const response = await fetch(urlBase);
//         const data = await response.json();

//         // un array de películas
//         todasLasPeliculas = data;
//         mostrarPeliculas();
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }


// /*---------Arma listado y muestra en pantalla--------*/

// function mostrarPeliculas() {
//     const inicio = (paginaActual - 1) * peliculasPorPagina;
//     const fin = inicio + peliculasPorPagina;
//     const peliculasParaMostrar = todasLasPeliculas.slice(inicio, fin);

//     let contenido = "";
//     peliculasParaMostrar.forEach(pelicula => {
//         let titulo = `${pelicula.Title}`.substring(0, 25);
 
//         contenido += `
//         <a href="details.html?title=${encodeURIComponent(pelicula.Title)}&poster=${encodeURIComponent(pelicula.Poster)}
//         &released=${encodeURIComponent(pelicula.Released)}&genre=${encodeURIComponent(pelicula.Genre)}&runtime=
//         ${encodeURIComponent(pelicula.Runtime)}&plot=${encodeURIComponent(pelicula.Plot)}&director=
//         ${encodeURIComponent(pelicula.Director)}&actors=${encodeURIComponent(pelicula.Actors)}&writer=
//         ${encodeURIComponent(pelicula.Writer)}&trailer=${encodeURIComponent(pelicula.Trailer)}">
//         <div class="picture-container-api">
//                     <picture class="movie__pic rounded mx-auto">
//                         <img src="${pelicula.Poster}" alt="${pelicula.Title}">
//                     </picture>
//                     <div class="nombre">${titulo}</div>
//                 </div>
//             </a>
//         `;
//     });

//     document.querySelector(".container__movies").innerHTML = contenido;
// }

// /*****Envia info por parametros a details.html************************/
// document.addEventListener('DOMContentLoaded', () => {
//     console.log('Script loaded')
//     const containerDetails = document.querySelector('.container__details');

//     function getQueryParams() {
//         const params = new URLSearchParams(window.location.search);
//         return {
//             title: params.get('title'),
//             poster: params.get('poster'),
//             released: decodeURIComponent(params.get('released')),
//             genre: params.get('genre'),
//             runtime: params.get('runtime'),
//             plot: params.get('plot'),
//             director: params.get('director'),
//             actors: params.get('actors'),
//             writer: params.get('writer'),
//             trailer: params.get('trailer')

//         };
//     }

//     const peliculaSeleccionada = getQueryParams();
//     console.log(peliculaSeleccionada)

//     if (peliculaSeleccionada.title && peliculaSeleccionada.poster) {
       

//         // containerDetails.style.backgroundImage = `url(${peliculaSeleccionada.poster})`;
//         containerDetails.style.background = `linear-gradient(rgba(80, 75, 75, 0.792), rgba(251, 246, 246, 0.8)), url(${peliculaSeleccionada.poster})`;
//         containerDetails.style.backgroundSize = 'cover';
//         containerDetails.style.backgroundPosition = 'center';



//         const contenido_details = ` 
//                 <div class="container__movie">
//                 <div class="image__movie"><img src="${peliculaSeleccionada.poster}" alt="${peliculaSeleccionada.title}"></div>
//                 <div class="detalle__movie">
//                     <h1>${peliculaSeleccionada.title}</h1>
//                     <p>${peliculaSeleccionada.released} • ${peliculaSeleccionada.genre} • ${peliculaSeleccionada.runtime}</p>
//                     <h2>Descripción:</h2>
//                     <p>${peliculaSeleccionada.plot}</p>
//                 </div>
//                 <div id="director__movie_1">
//                     <h3>${peliculaSeleccionada.director}</h3>
//                     <p>Director</p>
//                 </div>
//                 <div id="director__movie_2">
//                     <h3>${peliculaSeleccionada.actors}</h3>
//                     <p>Actores</p>
//                 </div>
//                 <div id="director__movie_3">
//                     <h3>${peliculaSeleccionada.writer}</h3>
//                     <p>Autor</p>
//                 </div>
//             </div>
//             <section class="container container__show_movie">
//                 <div>
//                     <h2>Ver trailer</h2>
//                     <iframe width="560" height="315" src="${peliculaSeleccionada.trailer}"  allowfullscreen></iframe>
//                 </div>
//                 <div class="redes_soc">
//                     <ul>
//                         <li><a href="https://www.facebook.com/supermariomovie" target="_blank"><i class="fab fa-facebook"></i></a></li>
//                         <li><a href="https://twitter.com/supermariomovie" target="_blank"><i class="fab fa-twitter"></i></a></li>
//                         <li><a href="https://instagram.com/supermariomovie/" target="_blank"><i class="fab fa-instagram"></i></a></li>
//                         <li><a href="https://www.thesupermariobros.movie/" target="_blank"><i class="fas fa-link"></i></a></li>
//                     </ul>
//                 </div>
//             </section>
//         `;

//         containerDetails.innerHTML = contenido_details;
//     } else {
//         containerDetails.innerHTML = '<p>No se ha seleccionado ninguna película.</p>';
//     }
// });

/*---------Conecta con API------*/

let todasLasPeliculas = [];
let paginaActual = 1;
const maximoDePeliculas = 72; // Número máximo de películas a obtener
const peliculasPorPagina = 12; // Número de películas por página
const apiKey = '8965edf75f8148761fc3e080585b805a'; // Reemplaza con tu clave de API de TMDb

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
            const urlBase = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${i}`;
            const response = await fetch(urlBase);
            const data = await response.json();
            
            console.log('Data received from API:', data);
            
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
