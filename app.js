const API_KEY = "4102ab4bb761705e19bf16ffe4469864";

const moviesDiv = document.getElementById("movies");

async function getTrending(){

const res = await fetch(
`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
);

const data = await res.json();

showHero(data.results[0]);

showMovies(data.results);

}

function showHero(movie){

document.getElementById("hero").style.backgroundImage =
`url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`;

document.getElementById("heroTitle").innerText = movie.title;

document.getElementById("heroDesc").innerText = movie.overview;

}

function showMovies(movies){

moviesDiv.innerHTML = "";

movies.forEach(movie=>{

moviesDiv.innerHTML += `
<div class="movie"
onclick="openMovie(${movie.id})">

<img src="https://image.tmdb.org/t/p/w500${movie.poster_path}">

<h3>${movie.title}</h3>

</div>
`;

});

}

function openMovie(id){

window.location =
`watch.html?id=${id}`;

}

getTrending();