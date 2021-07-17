"use strict";


let numbers = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};

const clone = Object.assign({}, numbers);
clone.a = 43;
console.log(clone);
