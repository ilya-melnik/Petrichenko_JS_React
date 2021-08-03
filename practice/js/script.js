"use strict";
function showThis(a, b) {
  console.log(this);
  function sum() {
    console.log(this);
    //this.a + this.b = не правильно
    return a + b;
  }
}
showThis(2, 3);
// undefine undefine
// 1) Обычная функция: this = window, но если 'use strict' - undefined
const obj = {
  a: 1,
  b: 15,
  sum: function () {
    console.log(this);
  },
};
obj.sum(); // return obj
// 2) Контекст у методов обьекта - сам обьект
// функция в нутри метода, имеет такой же контекст как и обычная функция
// 3) this in constructor and class - it is new copy(экземпляр) obj
// 4) ручная привяка this: call, apply, bind (bind создает новую функцию и под нее подвязывает контекст)

// присвоение контекста в ручную
function sayName(surname) {
  console.log(this);
  console.log(this.name + surname);
}
const user = {
  name: "Ilay",
};

sayName.call(user, "Melnik");
sayName.apply(user, ["Melnik"]);

function count (num) {
  return this*num
}
const double = count.bind(2)
// bind - this, double - num
console.log(double(10));
console.log(double(100));

//----example----------
const btn = document.querySelector("button");
btn.addEventListener("click", function () {
  console.log(this); // this - btn по которой кликнули(<button></button>). Works like even.target
  this.style.backgroundColor = "red";
});
// стрелочная не имеет своего контекста, и берт его у родителя
// если в обработчике событий используется => func. контекст вызова теряется
const obj2 = {
  num: 5,
  sayNumber: function () {
    const say = () => {
      console.log(this.num);
    };
    say();
  },
};
obj2.sayNumber();
const double2 = a => a * 2;

