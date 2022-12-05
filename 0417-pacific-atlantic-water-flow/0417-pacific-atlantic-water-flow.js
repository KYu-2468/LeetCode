/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
// var pacificAtlantic = function(heights) {
    
// };

function pacificAtlantic(grid) {
  const res = [];
  const dirs = [[0, 1], [0, -1], [-1, 0], [1, 0]];
  const resMap = {};
  
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (bfs(row, col)) {
        res.push([row, col]);
      }
    }
  }

  function bfs(row, col) {
    const q = [[row, col]];
    const visited = new Set();
    let touchedPacific = false, touchedAtlantic = false;
    
    while (q.length) {
      if (touchedPacific && touchedAtlantic) return true;
      
      const [r, c, v] = q.shift();
      
      if (r < 0 || c < 0) { // touched pacific
        touchedPacific = true;
        continue;
      }

      if (r >= grid.length || c >= grid[0].length) {
        touchedAtlantic = true;
        continue;
      }

      if (grid[r][c] > v) continue;
      
      if (visited.has(`${r},${c}`)) continue;
      visited.add(`${r},${c}`);

      if (resMap[[r, c]] === true) return true;
      if (resMap[[r, c]] === false) continue;
      if (resMap[[r, c]] === "A") {
          touchedAtlantic = true;
          continue
      };
        
      if (resMap[[r, c]] === "P") {
          touchedPacific = true;
          continue;
      };
      
      for (const [rDir, cDir] of dirs) {
        q.push([r + rDir, c + cDir, grid[r][c]])
      }
    }
      
    if (touchedPacific && touchedAtlantic) {
        resMap[[row, col]] = true;
    } else if (touchedPacific) {
        resMap[[row, col]] = "P";
    } else if (touchedAtlantic) {
        resMap[[row, col]] = "A";
    } else {
        resMap[[row, col]] = false;
    }
      
    return touchedPacific && touchedAtlantic;
  }

  return res;
}