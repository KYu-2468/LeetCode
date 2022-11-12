/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase().split("").filter(char => 'abcdefghijklmnopqrstuvwxyz0123456789'.includes(char));
    return s.join("") === s.reverse().join("");
};