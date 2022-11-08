/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    const stack = [];
    
    for(let i = 0; i < s.length; i++) {
        if(stack.length && s[i].toLowerCase() === stack[stack.length - 1].toLowerCase() && s[i] !== stack[stack.length - 1]) {
            stack.pop();
        } else {
            stack.push(s[i]);
        }
        
    }
    
    return stack.join("");
};