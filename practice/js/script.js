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
setTimeout(timer, 1000, 1);
