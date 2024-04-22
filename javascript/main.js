import { getTop10RatedOrPopMovies, getSearch } from "../modules/fetchAPI.js";
import { showMovies, showPerson, showTopRatedOrPopMovies } from "../modules/reaults.js";

const popularMovie = document.getElementById('popular');
const Top10Movies = document.getElementById('Top10RatedMovies');
const form = document.querySelector('form');


popularMovie.addEventListener('click', (event) => {
    event.preventDefault();
    getTop10RatedOrPopMovies('popular').then(showTopRatedOrPopMovies);
});

Top10Movies.addEventListener('click', (events) => {
    events.preventDefault();
    getTop10RatedOrPopMovies('top_rated').then(showTopRatedOrPopMovies);
});


form.addEventListener('submit', (event) => {
    event.preventDefault();

    const find = document.querySelector('input').value;
    const select = document.querySelector('#filter').value;

    const movie = 'movie';
    const person = 'person';


    if (select == movie) {
        getSearch(find).then(showMovies);
    }
    if (select == person) {
        getSearch(find).then(showPerson);
    }

});

