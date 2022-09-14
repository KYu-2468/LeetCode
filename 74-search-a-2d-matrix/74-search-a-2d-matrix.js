/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    
    if(target < matrix[0][0] || target > matrix[matrix.length - 1][matrix[0].length - 1]) return false;
    
    let left = 0;
    let right = matrix.length - 1;
    let row = 0;
    
    while(left <= right) {
        const mid = Math.floor((right + left) / 2);
        
        if(matrix[mid][0] <= target && (mid === matrix.length - 1 || matrix[mid + 1][0] > target)) {
            row = mid;
            break;
        } else if(matrix[mid][0] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    left = 0;
    right = matrix[0].length - 1;
    
    while(left <= right) {
        const mid = Math.floor((right + left) / 2);
        console.log(mid)
        if(matrix[row][mid] === target) {
            return true;
        } else if(matrix[row][mid] < target) {
            console.log('hit', mid, right)
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return false;
};