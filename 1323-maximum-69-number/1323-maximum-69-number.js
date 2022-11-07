/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    const numArr = (num + "").split("");
    for(let i = 0; i < numArr.length; i++) {
        if(numArr[i] == '6') {
            numArr[i] = '9';
            return +numArr.join("");
        }
    }
    
    return num;
};