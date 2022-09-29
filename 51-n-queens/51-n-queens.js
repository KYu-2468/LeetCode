/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    const result = [];
    const colsTaken = {};
    
    for(let i = 0; i < n; i++) {
        colsTaken[i] = {};
    }
    
    const backtrack = (remainingQ, qPos = []) => {
        
        if(remainingQ === 0) {
            result.push(generateBoard(n, qPos));
            return
        }
        
        const curRow = qPos.length;
        for(let c = 0; c < n; c++) {
            if(colsTaken[curRow][c]) {
                continue;
            }
            
            qPos.push([curRow, c]);
            const posTaken = takeCols(curRow, c);
            
            backtrack(remainingQ - 1, qPos);
            
            unTakeCols(posTaken);
            qPos.pop();
        }
    }
    
    const takeCols = (row, col) => {
        const pos = [];
        for(let r = row + 1; r < n; r++) {
            const cLeft = col - (r - row);
            const cRight = col + (r - row);
            if(!colsTaken[r][col]) {
                colsTaken[r][col] = true;
                pos.push([r, col])
            }
            
            if(!colsTaken[r][cLeft]) {
                colsTaken[r][cLeft] = true;
                pos.push([r, cLeft]);
            }
            
            if(!colsTaken[r][cRight]) {
                colsTaken[r][cRight] = true;
                pos.push([r, cRight])
            }
        }
        
        return pos;
    }
    
    const unTakeCols = (posTaken) => {
        for(let i = 0; i < posTaken.length; i++) {
            const [r, c] = posTaken[i];
            colsTaken[r][c] = false;
        }
    }
    
    backtrack(n, []);
    
    return result;
};

const generateBoard = (n, qPos) => {
    
    const board = new Array(n);
    
    for(let i = 0; i < n; i++) {
        board[i] = new Array(n).fill(".");
    }
    
    for(let i = 0; i < qPos.length; i++) {
        const [r, c] = qPos[i];
        board[r][c] = 'Q';
    }
    
    for(let i = 0; i < n; i++) {
        board[i] = board[i].join("");
    }
    
    return board;
}
