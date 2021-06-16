var reverseString = function (s) {
  let start = 0;
  let end = s.length - 1;
  while (start < end) {
    let tmp = s[start];
    s[start++] = s[end];
    s[end--] = tmp;
  }
  return s;
};

let res = reverseString(['h', 'e', 'l', 'l', 'o']);
