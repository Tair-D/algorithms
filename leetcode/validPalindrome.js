/**
 * @param {string} s
 * @return {boolean}
 */

const equals = (a, b) => a.length == b.length && a.every((v, i) => v == b[i]);

var isPalindrome = function (s) {
  let chars = [];
  let reverseArr = [];
  const re = /[^a-zA-Z\d\s]/g;
  s = s.split(/\s/).join('').replace(re, '');

  for (let i = 0; i < s.length; i++) {
    if (
      s[i] !== ',' &&
      s[i] !== ' ' &&
      s[i] !== ';' &&
      s[i] !== ':' &&
      s[i] !== '.' &&
      s[i] !== '@'
    )
      chars.push(s[i].toLowerCase());
  }

  //перевернул
  for (let i = chars.length - 1; i >= 0; i--) {
    reverseArr.push(chars[i]);
  }

  return equals(chars, reverseArr);
};

let res = isPalindrome('A man, a plan, a canal: Panama');
console.log(res);
