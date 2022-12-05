/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    // []
    //  "abccabccabcc"
    // "3[ab2[c]]2[f]"
    // "accaccacc"
    const stack = [];
    
    for (const char of s) {
        if (char !== "]") {
            stack.push(char);
            continue;
        }
        
        let lastChar = stack.pop();
        let str = "";
        let num = "";
        
        while (lastChar !== "[") {
            str = lastChar + str;
            lastChar = stack.pop();
        }
        
        lastChar = stack[stack.length - 1];
        
        while (Number.isInteger(+lastChar)) {
            num = lastChar + num;
            stack.pop();
            lastChar = stack[stack.length - 1];
        }
        
        stack.push(str.repeat(+num));
    }
    
    // console.log(stack)
    return stack.join("");
};