"use strict";

let obj = {
  name: "test",
  age: 27,
  city: "Kiyv",
  colors: {
    border: "red",
    background: "grey",
  },
};

for (let key in obj) {
  if (typeof obj[key] === "object") {
    for (let i in obj[key]) {
      console.log(
        `Обьект  имеет такие ключи ${i} и ткие ${obj[key][i]} значеня`
      );
    }
  } else {
    console.log(
      `Обьект obj имеет такие ключи ${key} и ткие ${obj[key]} значения`
    );
  }
}
