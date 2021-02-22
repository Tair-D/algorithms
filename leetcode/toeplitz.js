/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function (matrix) {
  let row = [];
  for (let i = 0; i < matrix.length; i++) {
    row.push(i);
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      //   console.log(row[j]);
      if (i - 2 == j) {
        // console.log(i);
        console.log(matrix[i][j]);
      }
    }
  }
};

let res = isToeplitzMatrix([
  [1, 2, 3, 4],
  [5, 1, 2, 3],
  [9, 5, 1, 2],
]);
