/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let merge = nums1.concat(nums2);
  return merge;
};

let res = intersect((nums1 = [1, 2, 2, 1]), (nums2 = [2, 2]));
console.log(res);
