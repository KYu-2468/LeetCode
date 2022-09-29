/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    const s1Diff = [];
    const s2Diff = [];
    let count = 0;
    
    for(let i = 0; i < s1.length; i++) {
        if(s1[i] !== s2[i]) {
            s1Diff.push(s1[i]);
            s2Diff.push(s2[i]);
            
            count++;
            if(count > 2) return false;
            if(count === 1) continue;
            
            [s2Diff[0], s2Diff[1]] = [s2Diff[1], s2Diff[0]];
            if(s1Diff[0] !== s2Diff[0] || s1Diff[1] !== s2Diff[1]) return false;
            
        }
    }
    
    if(count === 1) return false;
    
    return true;
};