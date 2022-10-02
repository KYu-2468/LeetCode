/**
 * @param {string} s
 * @return {number}
 */
var deleteString = function(s) {
    const memo = {};
    memo[s[s.length - 1]] = 1;
    memo[""] = 0;
    
    if(s[0].repeat(s.length) === s) return s.length;
    
    const dp = (str) => {
        console.log(str.length);
        if(memo[str]) return memo[str];
        
        
        if(str.length < 10) {
            console.log(str)
        }
        
        let max = 1;
        for(let i = 1; i <= str.length / 2; i++) {
            if(str.slice(0, i) === str.slice(i).slice(0, i)) {
                max = Math.max(max, 1 + dp(str.slice(i)));
            }
        }
        memo[str] = max;
        return max;
    }
    
    return dp(s);
};