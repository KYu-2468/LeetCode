/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    const numOfMissing = (i) => {
        return arr[i] - i - 1;
    }
    
    if(k < arr[0]) return k;
    
    if(k > numOfMissing(arr.length - 1)) return k - numOfMissing(arr.length - 1) + arr[arr.length - 1];
    
    let left = 0;
    let right = arr.length - 1;
    
    while(left <= right) {
        const mid = Math.floor((right + left) / 2);
        if(numOfMissing(mid) < k && numOfMissing(mid + 1) >= k) {
            return k - numOfMissing(mid) + arr[mid];
            
        } else if(numOfMissing(mid) >= k) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
};