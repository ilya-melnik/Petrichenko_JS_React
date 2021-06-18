"use strict";

let obj = {
  name: "test",
  age: 27,
  city: "Kiyv",
  colors: {
    border: "red",
    background: "grey",
  },
  //method of object
  makeTest: function () {
    console.log("test");
  },
};

// подсчет количества ключей в обьекте

console.log(Object.keys(obj).length);
obj.makeTest();

//Destructuring
const {border, background} = obj.colors;
console.log(border);