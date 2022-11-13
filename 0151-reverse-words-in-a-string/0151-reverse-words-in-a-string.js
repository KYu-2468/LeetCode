/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.split(" ").filter(str => str !== " " && str !== "").reverse().join(" ");
};