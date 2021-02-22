/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  return nums;
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
  console.log(NumArray);
  for (let i = i; i <= j; i++) {}
};

/**
 * Your NumArray object will be instantiated and called as such:
 */

var obj = new NumArray([-2, 0, 3, -5, 2, -1]);
var param_1 = obj.sumRange(0, 2);
