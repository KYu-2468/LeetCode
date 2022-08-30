/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    const arr = [0, 1, 1];
    
    for(let i = 3; i <= n; i++) {
        const total = arr[i - 1] + arr[i - 2] + arr[i - 3];
        arr.push(total);
    }
    
    return arr[n];
};