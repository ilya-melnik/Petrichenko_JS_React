"use strict";
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели ?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = prompt("Один из последних просмотренных фильмов?", ""),
  b = +prompt("На сколько оцените его ?", ""),
  d = prompt("Один из последних просмотренных фильмов?", ""),
  c = +prompt("На сколько оцените его ?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[d] = c;

console.log(personalMovieDB);
