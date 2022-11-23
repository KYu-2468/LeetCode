/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const rowArr = new Array(9);
    const colArr = new Array(9);
    const secArr = new Array(9);
    generateArray(rowArr);
    generateArray(colArr);
    generateArray(secArr);
    
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[row].length; col++) {
            if (board[row][col] === ".") continue;
            if (rowArr[row].has(board[row][col])) {
                return false;
            }
            rowArr[row].add(board[row][col]);
            if (colArr[col].has(board[row][col])) {
                return false;
            }
            colArr[col].add(board[row][col]);
            if (secArr[getSec(row, col)].has(board[row][col])) {
                return false;
            }
            secArr[getSec(row, col)].add(board[row][col]);
        }
    }
    
    return true;
};

function getSec(row, col) {
    const sec = 3 * Math.floor(row / 3) + Math.floor(col / 3);
    console.log(sec, row, col);
    return sec;
}

function generateArray(arr) {
    for (let i = 0; i< arr.length; i++) {
        arr[i] = new Set();
    }
    return arr;
}