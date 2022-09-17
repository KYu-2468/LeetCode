/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    
    const isBuildable = (num) => {
        return n >= (num + 1) * num / 2;
    }
    
    let left = 1;
    let right = n;
    
    while(left <= right) {
        const mid = Math.floor((right + left) / 2);
        
        if(isBuildable(mid) && !isBuildable(mid + 1)) {
            return mid;
        } else if (isBuildable(mid)) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
};