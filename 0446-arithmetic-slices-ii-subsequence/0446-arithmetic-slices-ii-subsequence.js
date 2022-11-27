/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function(nums) {
    let res = 0;
    const memo = [];
    
    for (let i = 0; i < nums.length; i++) {
        memo[i] = {};
        for (let j = 0; j < i; j++) {
            const diff = nums[i] - nums[j];
            if (!memo[j][diff]) memo[j][diff] = 0;
            if (!memo[i][diff]) memo[i][diff] = 0;
            memo[i][diff] += memo[j][diff] + 1;
            res += memo[j][diff];
        }
        // console.log(memo)
    }
    
    return res;
};