/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    // "bloombergmb" "mbe"
    if (haystack.length < needle.length) return -1;
    
    for (let i = 0; i < haystack.length; i++) {
        const substr = haystack.slice(i, i + needle.length);
        if (substr === needle) return i;
    }
    
    return -1;
};