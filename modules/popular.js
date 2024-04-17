const apiKey = 'e0a821dc57308d9e6156bba4206c65db';

const url = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${apiKey}`;

const moviesDiv= document.getElementById('movies');

export async function getPopularMovies() { 
    moviesDiv.innerHTML='';
    
    const response = await fetch(url);
    const data = await response.json();
    
    for (let i = 0; i < 10; i++) {
        const filmsDiv = document.createElement('div');
        const movieTitle = document.createElement('p');
        const releaseDate= document.createElement('p');
        const moviePoster = document.createElement('img');
        const imageUrl=`https://image.tmdb.org/t/p/w200/`;

        filmsDiv.append(movieTitle,releaseDate,moviePoster);
        moviesDiv.append(filmsDiv);
       
        console.log(data.results[i]);

        movieTitle.innerText = data.results[i].title;
        releaseDate.innerText= data.results[i].release_date;
        moviePoster.src= imageUrl + data.results[i].poster_path;

    }
}