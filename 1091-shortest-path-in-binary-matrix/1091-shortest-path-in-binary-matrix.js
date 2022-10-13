/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    if(grid[0][0] === 1) return -1;
    
    const dirs = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
    let queue = [[0, 0]];
    let level = 1;
    
    while(queue.length) {
        const newQueue = [];
        
        while(queue.length) {
            const [row, col] = queue.shift();
            
            if(row === grid.length - 1 && col === grid.length - 1) {
                return level;
            }
            
            for(let dir of dirs) {
                const newR = row + dir[0];
                const newC = col + dir[1];
                
                if(newR < 0 || newR >= grid.length || newC < 0 || newC >= grid.length || grid[newR][newC] === 1) {
                    continue;
                }
                
                newQueue.push([newR, newC]);
                grid[newR][newC] = 1;
            }
        }
        
        queue = newQueue;
        level++;
    }
    
    return -1;
};