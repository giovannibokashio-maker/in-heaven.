const API_KEY = "4102ab4bb761705e19bf16ffe4469864";

const url =
`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ar&page=1`;

async function getMovies() {
    const res = await fetch(url);
    const data = await res.json();

    console.log(data);

    showMovies(data.results);
}

function showMovies(movies) {
    const moviesBox = document.getElementById("movies");

    movies.forEach(movie => {
        const movieEl = document.createElement("div");

        movieEl.classList.add("movie");

        movieEl.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}">
            <h3>${movie.title}</h3>
        `;

        moviesBox.appendChild(movieEl);
    });
}

getMovies();
