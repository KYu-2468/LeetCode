/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    const queue = [];
    addMin(grid, queue);
    const dir = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    
    while(queue.length) {
        const [row, col] = queue[0];
        
        dir.forEach(([r, c]) => {
            
            if(row + r >= 0 && row + r < grid.length && col + c >= 0 && col + c < grid[0].length) {
                const neighbor = grid[row + r][col + c];
                
                if(neighbor.val === 1) {
                    neighbor.val = 2;
                    neighbor.min = grid[row][col].min + 1;
                    queue.push([row + r, col + c]);
                } else if (neighbor.val === 2) {
                    neighbor.min = Math.min(neighbor.min, grid[row][col].min + 1);
                }
                
            }
        })
        
        queue.shift();
    }
    
    return findMaxMinute(grid);
};

const findMaxMinute = (grid) => {
    let maxMinute = 0;
    
    for(let i = 0; i < grid.length; i++) {
        
        for(let j = 0; j < grid[0].length; j++) {
            
            if(grid[i][j].val === 1) {
                return -1;
            }
            
            maxMinute = Math.max(grid[i][j].min, maxMinute);
        }
    }
    
    return maxMinute;
}


const addMin = (grid, queue) => {
    
    for(let i = 0; i < grid.length; i++) {
        
        for(let j = 0; j < grid[0].length; j++) {
            if(grid[i][j] === 2) {
                queue.push([i, j]);
            }
            
            const item = {val: grid[i][j], min: 0};
            grid[i][j] = item;
        }
    }
}