/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let fresh = 0;
    let rotten = [];
    
    for(let r = 0; r < grid.length; r++) {
        for(let c = 0; c < grid[0].length; c++) {
            if(grid[r][c] === 1) {
                fresh++;
            } else if(grid[r][c] === 2) {
                rotten.push([r, c]);
            }
        }
    }
    
    const infect = (r, c, infected) => {
        if(r >= 0 && r < grid.length && c >= 0 && c < grid[0].length && grid[r][c] === 1) {
            grid[r][c] = 2;
            infected.push([r, c]);
            fresh--;
        }
    }
    
    let sec = 0;
    
    while(fresh && rotten.length) {
        const infected = [];
        
        for(let i = 0; i < rotten.length; i++) {
            const [r, c] = rotten[i];
            
            infect(r + 1, c, infected);
            infect(r - 1, c, infected);
            infect(r, c + 1, infected);
            infect(r, c - 1, infected);
        }
        sec++;
        rotten = infected;
    }
    
    return fresh ? -1 : sec;
};