var lengthOfLastWord = function (s) {
  let str = s.split(' ');
  // console.log(str);
  // return str[str.length - 1].length;
  //   let i = 1;
  // console.log(str[0]);
  //   console.log(str[str.length - 3]);
  for (let i = 1; i <= str.length; i++) {
    if (str[str.length - i] !== '') {
      // console.log(str);
      return str[str.length - i].length;
    }
  }
  return 0;
};

let res = lengthOfLastWord('a ');

console.log(res);
