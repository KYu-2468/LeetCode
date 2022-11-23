/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const rows = generateArray(9);
    const cols = generateArray(9);
    const secs = generateArray(9);
    
    for (let r = 0; r < board.length; r++) {
        for (let c = 0; c < board[r].length; c++) {
            if (board[r][c] === ".") continue;
            const sec = 3 * Math.floor(r / 3) + Math.floor(c / 3);
            
            if (rows[r].has(board[r][c]) || cols[c].has(board[r][c]) || secs[sec].has(board[r][c])) return false;
            rows[r].add(board[r][c]);
            cols[c].add(board[r][c]);
            secs[sec].add(board[r][c]);
        }
    }
    
    return true;
};

function generateArray(length) {
    const arr = new Array(length);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Set();
    }
    return arr;
}