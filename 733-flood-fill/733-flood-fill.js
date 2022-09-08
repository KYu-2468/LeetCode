/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    const origCol = image[sr][sc];
    
    const dfs = (r, c) => {
        if(r >= 0 && r < image.length && c >= 0 && c < image[0].length && image[r][c] === origCol) {
            image[r][c] = color;
            dfs(r + 1, c);
            dfs(r - 1, c);
            dfs(r, c + 1);
            dfs(r, c - 1);
        }
    }
    
    if(origCol !== color) {
        dfs(sr, sc);
    }
    
    return image;
};