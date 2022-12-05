/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (haystack === needle || needle === "") {
        return 0;
    }
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {
            let str = haystack.slice(i, i + needle.length);
            if (str === needle) {
                return i;
            }
        }
    }
    return -1;
};