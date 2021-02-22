var sub = function (n) {
  let product = 1;
  let sum = 0;
  let res;
  let digits = ('' + n).split('');
  for (let i = 0; i < digits.length; i++) {
    product *= digits[i];
    sum += +digits[i];
  }

  res = product - sum;
  return res;
};

let res = sub(234);
// console.log(res);
