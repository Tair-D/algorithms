/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  //   console.log(intervals.length);
  //   return intervals.sort();
  let combine = [...intervals];

  //   console.log((combine + '').split(',').sort());

  for (let i = 0; i < intervals.length; i++) {
    // intervals[i]
    console.log();
    if (intervals[i][intervals[i].length - 1] > intervals[i][0]) {
    }
  }
};

var intervals = merge(
  (intervals = [
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);
console.log(intervals);
