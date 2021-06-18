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
const { border, background } = obj.colors;
console.log(border);

// Destructuring example 2
let options = {
  size: {
    width: 100,
    height: 200,
  },
  items: ["Пончик", "Пирожное"],
};

let {
  title = "test",
  size: { width: w, height: h },
  items: [item1, item2],
} = options;

console.log(title);
console.log(w);
console.log(h);
console.log(item1);
console.log(item2);
