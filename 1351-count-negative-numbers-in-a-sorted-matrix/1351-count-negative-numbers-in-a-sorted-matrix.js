/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let count = 0;
    for(let i = grid.length - 1, j = 0; i >= 0; i--) {
        while(grid[i][j] >= 0) {
            j++;
        }
        count += grid[0].length - j
    }
    
    return count;
};