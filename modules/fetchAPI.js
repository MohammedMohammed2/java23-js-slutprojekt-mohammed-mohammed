const apiKey = 'e0a821dc57308d9e6156bba4206c65db';

const moviesDiv = document.getElementById('movies');
const errormessagePTag = document.getElementById('error');

//gets data from api depending on which A Tag the user clicked on in nav bar 
export async function getTop10RatedOrPopMovies(parameter) {

    errormessagePTag.innerHTML = '';
    try {
        moviesDiv.innerHTML = '';

        const url = `https://api.themoviedb.org/3/movie/${parameter}?language=en-US&page=1&api_key=${apiKey}`;

        const response = await fetch(url);
        const data = await response.json();

        return data.results.slice(0, 10);
    }
    catch (error) {
        errormessagePTag.innerText = 'something went wrong please try again later';
    }

}

//gets data from api depending on user's input
export async function getSearch(find) {

    errormessagePTag.innerHTML = '';

    try {
        const select = document.querySelector('#filter').value;

        const url = `https://api.themoviedb.org/3/search/${select}?query=${find}&api_key=${apiKey}`;

        const response = await fetch(url);
        const data = await response.json();

        return data.results;
    } catch (error) {
        errormessagePTag.innerText = 'something went wrong please try again later';
    }
}
