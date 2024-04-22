export function showTopRatedOrPopMovies(find) {

    const moviesDiv = document.getElementById('movies');
    moviesDiv.innerHTML = '';

    for (const { title, release_date, poster_path } of find) {

        const filmsDiv = document.createElement('div');
        const movieTitlePTag = document.createElement('p');
        const releaseDatePTag = document.createElement('p');
        const moviePosterImgTag = document.createElement('img');
        const imageUrl = `https://image.tmdb.org/t/p/w200/`;

        filmsDiv.append(movieTitlePTag, releaseDatePTag, moviePosterImgTag);
        moviesDiv.append(filmsDiv);


        movieTitlePTag.innerText = 'Title:' + ' ' + title;
        releaseDatePTag.innerText = 'Release date:' + ' ' + release_date;
        moviePosterImgTag.src = imageUrl + poster_path;
    }
}

export function showPerson(find) {

    const moviesDiv = document.getElementById('movies');
    moviesDiv.innerHTML = '';

    if (find == 0) {
        const error = document.createElement('p');
        error.innerText = 'actor not found';
        moviesDiv.append(error);
    }

    for (const { name, profile_path, known_for, known_for_department } of find) {

        const actorDiv = document.createElement('div');
        const actornamePTag = document.createElement('p');
        const jobTitlePTag = document.createElement('p');
        const knownforPTag = document.createElement('p');
        const actorimageImgTag = document.createElement('img');

        const imageUrl = `https://image.tmdb.org/t/p/w200/`;

        actornamePTag.innerText = 'Name:' + ' ' + name;
        jobTitlePTag.innerText = 'Job:' + ' ' + known_for_department;

        if (known_for_department == null) {
            jobTitlePTag.innerText = 'Job:' + ' ' + 'not sepcified';
        }

        for (const { title, name, media_type } of known_for) {

            const actorMovies = document.createElement('p');
            if (title == undefined) {
                actorMovies.innerText = 'title' + ' ' + name + ' ' + ',' + ' type: ' + ' ' + media_type;
            }
            else {
                actorMovies.innerText = 'Title:' + ' ' + title + ' ' + ',' + ' ' + 'type:' + ' ' + media_type;
            }
            knownforPTag.append(actorMovies);

        }

        actorDiv.append(actornamePTag, jobTitlePTag, knownforPTag, actorimageImgTag);
        moviesDiv.append(actorDiv);

        if (profile_path != null) {
            actorimageImgTag.src = imageUrl + profile_path;
        }
        else {
            actorimageImgTag.src = './images/unknown.jpg';
        }
    }
}

export function showMovies(find) {

    const moviesDiv = document.getElementById('movies');
    moviesDiv.innerHTML = '';

    if (find == 0) {
        const error = document.createElement('p');
        error.innerText = 'movie not found';
        moviesDiv.append(error);
        console.log(error);
    }
    console.log(find);

    for (const { title, overview, release_date, poster_path } of find) {

        const filmsDiv = document.createElement('div');
        const movieTitlePTag = document.createElement('p');
        const releaseDatePTag = document.createElement('p');
        const descriptionPTag = document.createElement('p');
        const moviePosterImgTag = document.createElement('img');
        const imageUrl = `https://image.tmdb.org/t/p/w200/`;

        filmsDiv.append(movieTitlePTag, descriptionPTag, releaseDatePTag, moviePosterImgTag);
        moviesDiv.append(filmsDiv);


        movieTitlePTag.innerText = 'Title:' + ' ' + title;
        descriptionPTag.innerText = 'Description:' + ' ' + overview;
        releaseDatePTag.innerText = 'Release date:' + ' ' + release_date;

        moviePosterImgTag.src = imageUrl + poster_path;

    }
}