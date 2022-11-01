/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findBall = function(grid) {
    const memo = new Array(grid.length);
    const result = [];
    
    for(let i = 0; i < grid.length; i++) {
        memo[i] = new Array(grid[0].length).fill(null);
    }
    const dfs = (row, col) => {
        const newCol = col + grid[row][col];
        // console.log(typeof row, row, typeof col, col);
        if(memo[row][col] !== null) {
            return memo[row][col];
        }
        
        if(newCol < 0 || newCol >= grid[0].length) {
            memo[row][col] = -1;
            return -1;
        }
        
        if(grid[row][col] !== grid[row][newCol]) {
            memo[row][col] = -1;
            return -1;
        }
        
        if(row === grid.length - 1) {
            memo[row][col] = newCol;
            return newCol;
        }
        
        memo[row][col] = dfs(row + 1, newCol);
        return memo[row][col];
    }
    
    for(let col = 0; col < grid[0].length; col++) {
        result.push(dfs(0, col));
    }
    
    return result;
};