/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    
    let windowSize = 0;
    const s1Map = {};
    let s2WindowMap = {};
    
    for(let i = 0; i < s1.length; i++) {
        const char = s1.charAt(i);
        
        if(s1Map[char]) {
            s1Map[char]++;
        } else {
            s1Map[char] = 1;
        }
    }
    
    // [e i d b b a o o]
    //          ^
    
    for(let i = 0; i < s2.length; i++) {
        const char = s2.charAt(i);
        
        if(s1Map[char]) {
            
            if(s2WindowMap[char]) {
                s2WindowMap[char]++;
            } else {
                s2WindowMap[char] = 1;
            }
            
            windowSize++;
            
            
            if(s2WindowMap[char] > s1Map[char]) {
                while(windowSize && s2WindowMap[char] > s1Map[char]) {
                    
                    s2WindowMap[s2.charAt(i - windowSize + 1)]--;
                    windowSize--;
                }
            }
            
            if(windowSize === s1.length) {
                return true;
            }
            
            
        } else {
            windowSize = 0;
            s2WindowMap = {};
        }
    }
    
    return false;
    
};