import {getTop10RatedMovies} from "../modules/Top10ratedmovies.js";
import { getPopularMovies } from "../modules/popular.js";
import { getMovie } from "../modules/search.js";

const popularMovie = document.getElementById('popular');
const Top10Movies = document.getElementById('Top10RatedMovies');





popularMovie.addEventListener('click', (event)=>{
    event.preventDefault();
    getPopularMovies();
});

Top10Movies.addEventListener('click', (events)=>{
    events.preventDefault();
    getTop10RatedMovies();
});

addEventListener('submit',(event)=>{
    event.preventDefault();
    getMovie();

})

