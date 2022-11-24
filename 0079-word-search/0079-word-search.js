/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
// const dirs = [ [-1, 0 ], [1, 0], [0, -1], [0, 1] ];
var exist = function(board, word) {
    for(let r = 0; r < board.length; r++) {
        for(let c = 0; c < board[r].length; c++) {
            if(board[r][c] === word[0] && dfs(board, word, r, c)) return true;
        }
    }
    
    return false;
    // if(board == null || word == null) return false;
    // const chars = word.split("");
    // for(let i = 0; i < board.length; i++){
    //     for(let j = 0; j < board[i].length; j++){
    //         if(match(board, i, j, chars, 0)){
    //             return true;
    //         }
    //     }
    // }
    // return false;
}

function match(board, i, j, chars, index){
    if (index == chars.length) return true;
    if (i < 0 || i >= board.length || j < 0 || j >= board[i].length || board[i][j] != chars[index]) return false;
    board[i][j] = 0;
    let result = false;
    for (const dir of dirs) {
        result |= match(board, i + dir[0], j + dir[1], chars, index + 1);
        if (result) break;
    }
    board[i][j] = chars[index];
    return result;
}

const dfs = (board, word, row, col, visited = {}, index = 0) => {
    
    if(index > word.length || row < 0 || row >= board.length || col < 0 || col >= board[row].length) return false;
    
    if(board[row][col] !== word[index] || visited[`${row}-${col}`]) return false;
    if(index === word.length - 1) return true;
    
    visited[`${row}-${col}`] = true;
    
    const checkRight = dfs(board, word, row, col + 1, visited, index + 1);
    if (checkRight) return true;
    const checkLeft = dfs(board, word, row, col - 1, visited, index + 1);
    if (checkLeft) return true;
    const checkUp = dfs(board, word, row + 1, col, visited, index + 1);
    if (checkUp) return true;
    const checkDown = dfs(board, word, row - 1, col, visited, index + 1);
    if (checkDown) return true;
    
    visited[`${row}-${col}`] = false;
    
    return false;
}