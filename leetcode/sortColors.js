var sortColors = function (nums) {
  nums.sort((a, b) => a - b);
  console.log(nums);
};
sortColors([2, 0, 2, 1, 1, 0]);
