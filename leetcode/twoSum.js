/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const equals = (a, b) => {
  a.length === b.length &&
    a.every((v, i) => {
      v === b[i];
    });
};
// var twoSum = function (nums, target) {
//   let ret = [];
//   let tmpArr = nums.map(function (num) {
//     if (num < target) {
//       return num;
//     }
//   });

//   let res = tmpArr.map(function (num) {
//     return target - num;
//   });

//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length; j++) {
//       if (tmpArr[i] == res[j]) {
//         ret.push(i);
//       }
//     }
//   }
//   return ret;
// };
var twoSum = function (nums, target) {
  let ret = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length + 1; j++) {
      if (i != j) {
        if (target == nums[i] + nums[j]) {
          ret.push(i);
        }
      }
    }
  }
  return ret;
};
let res = twoSum((nums = [3, 2, 4]), (target = 6));
console.log(res);
