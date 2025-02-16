var maxSubArray = function (nums) {
  let sum = 0;
  let min = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (min < sum) {
      min = sum;
    } else if (sum < 0) {
      sum = 0;
    }
  }
  return min;
};

let res = maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
console.log(res);
