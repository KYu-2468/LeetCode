/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count = 0;
    const dir = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    
    const findNeighbor = (row, col) => {
        if(row >= 0 && row < grid.length && col >= 0 && col < grid[row].length && grid[row][col] === "1") {
            grid[row][col] = 0;
            dir.forEach(d => findNeighbor(row + d[0], col + d[1]));
        }
    }
    
    for(let r = 0; r < grid.length; r++) {
        for(let c = 0; c < grid[r].length; c++) {
            if(grid[r][c] === "1") {
                count++;
                findNeighbor(r, c);
            }
        }
    }
    
    return count;
};