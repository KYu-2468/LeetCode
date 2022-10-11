/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result = [];
    // candidates.sort((a, b) => a - b);
    
    const backtrack = (index = 0, total = 0, comb = []) => {
        if(total > target) return;
        
        if(total === target) {
            return result.push(comb);
        }
        
        for(let i = index; i < candidates.length; i++) {
            backtrack(i, total + candidates[i], [...comb, candidates[i]]);
        }
        
    }
    
    backtrack();
    
    return result;
};