/**
 * @param {string[]} words
 * @return {number}
 */
var longestPalindrome = function(words) {
    let pairs = 0;
    const map = {};
    
    for(const word of words) {
        if(!map[word]) {
            map[word] = 0;
        }
        
        const reverseWord = word[1] + word[0];
        
        if(map[reverseWord]) {
            map[reverseWord]--;
            pairs += 2;
        } else {
            map[word]++;
        }
    }
    
    for(const word in map) {
        if(word === word[1] + word[0] && map[word] >= 1) {
            pairs++;
            break;
        }
    }
    
    return pairs * 2;
};