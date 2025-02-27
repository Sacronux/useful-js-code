/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const columnStore = {};
  const squareStore = {};

  for (let row = 0; row < board.length; row++) {
    const rowStore = {};

    for (let i = 0; i < board[row].length; i++) {
      const num = board[row][i];

      if (num > "9" || num < "0") {
        continue;
      }
      if (!columnStore[i]) {
        columnStore[i] = {};
      }
      if (columnStore[i][num]) {
        return false;
      }

      columnStore[i][num] = 1;

      if (rowStore[num]) {
        return false;
      }
      rowStore[num] = 1;

      const squareIdx = Math.floor(row / 3) * 3 + Math.floor(i / 3);

      if (!squareStore[squareIdx]) {
        squareStore[squareIdx] = {};
      }
      if (squareStore[squareIdx][num]) {
        return false;
      }
      squareStore[squareIdx][num] = 1;
    }
  }

  return true;
};
