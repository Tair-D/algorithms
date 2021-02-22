// var thirdMax = function (nums) {
//   let max = nums[0];
//   let secondMax = nums[0];
//   let thirdMax = nums[0];

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] > max) {
//       thirdMax = secondMax;
//       secondMax = max;
//       max = nums[i];
//     }
//   }
//   console.log(max);
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] > secondMax && nums[i] != max) {
//       secondMax = nums[i];
//     }
//   }
//   //   console.log(thirdMax);

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] > thirdMax && nums[i] < secondMax) {
//       thirdMax = nums[i];
//       //   console.log(thirdMax);
//     }
//   }
// console.log(thirdMax);

//   return secondMax;
// };
const uniqueArr = (array) =>
  array.filter((currentVal, index, arr) => arr.indexOf(currentVal) === index);

var thirdMax = function (nums) {
  let unique = uniqueArr(nums);
  unique.sort(function (a, b) {
    return b - a;
  });
  if (unique[2] !== undefined) {
    return unique[2];
  } else return unique[0];
};

let res = thirdMax([4, 1, 2, 2, 2, 2, 5, 3]);

console.log(res);
