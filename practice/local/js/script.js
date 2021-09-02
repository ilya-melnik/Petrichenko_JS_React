// "use strict";
// //localStor

const { channel } = require("diagnostics_channel");

// //устанавливает в localStor key,value
// localStorage.setItem("number", 5);

// //получение данных из localStor
// localStorage.getItem('number')

// // delete
// localStorage.removeItem('number')

// // полностю очищаем хранилище
// localStorage.clear();

const checkbox = document.querySelector("#checkbox"),
  form = document.querySelector("form"),
  change = document.querySelector("#color");

checkbox.addEventListener("change", () => {
  localStorage.getItem("");
});
