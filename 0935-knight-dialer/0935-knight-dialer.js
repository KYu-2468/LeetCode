/**
 * @param {number} n
 * @return {number}
 */
var knightDialer = function(n) {
    const keysArr = [[4, 6], [6, 8], [7, 9], [4, 8], [3, 9, 0], [], [1, 7, 0], [2, 6], [1, 3], [4, 2]];
    let memoArr = new Array(keysArr.length).fill(1);
    let counter = 0;
    
    while (n>1) {
    let nxtMemoArr =new Array(keysArr.length).fill(0);
    for (let i = 0; i < keysArr.length; i++) {
    for (let digit of keysArr[i]) {
    nxtMemoArr[digit] += memoArr[i];
    nxtMemoArr[digit] %= (Math.pow(10, 9) +7);
}
}
n--;
memoArr = nxtMemoArr;
}

for (let i = 0; i < memoArr.length; i++) {
counter += memoArr[i];
}
return counter % (Math.pow(10, 9) + 7);

//     const mod = 10 ** 9 + 7;
//     const path = [[4,6], [6,8], [7,9], [4,8], [0,3,9], [], [1,7,0], [2,6], [1,3], [2,4]];
//     let prev = new Array(10).fill(1);
    
//     for(let i = 2; i <= n; i++) {
//         const cur = new Array(10).fill(0);
//         for(let j = 0; j <= 9; j++) {
//             for(let k = 0; k < path[j].length; k++) {
//                 cur[j] += prev[path[j][k]] % mod;
//             }
//         }
//         prev = cur;
//     }
    
//     return prev.reduce((total, curEle) => total += curEle, 0) % mod;
};