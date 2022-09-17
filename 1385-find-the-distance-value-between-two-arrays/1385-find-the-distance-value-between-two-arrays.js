/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function(arr1, arr2, d) {
    let count = 0;
    
    arr2.sort((a, b) => a - b);
    
    const isCloseEnough = (num) => {
        let left = 0;
        let right = arr2.length - 1;
        
        while(left <= right) {
            const mid = Math.floor((right + left) / 2);
            const upperBound = arr2[mid] + d;
            const lowerBound = arr2[mid] - d;
            
            if (num >= lowerBound && num <= upperBound) {
                return true;
            } else if (num > arr2[mid]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        return false;
    }
    
    for(let i = 0; i < arr1.length; i++) {
        if (!isCloseEnough(arr1[i])) count++;
    }
    
    return count;
};