/* 

5) Добавить нумерацию выведенных фильмов */

"use strict";

const movieDB = {
  movies: [
    "Логан",
    "Лига справедливости",
    "Ла-ла лэнд",
    "Одержимость",
    "Скотт Пилигрим против...",
  ],
};

const adv = document.querySelectorAll(".promo__adv img"),
  promo = document.querySelector(".promo__bg"),
  gener = promo.querySelector(".promo__genre"),
  movieList = document.querySelector(".promo__interactive-list");

adv.forEach((item) => {
  item.remove();
});

promo.style.backgroundImage = 'url("img/bg.jpg")';
gener.textContent = "Драма";
movieList.innerHTML = "";

movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
  movieList.innerHTML += `
  <li class="promo__interactive-item">${i + 1}. ${film}
    <div class="delete"></div>
 </li>
  `;
});
