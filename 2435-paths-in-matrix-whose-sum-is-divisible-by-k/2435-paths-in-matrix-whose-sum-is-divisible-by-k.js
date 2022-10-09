/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var numberOfPaths = function(grid, k) {
    const mod = 10**9 + 7;
    const m = grid.length;
    const n = grid[0].length;
    
    if(m === 1 && n === 1) {
        if(grid[0][0] % k === 0) {
            return 1;
        } else {
            return 0;
        }
    }
    
    const paths = new Array(m);
    
    for(let i = 0; i < m; i++) {
        paths[i] = new Array(n);
    }
    
    paths[m - 1][n - 1] = new Array(k).fill(0);
    paths[m - 1][n - 1][grid[m - 1][n - 1] % k] = 1;
    for(let r = m - 1; r >= 0; r--) {
        
        for(let c = n - 1; c >= 0; c--) {
            const num = grid[r][c];
            const cellPath = new Array(k).fill(0);
            // console.log(r, c)
            if(r < m - 1) {
                for(let i = 0; i < paths[r + 1][c].length; i++) {
                    if(paths[r + 1][c][i] === 0) continue;
                    cellPath[((num + i) % k)] += paths[r + 1][c][i];
                    cellPath[((num + i) % k)] = cellPath[((num + i) % k)] % mod;
                }
            }
            
            if(c < n - 1) {
                for(let i = 0; i < paths[r][c + 1].length; i++) {
                    if(paths[r][c + 1][i] === 0) continue;
                    cellPath[((num + i) % k)] += paths[r][c + 1][i];
                    cellPath[((num + i) % k)] = cellPath[((num + i) % k)] % mod;
                }
            }
            
            if(r !== m - 1 || c !== n - 1) {
                paths[r][c] = cellPath;
            }
        }
    }
    
    // console.log(paths);
    
    return paths[0][0][0] % mod;
};