/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let magObj = {};
    for (let i = 0; i < magazine.length; i++) {
        if (magObj[magazine.charAt(i)]) {
            magObj[magazine.charAt(i)]++;
        } else {
            magObj[magazine.charAt(i)] = 1;
        }
    }
    
    for (let i = 0; i < ransomNote.length; i++) {
        if (magObj[ransomNote.charAt(i)]) {
            magObj[ransomNote.charAt(i)]--;
        } else {
            return false;
        }
    }
    return true;
};