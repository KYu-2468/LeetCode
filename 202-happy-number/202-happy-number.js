/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const map = {[n]: true};
    
    while (n !== 1) {
        const s = n + "";
        let total = 0;
        
        for(let i = 0; i < s.length; i++) {
            total += (+s[i]) ** 2;
        }
        if(total === 1) return true;
        
        if(map[total]) return false;
        
        map[total]  = true;
        
        n = total;
    }
    
    return true;
};