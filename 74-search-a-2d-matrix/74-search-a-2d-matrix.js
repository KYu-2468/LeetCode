/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    for(let r = 0; r < matrix.length; r++) {
        if(matrix[r].includes(target)) {
            return true;
        }
    }
    return false;
};