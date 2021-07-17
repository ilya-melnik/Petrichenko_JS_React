"use strict";
const person = {
  name: 'David',
  city: 'Kiev',
  sayHi: function (){
     console.log('Hello');
  }
};

const personTwo = {
  name: 'Ilya'
}; 
Object.setPrototypeOf(personTwo, person)
personTwo.sayHi();

const qqq = Object.create(person)
qqq.sayHi()