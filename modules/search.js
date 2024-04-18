const apiKey = 'e0a821dc57308d9e6156bba4206c65db';
const searchForm = document.querySelector('form');


export async function getMovie() {

    const search = searchForm.querySelector('input').value;
    const select = searchForm.querySelector('#filter').value;

    const url = `https://api.themoviedb.org/3/search/${select}?query=${search}&api_key=${apiKey}`;

    const moviesDiv = document.getElementById('movies');
    moviesDiv.innerHTML = '';

    const movie = 'movie';
    const person = 'person';


    const response = await fetch(url);
    const data = await response.json();


    console.log(data);
    if (select == movie) {
        for (let i = 0; i < 10; i++) {
            const filmsDiv = document.createElement('div');
            const movieTitle = document.createElement('p');
            const releaseDate = document.createElement('p');
            const moviePoster = document.createElement('img');
            const imageUrl = `https://image.tmdb.org/t/p/w200/`;

            filmsDiv.append(movieTitle, releaseDate, moviePoster);
            moviesDiv.append(filmsDiv);

            console.log(data.results[i]);

            movieTitle.innerText = data.results[i].title;
            releaseDate.innerText = data.results[i].release_date;
            moviePoster.src = imageUrl + data.results[i].poster_path;

        }
    }
    if (select == person) {
        for (let i = 0; i < 10; i++) {
            const actorDiv = document.createElement('div');
            const actorname = document.createElement('p');
            const knownfor = document.createElement('div');
            const actorimage = document.createElement('img');
            
            const imageUrl = `https://image.tmdb.org/t/p/w200/`;
            
            console.log(data);

            actorname.innerText = data.results[i].name;

            for (const { title , media_type} of data.results[i].known_for) {

                const actorMovies = document.createElement('p');
                actorMovies.innerText = title + ' ' + media_type;
                
                knownfor.append(actorMovies);
               
            }

            actorDiv.append(actorname,knownfor,actorimage);
            moviesDiv.append(actorDiv);
            actorimage.src = imageUrl + data.results[i].profile_path;

        }
    }

}


