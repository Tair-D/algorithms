var removeDuplicates = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i + 1]) {
      nums[count] = nums[i];
      count++;
    }
  }
  console.log(nums);
};

removeDuplicates([0, 0, 0, 0, 1, 1, 1, 2, 3, 4, 5, 5]);
