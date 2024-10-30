// Description:
// Write a function that will solve a 9x9 Sudoku puzzle. 
// The function will take one argument consisting of the 2D puzzle array, with the value 0 representing an unknown square.

// The Sudokus tested against your function will be "easy" 
// (i.e. determinable; there will be no need to assume and test possibilities on unknowns) and can be solved with a brute-force approach.

// For Sudoku rules, see the Wikipedia article.

// var puzzle = [
//             [5,3,0,0,7,0,0,0,0],
//             [6,0,0,1,9,5,0,0,0],
//             [0,9,8,0,0,0,0,6,0],
//             [8,0,0,0,6,0,0,0,3],
//             [4,0,0,8,0,3,0,0,1],
//             [7,0,0,0,2,0,0,0,6],
//             [0,6,0,0,0,0,2,8,0],
//             [0,0,0,4,1,9,0,0,5],
//             [0,0,0,0,8,0,0,7,9]];

// sudoku(puzzle);
// /* Should return
// [[5,3,4,6,7,8,9,1,2],
// [6,7,2,1,9,5,3,4,8],
// [1,9,8,3,4,2,5,6,7],
// [8,5,9,7,6,1,4,2,3],
// [4,2,6,8,5,3,7,9,1],
// [7,1,3,9,2,4,8,5,6],
// [9,6,1,5,3,7,2,8,4],
// [2,8,7,4,1,9,6,3,5],
// [3,4,5,2,8,6,1,7,9]] 

function sudoku(puzzle) {
    let next = nextZero(puzzle);
    if (!next) return puzzle;
    
    for (let i = 0; i < 10; i++) {
      if (checkSets(puzzle, next[0], next[1], i)) {
        puzzle[next[0]][next[1]] = i;
        const board = sudoku(puzzle);
        if (board) return board;
        puzzle[next[0]][next[1]] = 0;
      };
    };
    return null;
};
  
function nextZero(puzzle) {
    for (let i = 0; i < puzzle.length; i++) {
      for (let j = 0; j < puzzle[i].length; j++) {
        if (puzzle[i][j] === 0) return [i, j];
      };
    };
    return null;
};
  
function checkSets(puzzle, row, col, number) {
    let rowSet = new Set(puzzle[row]);
    let colSet = new Set();
    for (let row of puzzle) {
      colSet.add(row[col]);
    };
    let squareSet = new Set();
    let squareRow = Math.floor(row / 3);
    let squareCol = Math.floor(col / 3);
    for (let i = (squareRow * 3); i < (squareRow + 1)*3; i++) {
      for (let j = (squareCol * 3); j < (squareCol + 1)*3; j++) {
        squareSet.add(puzzle[i][j]);
      };
    };
    return !rowSet.has(number) && !colSet.has(number) && !squareSet.has(number);
};