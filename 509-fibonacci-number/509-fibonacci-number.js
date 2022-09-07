/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n, map = {0: 0, 1: 1}) {
    
    if(map[n] !== undefined) {
        return map[n];
    }
    
    const result = fib(n-1, map) + fib(n - 2, map);
    map[n] = result;
    
    return result;
};