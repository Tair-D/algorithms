var moveZeroes = function (nums) {
  let l = 0,
    r = nums.length - 1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      nums[l] = nums[i];
      l++;
    }
  }

  while (l < nums.length) {
    nums[l] = 0;
    l++;
  }

  return nums;
};

let res = moveZeroes([0, 1, 0, 3, 12]);
console.log(res);
