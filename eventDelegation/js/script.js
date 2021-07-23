"use strict";

const btns = document.querySelectorAll("button");
// Reeding code:
// 1. При нажатие на кнопку 1, 2. Проверь, если у второй кнопки нету класса red,
// 3. Добавь ей класс red. 4. Иначе удалить класс red.
btns[0].addEventListener("click", () => {
  if (!btns[1].classList.contains("red")) {
    btns[1].classList.add("red");
  } else {
    btns[1].classList.remove("red");
  }
});
// OR
// btns[0].addEventListener("click", () => {
//   btns[1].classList.toggle("red");
// });


// where to use? ?
// Переключение гамбургера, при нажатии на гамбурегр, 
// добавляется класс в нужное место и вылезает меню, при нажатии на крестик, 
// класс убирается и меня прячется в гамбургер
