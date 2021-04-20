const numberOfFilms = prompt ('How many films have you already watched?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const a = prompt ('What is the last movie you watched?', ''),
      b = prompt ('How would you rate it?', ''),
      c = prompt ('What is the last movie you watched?', ''),
      d = prompt ('How would you rate it?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);