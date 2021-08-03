function Uzer(name, age, id) {
  this.name = name;
  this.age = age;
  this.id = id;
  this.city = "Lviv";
  this.ask = function () {
    console.log(`${name}, how are you ? `);
  };
}
//Прототипом будет наследоваться новый метод sayHi
Uzer.prototype.sayHi = function () {
  console.log("hello");
};

let ilya = new Uzer("ilya", 26, 1);
let nina = new Uzer("nina", 24, 2);

console.log(ilya);
console.log(nina);
ilya.ask();
ilya.sayHi();
nina.sayHi();

//class es6
class Uzers {
  constructor(name, age, id) {
    this.name = name;
    this.age = age;
    this.id = id;
    this.city = "Lviv";
  }
  ask() {
    console.log(`${this.name}, how are you ? `);
  }
  hello() {
    console.log("hello");
  }
}

console.log(Uzers);