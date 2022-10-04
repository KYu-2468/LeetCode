/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
    let result = {};
  for (let str of strs) {
    const keys = new Array(26).fill(0);
    for (let char of str) {
      keys[char.charCodeAt(0) - 97] += 1; 
    }
    
    if (!result[keys]) result[keys] = [];
    result[keys].push(str);
  }
  return Object.values(result);
    
    const root = {};
    const set = new Set();
    
    for(let i = 0; i < strs.length; i++) {
        const freq = getFreq(strs[i]);
        let curLevel = root;
        
        for(let i = 0; i < freq.length; i++) {
            if(!curLevel[freq[i]]) {
                curLevel[freq[i]] = {};
            }
            
            curLevel = curLevel[freq[i]];
        }
        
        if(!curLevel['strs']) {
            curLevel['strs'] = [];
        }
        
        curLevel['strs'].push(strs[i]);
        set.add(curLevel['strs']);
    }
    
    return Array.from(set.values());
};


const getFreq = (str) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const freq = {}
    for(let i = 0; i < alphabet.length; i++) {
        freq[alphabet[i]] = 0;
    }
    
    for(let i = 0; i < str.length; i++) {
        freq[str[i]]++;
    }
    
    return Object.values(freq);
}