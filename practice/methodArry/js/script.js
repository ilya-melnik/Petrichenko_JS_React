const names = ["ilia", "nina", "natalia", "veniamin"];
// forEach
// никогда не возвращает новый массив
// names.array.forEach((element, index) => {});
// filter - получаем новый массив
// const shortNames = names.filter((name) => {
//   return name.length < 5;
// });
// console.log(shortNames);

// // map перебирает, изменяет каждый element и return new arr
// const answer = ["Ilia", "niNA", "nAtalia", "veNiamin"];
// const result = answer.map(el => {
//   return el.toLowerCase();
// })

// // every возвращает booling при выполнении условия (true - если всне item совпадает с условием)
// // some - возвращает booling при выполнении условия (true - если хотябы 1 item совпадает с условием)
// const some = [4, "dfd", {}];
// console.log(some.some((item) => typeof item === "number"));
// console.log(some.every((item) => typeof item === "number"));

// // reduce -
const arr = [5,1,1,4,3,1,2,3,2,1];
// const arr2 = ["apple", "pear", "plum"];
// // sum = 0 - накапливает новое значение, проходится по всем el,
// // выполняя условия используя текущее значение; current - итерируемый el,
const res = arr.reduce((sum, current) => sum + current); //третий аргумент, устанавливает начальное значение
// const res2 = arr2.reduce((sum, current) => `${sum}, ${current}`);
console.log(res);
// console.log(res2);

// const obj = {
//   ivan: "person",
//   ilia: "person",
//   animal: "cat",
// };

// const newArr = Object.entries(obj)
// .filter((item) => item[1] === "person")
// .map(item => item[0]);

// console.log(newArr);
