


export function getTopRatedOrPopMovies(find) {

    const moviesDiv = document.getElementById('movies');
    moviesDiv.innerHTML = '';

    for (const { title, release_date, poster_path } of find) {
        const filmsDiv = document.createElement('div');
        const movieTitle = document.createElement('p');
        const releaseDate = document.createElement('p');
        const moviePoster = document.createElement('img');
        const imageUrl = `https://image.tmdb.org/t/p/w200/`;

        filmsDiv.append(movieTitle, releaseDate, moviePoster);
        moviesDiv.append(filmsDiv);


        movieTitle.innerText = title;
        releaseDate.innerText = release_date;
        moviePoster.src = imageUrl + poster_path;

    }
}

export function getperson(find) {

    const moviesDiv = document.getElementById('movies');
    moviesDiv.innerHTML = '';

    for (const { name, profile_path, known_for } of find) {
        const actorDiv = document.createElement('div');
        const actorname = document.createElement('p');
        const knownfor = document.createElement('div');
        const actorimage = document.createElement('img');

        const imageUrl = `https://image.tmdb.org/t/p/w200/`;

        actorname.innerText = name;

        for (const { title, name, media_type } of known_for) {

            const actorMovies = document.createElement('p');
            if (title == undefined) {
                actorMovies.innerText = name + ' ' + media_type;
            }
            else {
                actorMovies.innerText = title + ' ' + media_type;
            }
            knownfor.append(actorMovies);

        }

        actorDiv.append(actorname, knownfor, actorimage);
        moviesDiv.append(actorDiv);
        if(profile_path!=null){
            actorimage.src = imageUrl + profile_path;
        }
        else{
            actorimage.src='/images/unknown.png';
            console.log('lol')
        }
        

    }
}

export function getmovies(find) {

    const moviesDiv = document.getElementById('movies');
    moviesDiv.innerHTML = '';
    
    for (const { title, release_date, poster_path } of find) {
        const filmsDiv = document.createElement('div');
        const movieTitle = document.createElement('p');
        const releaseDate = document.createElement('p');
        const moviePoster = document.createElement('img');
        const imageUrl = `https://image.tmdb.org/t/p/w200/`;

        filmsDiv.append(movieTitle, releaseDate, moviePoster);
        moviesDiv.append(filmsDiv);


        movieTitle.innerText = title;
        releaseDate.innerText = release_date;
        moviePoster.src = imageUrl + poster_path;

    }
}