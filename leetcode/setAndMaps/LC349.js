/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);
  let intrsctn = [];
  set1.forEach((x1) => {
    if (set2.has(x1)) {
      intrsctn.push(x1);
    } else {
      return false;
    }
  });
  return intrsctn;
};

let nums1 = [4, 9, 5],
  nums2 = [9, 4, 9, 8, 4];
let res = intersection(nums1, nums2);

console.log(res);
