import { RatedOrPopMovies, search } from "../modules/fetchAPI.js";
import { getmovies, getperson, getTopRatedOrPopMovies } from "../modules/reaults.js";

const popularMovie = document.getElementById('popular');
const Top10Movies = document.getElementById('Top10RatedMovies');
const form = document.querySelector('form');


popularMovie.addEventListener('click', (event) => {
    event.preventDefault();
    RatedOrPopMovies('popular').then(getTopRatedOrPopMovies);
});

Top10Movies.addEventListener('click', (events) => {
    events.preventDefault();
    RatedOrPopMovies('top_rated').then(getTopRatedOrPopMovies);
});


form.addEventListener('submit', (event) => {
    event.preventDefault();

    const find = document.querySelector('input').value;
    const select = document.querySelector('#filter').value;

    const movie = 'movie';
    const person = 'person';


    if (select == movie) {
        search(find).then(getmovies);
    }
    if (select == person) {
        search(find).then(getperson);
    }

});

