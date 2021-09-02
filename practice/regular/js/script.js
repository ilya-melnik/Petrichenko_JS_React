"use strict";


//regular
// new RegExp('pattern', 'flags') // method old
// /patern/f

// const ans = prompt("what is your name ?");
// // const reg = /n/i; // return first найденого
// const reg = /n/gi; // return all искаемых символов независимо от регистра

// //flags
// // i независимо от регистра
// // g поиск глобальный ()
// // m многострочный режим (str can be c переносами... )

// //console.log(ans.search(reg));
// console.log(ans.match(reg)); //get array, кусочек str которая воддилась, index найденной строки, сама str, groups
//-------------------------

const pass = prompt("Password");

//заменяет часть str применяя flags, replace(что мы заменяем, на что мы замен.)
console.log(pass.replace(/./g, "# ")); // спецсимвол! точку превращает в...(всю строку превращает в невидимый код)
console.log(pass.replace(/\./g, "# ")); // only dot превращает...
// --------------------
// все знаки и /\ экранируются обратным \ p.s тире не нужно экранировать
// --------------------
console.log("12-34-56".replace(/-/g, ":")); //если без регулярного выражения, чистый replace заменил бы первый -, а регулярное выражение позволяет поставить flag: g
// =======================
const ans = prompt("TEST...");
const reg = /n/gi;
console.log(reg.test(ans)); // проверяет, есть в тексте, такое же выражение как и в регулярном выражении /n/. return true, false (можно искать класс символов, например слова, цыфры, пробелы...)
// // класы
// \d (пишем внутрь патерна /\d/) - ищем цифры
// \D все не цифры
// \W все не слова
// \w все слова
// \s пробелы
//

// выбрать все цифры
const num = prompt("onlyNumber");
console.log(num.match(/\d/g));
