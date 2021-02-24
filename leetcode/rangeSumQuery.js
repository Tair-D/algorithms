/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.nums = nums;
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
  sum = 0;
  if (i <= j && j <= this.nums.length) {
    for (let k = i; k <= j; k++) {
      sum += this.nums[k];
    }
  }
  return sum;
};

/**
 * Your NumArray object will be instantiated and called as such:
 */

var obj = new NumArray([-2, 0, 3, -5, 2, -1]);
obj.sumRange(0, 5);
