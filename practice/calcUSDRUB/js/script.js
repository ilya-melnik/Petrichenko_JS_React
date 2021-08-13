'use strict';

const inputRub = document.querySelector("#rub"),
  inputUsd = document.querySelector("#usd");

inputRub.addEventListener("input", () => {
  const request = new XMLHttpRequest();
  //method
  request.open("GET", "js/current.json"); //method(GET,POST) url, не тормозит выполнение последующего кода
  request.setRequestHeader("Content-type", "application/json; charset=utf-8"); //задает значение заголовка HTTP запроса.
  request.send(); //only in POST

  //свойства оbj
  //отслеживает статус готовности  в данный текущий момент(readtState):
  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      console.log(request.response);
    }
  });

  //также:
  //status 404, 202, 400, 500
  //statusText
  //response (ответ что задал бекенд разраьотчик)
  //readyState  (текующее состояние запроса)
});

function calc(rub, usd) {
  return usd * rub;
}
