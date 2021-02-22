const palindrome = (x) => {
  let res = false;
  if (x < 0) {
    res = false;
    return res;
  }

  let intToStr = x.toString();
  // console.log(intToStr);
  let len = intToStr.length;
  let output = [];
  for (let i = 0; i < len; i++) {
    output.push(intToStr[i]);
  }
  let rev = output.reverse();
  rev = rev.join('');

  if (x == rev) {
    return true;
  }
  return res;
};

let res = palindrome(121);

console.log(res);
