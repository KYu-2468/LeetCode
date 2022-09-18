/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    const result = [];
    for(let i = 0; i < mat.length; i++) {
        
        if(mat[i][mat[i].length - 1] === 1) {
            result.push([i, mat[i].length]);
            continue;
        }
        
        if(mat[i][0] === 0) {
            result.push([i, 0]);
            continue;
        }
        
        let left = 0;
        let right = mat[i].length - 1;
        
        while(left <= right) {
            const mid = Math.floor((right + left) / 2);
            
            if(mat[i][mid] === 1 && mat[i][mid + 1] === 0) {
                result.push([i, mid + 1]);
                break;
            } else if(mat[i][mid] === 1) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    console.log(result);
    result.sort((a, b) => {
        if(a[1] > b[1]) return 1;
        else if(a[1] < b[1]) return -1;
        else if(a[0] > b[0]) return 1;
        else return -1
    });
    
    return result.slice(0, k).map(arr => arr[0]);
};