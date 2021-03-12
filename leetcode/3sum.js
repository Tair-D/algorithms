/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const equals = (a, b) => {
  a.length === b.length &&
    a.every((v, i) => {
      v === b[i];
    });
};
var threeSum = function (nums) {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i != j) {
        let target = nums[i];
        if (target == -(nums[i + 1] + nums[j])) {
          //   if (target + nums[i] + nums[j] == 0)
          //   console.log(target, nums[i + 1], nums[j]);
          //   console.log(target, i, j);
          res.push(nums[i]);
        }
      }
    }
  }

  let unique = [];
  res.forEach((c) => {
    if (!unique.includes(c)) {
      unique.push(c);
    }
  });
  return unique;
};

let res = threeSum((nums = [-1, 0, 1, 2, -1, -4]));
console.log(res);
