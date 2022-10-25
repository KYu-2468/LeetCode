/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    const createArr = (arr) => {
    for(let i = 0; i < arr.length; i++) {
      arr[i] = new Set();
    }
  }
  
  const squareTracker = new Array(9);
  createArr(squareTracker);
  const rowTracker = new Array(9);
  createArr(rowTracker);
  const colTracker = new Array(9);
  createArr(colTracker);

  const getSection = (row, col) => {
    let c;
    let r;
    if(col < 3) {
      c = 1;
    } else if(col < 6) {
      c = 2;
    } else {
      c = 3;
    }

    if(row < 3) {
      r = 1;
    } else if(row < 6) {
      r = 2;
    } else {
      r = 3;
    }

    return (r - 1) * 3 + c - 1;
  }

  const undef = [];
  for(let row = 0; row < 9; row++) {
    for(let col = 0; col < 9; col++) {
      if(board[row][col] === '.') {
        undef.push([row, col]);
      } else {
        rowTracker[row].add(board[row][col]);
        colTracker[col].add(board[row][col]);
        squareTracker[getSection(row, col)].add(board[row][col]);
      }
    }
  }

  const dfs = (idx) => {
    if(idx >= undef.length) return board;
    
    
    const [r, c] = undef[idx];
    const sect = getSection(r,c);
    
    for(let i = 1; i <= 9; i++) {
      if(rowTracker[r].has(i + "")) continue;
      if(colTracker[c].has(i + "")) continue;
      if(squareTracker[sect].has(i + "")) continue;

      rowTracker[r].add(i + "");
      colTracker[c].add(i + "");
      squareTracker[sect].add(i + "");
      board[r][c] = i + "";
      const isCorrect = dfs(idx + 1);
      if(isCorrect) return board;
      rowTracker[r].delete(i + "");
      colTracker[c].delete(i + "");
      squareTracker[sect].delete(i + "");
    }
  }

  dfs(0);
  
  return board;
};