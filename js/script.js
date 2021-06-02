"use strict";
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели ?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

// const a = prompt("Один из последних просмотренных фильмов?", ""),
//   b = +prompt("На сколько оцените его ?", ""),
//   d = prompt("Один из последних просмотренных фильмов?", ""),
//   c = +prompt("На сколько оцените его ?", "");

for (let i = 0; i < 2; i++) {
  const a = prompt("Один из последних просмотренных фильмов?", ""),
    b = +prompt("На сколько оцените его ?", "");

  if (a != null && b != null && a != "" && b != "" && a.length < 50) {
    personalMovieDB.movies[a] = b;
  } else {
    console.log("Error");
    i--;
  }

  console.log(personalMovieDB);
}

if (personalMovieDB.count < 10) {
  alert("Просмотрено довольно мало фильмов!");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  alert("Вы класический зритель!");
} else if (personalMovieDB.count > 30) {
  alert("Вы киноман!");
} else {
  console.log("Произошла ошибка!");
}
