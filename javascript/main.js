import { getTop10RatedOrPopMovies, getSearch } from "../modules/fetchAPI.js";
import { showMovies, showPerson, showTopRatedOrPopMovies } from "../modules/reaults.js";

const popularMovieATag = document.getElementById('popular');
const top10MoviesATag = document.getElementById('Top10RatedMovies');
const form = document.querySelector('form');


//displays results from the api depending on what the user clicked on weather its Top10RatedMovies or popular movies 
popularMovieATag.addEventListener('click', (event) => {
    event.preventDefault();
    getTop10RatedOrPopMovies('popular').then(showTopRatedOrPopMovies);
});

top10MoviesATag.addEventListener('click', (events) => {
    events.preventDefault();
    getTop10RatedOrPopMovies('top_rated').then(showTopRatedOrPopMovies);
});


//Searches and displays the desiered movies/actors
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

