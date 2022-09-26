/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    
    for(let r = 0; r < board.length; r++) {
        for(let c = 0; c < board[r].length; c++) {
            if(board[r][c] === word[0]) {
                if(dfs(board, word, r, c)) {
                    return true;
                }
            }
        }
    }
    
    return false;
};

const dfs = (board, word, row, col, visited = {}) => {
    // console.log(row, col, word, visited)
    if(word === '') return true;
    
    if(row < 0 || row >= board.length || col < 0 || col >= board[row].length) return false;
    
    if(board[row][col] !== word[0] || visited[`${row}-${col}`]) return false;
    
    visited[`${row}-${col}`] = true;
    
    const newWord = word.slice(1);
    
    const checkRight = dfs(board, newWord, row, col + 1, visited);
    const checkLeft = dfs(board, newWord, row, col - 1, visited);
    const checkUp = dfs(board, newWord, row + 1, col, visited);
    const checkDown = dfs(board, newWord, row - 1, col, visited);
    
    visited[`${row}-${col}`] = false;
    
    return checkRight || checkLeft || checkUp || checkDown;
}