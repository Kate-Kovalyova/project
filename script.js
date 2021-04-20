let numberOfFilms;

function start() {
    numberOfFilms = +prompt('How many films have you already watched?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How many films have you already watched?', '');
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert ('Not much films were watched');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert ('You are great watcher');
    } else if (personalMovieDB.count >= 30) {
        alert ('You are SERIAL watcher!!!');
    } else {
        alert ('Error')
    }
}
detectPersonalLevel();

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt ('What is the last movie you watched?', ''),
              b = prompt ('How would you rate it?', '');
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('Done!');
        } else {
            console.log('Error!');
            i--; //возвращает на 1 вопрос назад
        }
    }
}
rememberMyFilms();

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Your favourite genre is number ${i}`);
    }
}
writeYourGenres();

// function showMyDB() {
//     if (personalMovieDB.private = false) {
//         console.log(personalMovieDB);
//     } else {
//         console.log('Access denied!');
//     }
// }
// showMeDB();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.private);