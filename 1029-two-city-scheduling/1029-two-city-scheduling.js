/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
    // know delta
//        0       200       50        100 => 350
//        a        b        b          a
//     [0, 50] [300, 200] [80, 50] [100, 80]
//       -50       100       30       20
    
//     [-50 (0), 20 (3), 30 (2), 100 (1)]
    
    const delta = [];
    let sum = 0;
    
    for (let i = 0; i < costs.length; i++) {
        const [costA, costB] = costs[i];
        delta.push([costA - costB, i]);
    }
    
    delta.sort((a, b) => a[0] - b[0]);
    
    for (let i = 0; i < delta.length / 2; i++) {
        sum += costs[delta[i][1]][0];
    }
    
    for (let i = delta.length / 2; i < delta.length; i++) {
        sum += costs[delta[i][1]][1];
    }
    
    return sum;
};