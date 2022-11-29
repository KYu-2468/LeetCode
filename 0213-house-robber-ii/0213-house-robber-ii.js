/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length === 1) {
        return nums[0];
    }
    
    /*
    S: F(i) = max of F(i - 1), nums[i] + F(i - 2)
    R: F(i) = max of F(i - 1), nums[i] + F(i - 2)
    T: 0, 1, 2 ... n - 1
    B: memo[0] = nums[0]
    O: max of F(1) -> nums.pop() -> F(0)
    T: O(n)
    */
    
    let memo = [0];
    
    function dfs(index) {
        for (let i = index; i < nums.length; i++) {
            memo[i] = Math.max(memo[i - 1] || 0, nums[i] + (memo[i - 2] || 0))
        }
        return memo[memo.length - 1];
    }
    
    const firstNotIncluded = dfs(1);
    
    nums.pop();
    memo = [0];
    
    const lastNotIncluded = dfs(0);
    return Math.max(firstNotIncluded, lastNotIncluded);
};