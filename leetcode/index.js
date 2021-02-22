const reverse = (x) => {
  if (x < 0) {
    return -1 * reverse(-x);
  }
  let split = (x + '').split('').reverse().join('');

  return split > 2 ** 31 - 1 ? 0 : split;
};

let res = reverse(-123);

console.log(res);
