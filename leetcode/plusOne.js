var plusOne = function (digits) {
  let res = digits;
  for (let i = 0; i < res.length; i++) {
    if ((i = res.length - 1)) {
      res[i]++;
    }
  }
  return res;
  //    res;
};

let res = plusOne(9);
console.log(res);
