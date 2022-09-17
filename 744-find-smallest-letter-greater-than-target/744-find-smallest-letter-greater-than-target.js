/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let left = 0;
    let right = letters.length - 1;
    
    if(target < letters[0]) return letters[0];
    
    if(target >= letters[letters.length - 1]) return letters[0];
    
    while(left <= right) {
        const mid = Math.floor((right + left) / 2);
        
        if(letters[mid] > target && letters[mid - 1] <= target) {
            return letters[mid];
        } else if(letters[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return -1;
};