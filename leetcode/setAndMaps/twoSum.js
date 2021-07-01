var twoSum = function (nums, target) {
  let map = new Map();
  nums.forEach((element, index) => {
    map.set(index, element);
  });
  let tArr = [];
  map.forEach((element, index) => {
    let tmp = target - element;

    let t = [...map.entries()].filter(({ 1: v }) => v === tmp).map(([k]) => k);

    tArr.push(t[0]);
    tArr = tArr.filter(function (element) {
      return element !== undefined;
    });
  });
  return tArr;
};

let nums = [2, 7, 11, 15],
  target = 9;
let res = twoSum(nums, target);
console.log(res);
