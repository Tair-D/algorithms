var addBinary = function (a, b) {
  //Not Working
  let digitA = parseInt(a, 2);
  let digitB = parseInt(b, 2);
  let sum = digitA + digitB;
  return sum.toString(2);
};

var res = addBinary(11, 1);
console.log(res);
