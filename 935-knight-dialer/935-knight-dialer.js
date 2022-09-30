/**
 * @param {number} n
 * @return {number}
 */
var knightDialer = function(n) {
    const mod = 10 ** 9 + 7;
    const path = [[4,6], [6,8], [7,9], [4,8], [0,3,9], [], [1,7,0], [2,6], [1,3], [2,4]];
    
    let prev = new Array(10).fill(1);
    let cur = new Array(10).fill(0);
    
    for(let i = 2; i <= n; i++) {
        for(let j = 0; j <= 9; j++) {
            for(let k = 0; k < path[j].length; k++) {
                cur[j] += prev[path[j][k]] % mod;
            }
        }
        prev = cur;
        
        // for(let i = 0; i <= 9; i++) {
        //     prev[i] = prev[i] % mod;
        // }
        cur = new Array(10).fill(0);
    }
    
    return prev.reduce((total, curEle) => total += curEle, 0) % mod;
};