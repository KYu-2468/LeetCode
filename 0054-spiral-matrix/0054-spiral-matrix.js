/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let result = [];
    
    while(matrix.length) {
        //from left to right
        result.push(...matrix[0]);
        matrix.shift();
        
        if(matrix.length === 0 || matrix[0].length === 0) break
        // from up to down
            result.push(...matrix.map(x => x.pop()))
        
        if(matrix.length === 0 || matrix[0].length === 0) break
        // from right to left
        result.push(...matrix[matrix.length - 1].reverse());
        matrix.pop();
        
        if(matrix.length === 0 || matrix[0].length === 0) break
        // from down to up
        result.push(...matrix.map(x => x.shift()).reverse());
    }
    
    
    
    console.log(result)
    console.log(matrix);
    
    return result;
    // for(let i = 1; i < matrix.length; i++) {
    //     for(let j = 1; j < matrix[0].length; j++) {
    //         result.push(matrix[j][i])
    //     }
    // }
    
    
    /*
    push first row
    push last col
    push last row in reverse
    push first col in reverse
    */
};