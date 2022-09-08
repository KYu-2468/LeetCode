/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k, result = [], sub = [], start = 1) {
    if(sub.length === k) {
        result.push(sub);
        return;
    }
    
    for(let i = start; i <= n; i++) {
        combine(n, k, result, [...sub, i], i + 1);
    }
    
    return result;
};

