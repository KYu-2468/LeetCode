/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const map = {};
    for (const num of arr) {
        map[num] = map[num] || 0;
        map[num]++;
    }
    
    const set = new Set();
    
    for (const val of Object.values(map)) {
        if (set.has(val)) return false;
        set.add(val);
    }
    
    return true;
};