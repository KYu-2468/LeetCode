/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const pasTri = [[1]];
    
    for(let i = 2; i <= numRows; i++) {
        const nextRow = [];
        
        for(let j = 0; j < i; j++) {
            const firstVal = pasTri[i - 2][j - 1] || 0;
            const secVal = pasTri[i - 2][j] || 0;
            nextRow.push(firstVal + secVal);
        }
        pasTri.push(nextRow);
    }
    
    return pasTri;
};