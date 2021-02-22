// var fizzBuzz = function (n) {
//   let arr = [];
//   for (let i = 1; i <= n; i++) {
//     if (i % 3 == 0) {
//       arr.push('fizz');
//       i++;
//     }
//     arr.push(i);
//   }
//   console.log(arr);
// };

var fizzBuzz = function (n) {
  let arr = [];
  if (n < 1) {
    return arr;
  }
  for (let i = 1; i <= n; i++) {
    if (i % 15 == 0) {
      arr.push('FizzBuzz');
    } else if (i % 3 == 0) {
      arr.push('Fizz');
    } else if (i % 5 == 0) {
      arr.push('Buzz');
    } else {
      arr.push(i.toString());
    }
  }
  return arr;
};

let res = fizzBuzz(15);
console.log(res);
