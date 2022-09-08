/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const comb = [];
    
    findComb(1,[], comb, n, k);
    
    return comb;
};

const findComb = (currentNum, currentComb = [], comb, n, k) => {
    
    if(currentNum === n) {
        
        if(currentComb.length + 1 === k) {
            comb.push([...currentComb, currentNum]);
        }
        
        return;
    }
    
    findComb(currentNum + 1, [...currentComb], comb, n, k);
    
    if(currentComb.length + 1 === k) {
        comb.push([...currentComb, currentNum]);
        return;
    }
    
    findComb(currentNum + 1, [...currentComb, currentNum], comb, n, k);
}

// const findComb = (currentNum, currentComb = [], comb, n, k) => {
//     const addedComb = [...currentComb, currentNum];
    
//     if(currentNum === n) {
        
//         if(addedComb.length === k) {
//             comb.push(addedComb);
//         }
        
//         return;
//     }
    
//     findComb(currentNum + 1, [...currentComb], comb, n, k);
    
//     if(currentComb.length + 1 === k) {
//         comb.push([...addedComb]);
//         return;
//     }
    
//     findComb(currentNum + 1, [...addedComb], comb, n, k);
// }