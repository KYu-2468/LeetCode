/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
    const charStack = [];
    const numStack = [];
    
    for(let i = 0; i < s.length; i++) {
        const lastChar = charStack[charStack.length - 1];
        const numConsec = numStack[numStack.length - 1];
        
        if(s[i] === lastChar) {
            
            if(numConsec + 1 === k) {
                numStack.pop();
                charStack.pop();
            } else {
                numStack[numStack.length - 1]++;
            }
            
        } else {
            numStack.push(1);
            charStack.push(s[i]);
        }
    }
    
    let result = "";
    
    for(let i = 0; i < charStack.length; i++) {
        result += charStack[i].repeat(numStack[i]);
    }
    
    return result;
};