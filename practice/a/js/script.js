//rest
const restOperator = function (a, b, ...rest) {
  console.log(a, b, rest);
};
restOperator("a", "b", "c", "d", "e");

// параметры по умолчанию, в случае если аргумент не был передан: basis = 4

function calcOrDoble(number, basis = 4) {
  console.log(number * basis);
}
calcOrDoble(2);
