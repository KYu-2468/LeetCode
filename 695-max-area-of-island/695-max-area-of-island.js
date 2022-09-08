/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let max = 0;
    
    const countArea = (r, c) => {
        let count = 0;
        
        if(r >= 0 && r < grid.length && c >= 0 && c < grid[0].length && grid[r][c] === 1) {
            count++;
            grid[r][c] = 0;
            count += countArea(r + 1, c);
            count += countArea(r - 1, c);
            count += countArea(r, c + 1);
            count += countArea(r, c - 1);
        }
        
        return count;
    }
    
    for(let r = 0; r < grid.length; r++) {
        
        for(let c = 0; c < grid[0].length; c++) {
            if(grid[r][c] === 1) {
                max = Math.max(max, countArea(r, c));
            }
        }
        
    }
    
    return max;
};