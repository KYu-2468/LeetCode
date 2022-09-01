/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    
    const newArr = new Array(arr.length);
    
    for(let i = 0; i < arr.length; i++) {
        arr[i] = [arr[i], i];
    }
    
    arr.sort((a, b) => a[0] - b[0]);
    
    let rank = 0;
    
    for(let i = 0; i < arr.length; i++) {
        const [value, originalIndex] = arr[i];
        let previousValue = -Infinity;
        
        if(i > 0) {
            previousValue = arr[i - 1][0];
        }
        
        if(value > previousValue) {
            newArr[originalIndex] = ++rank;
        } else {
            newArr[originalIndex] = rank;
        }
    }
    
    return newArr;
};