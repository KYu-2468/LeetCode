/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    const height = board.length;
    const width = board[0].length;
    
    const Os = getOs(board, []);
    
    for(let i = 0; i < Os.length; i++) {
        const [row, col] = Os[i];
        dfs(board, row, col);
    }
    
    transformBoard(board, "O", "X");
    transformBoard(board, "zero", "O");
    
    return board;
};

const transformBoard = (board, toChange, target) => {
    const height = board.length;
    const width = board[0].length;
    
    for(let row = 0; row < height; row++) {
        for(let col = 0; col < width; col++) {
            if(board[row][col] === toChange) {
                board[row][col] = target;
            }
        }
    }
    
    return board;
}

const dfs = (board, row, col) => {
    const height = board.length;
    const width = board[0].length;
    
    if(row >= 0 && row < height && col >= 0 && col < width && board[row][col] === "O") {
        board[row][col] = "zero";
        dfs(board, row + 1, col);
        dfs(board, row - 1, col);
        dfs(board, row, col + 1);
        dfs(board, row, col - 1);
    }
}

const getOs = (board, Os = []) => {
    const height = board.length;
    const width = board[0].length;
    
    for(let row = 0; row < height; row++) {
        if(board[row][0] === "O") {
            Os.push([row, 0]);
        }
        if(board[row][width - 1] === "O") {
            Os.push([row, width - 1]);
        }
    }

    for(let col = 0; col < width; col++) {
        if(board[0][col] === "O") {
            Os.push([0, col]);
        }
        if(board[height - 1][col] === "O") {
            Os.push([height - 1, col]);
        }
    }
    
    return Os;
}
