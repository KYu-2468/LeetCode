/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    const result = [];
    candidates.sort((a, b) => a - b);
    
    const backtrack = (index = 0, total = 0, comb = []) => {
        if(total === target) {
            return result.push(comb);
        }
        
        if(total > target) return;
        
        for(let i = index; i < candidates.length; i++) {
            if(candidates[i] === candidates[i - 1] && i !== index) continue;
            backtrack(i + 1, total + candidates[i], [...comb, candidates[i]]);
        }
    }
    
    backtrack();
    
    return result;
};