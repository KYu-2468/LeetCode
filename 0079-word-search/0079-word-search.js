/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const dirs = [ [-1, 0 ], [1, 0], [0, -1], [0, 1] ];
var exist = function(board, word) {
    
    if(board == null || word == null) return false;
    const chars = word.split("");
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[i].length; j++){
            if(match(board, i, j, chars, 0)){
                return true;
            }
        }
    }
    return false;
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
    
    
//     for(let r = 0; r < board.length; r++) {
//         for(let c = 0; c < board[r].length; c++) {
//             if(board[r][c] === word[0] && dfs(board, word, r, c)) return true;
//         }
//     }
    
//     return false;
// };

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