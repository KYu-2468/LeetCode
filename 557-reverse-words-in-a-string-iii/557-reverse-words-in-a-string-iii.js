/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    
    const reverseWord = (str) => {
        return str.split("").reverse().join("");
    }
    
    return s.split(" ").map(str => reverseWord(str)).join(" ");
};