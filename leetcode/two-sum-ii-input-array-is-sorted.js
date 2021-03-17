/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let position = 0;
  //   let arr = [];
  //   for (let i = 0; i < numbers.length; i++) {
  //     if (numbers[i] <= target) {
  //       arr[position] = numbers[i];
  //       position++;
  //     }
  //   }
  //   console.log(arr);
  let l = 0,
    r = numbers.length - 1;

  while (l < r) {
    if (numbers[l] + numbers[r] == target) {
      return [l + 1, r + 1];
    } else if (numbers[l] + numbers[r] < target) {
      l++;
    } else {
      r--;
    }
  }
  console.log(l);
  return l + 1;
};
//
let res = twoSum((numbers = [-1, 0]), (target = -1));
console.log(res);
