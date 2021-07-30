// Используется на странице когда пользователь зашел,
// и если он не сделал какое-то действие через определенный интервал,
// можно что-то вывести, или же наоборот, когда произошло действие которое хочет разработчик
// (добавление в корзину или… можно отменить setTimeout)

const setTimeFiveSec = setTimeout(
  function (argument) {
    alert(argument);
  },
  5000,
  "argument"
);

// в переменную ставится присваивается по двум причинам (не обязательно),
// 1. Удобно считывать и пере использовать определённые интервалы
// 2. Чтобы отменить setTimeout действие, мы пишем:
clearInterval(setTimeFiveSec);
// Если юзер уже что-то сделал на странице (добавил в корзину)

//////////////////////////////////////////////////////////////////
// Рекурсивный setTimeout
function timer(num) {
  console.log(num);
  if (num < 5) {
    setTimeout(timer, 1000, ++num);
  }
}
// setTimeout(timer, 1000, 1);
//---------------------LernJs------------------------
// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду,
//начиная от from и заканчивая to.
// Сделайте два варианта решения.
// Используя setInterval.
// function printNamber(from, to) {
//   let current = from;
//   const timerId = setInterval(() => {
//     console.log(current);
//     if (current == to) {
//       clearInterval(timerId);
//     }
//     current++;
//   }, 500);
// }
// printNamber(1, 5);

//Используя рекурсивный setTimeout.
// function printNamber(from, to) {
//   let current = from;
//   setTimeout(function go() {
//     console.log(current);
//     if (current < to) {
//       setTimeout(go, 500);
//     }
//     current++;
//   }, 1000);
// }
// printNamber(1, 5);

// Анимация setInterval
// let btn = document.querySelector(".btn").addEventListener("click", () => {
//   let box = document.querySelector(".box");
//   let pos = 0;
//   let timeId = setInterval(() => {
//     if (pos == 350) {
//       clearInterval(timeId);
//     } else {
//       pos++;
//       box.style.left = pos + "px";
//       box.style.top = pos + "px";
//     }
//   }, 50);
// });

// 42 параметры документа. Окна и работа с ними

// По click показывается весь текст c div
const lorem = document.querySelector(".lorem");
const btnLorem = document
  .querySelector(".btn_lorem")
  .addEventListener("click", () => {
    // lorem.style.height = lorem.scrollHeight + "px";

    // scrollTop - можно реализовать прогрес бар сколько юзер отлистал уже страницы
    console.log(lorem.scrollTop);
  });
