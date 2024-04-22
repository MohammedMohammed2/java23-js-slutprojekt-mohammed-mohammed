const apiKey = 'e0a821dc57308d9e6156bba4206c65db';

const moviesDiv = document.getElementById('movies');

export async function getTop10RatedOrPopMovies(parameter) {
    moviesDiv.innerHTML = '';

    const url = `https://api.themoviedb.org/3/movie/${parameter}?language=en-US&page=1&api_key=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();

    return data.results.slice(0, 10);

}

export async function getSearch(find) {


    const select = document.querySelector('#filter').value;

    const url = `https://api.themoviedb.org/3/search/${select}?query=${find}&api_key=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();

    return data.results;
}
