var containsDuplicate = function (nums) {
  if (!nums.length || nums.length == 1) return false;
  let set = new Set();
  //   nums.forEach((num) => {
  //     if (set.has(num)) {
  //       console.log('1312321');
  //       return true;
  //     }
  //     set.add(num);
  //   });

  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      return true;
    }
    set.add(nums[i]);
  }
  //   nums.map((x) => {
  //     if (set.has(x)) {
  //       console.log(x);
  //       return true;
  //     }
  //     set.add(x);
  //   });
  return false;
};

var res = containsDuplicate([1, 2, 3, 1]);
console.log(res);
