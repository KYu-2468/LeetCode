/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    const map = {};
    const balloon = {'b': 1, 'a': 1, 'l': 2, 'o': 2, 'n': 1};
    let min = Number.MAX_VALUE;
    
    for(let char of text) {
        if(!map[char]) {
            map[char] = 0;
        }
        map[char]++;
    }
    
    for(let char in balloon) {
        if(!map[char]) return 0;
        
        min = Math.min(min, ~~(map[char] / balloon[char]));
    }
    
    return min;
};