var removeElement = function (nums, val) {
  let length = nums.length;
  let j = 0;
  for (let i = 0; i < length; i++) {
    if (nums[i] !== val) {
      nums[j] = nums[i];
      j++;
    }
  }
  return j;
};
let nums = [3, 2, 2, 3];
let val = 3;

removeElement(nums, val);
