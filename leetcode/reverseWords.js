var reverseWords = function (s) {
  let str = s.split(' ');
  let r = [];
  str.forEach((s) => {
    if (s !== '') {
      r.push(s);
    }
  });
  return r.reverse().join(' ');
};

let res = reverseWords(' the sky   is blue  ');
console.log(res);
