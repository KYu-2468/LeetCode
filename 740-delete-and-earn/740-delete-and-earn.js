/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
    // 1. sort the nums
    // 2. condense the array to [[num, total], [num1, total1]];
    // 3. Loop from start, check what is the max when we're on the ith num
    
    nums.sort((a, b) => a- b);
    
    const numsCondense = [];
    let curVal = nums[0];
    let total = 0;
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === curVal) {
            total += curVal;
            
        } else {
            numsCondense.push([curVal, total]);
            curVal = nums[i];
            total = curVal;
        }
        
        if(i === nums.length - 1) {
            numsCondense.push([curVal, total]);
        }
    }
    
    let prev2 = [NaN, 0];
    let prev1 = numsCondense[0];
    
    for(let i = 1; i < numsCondense.length; i++) {
        
        if(prev1[0] + 1 === numsCondense[i][0]) {
            [prev1, prev2] = [[numsCondense[i][0], Math.max(numsCondense[i][1] + prev2[1], prev1[1])], prev1];
        } else {
            [prev1, prev2] = [[numsCondense[i][0], numsCondense[i][1] + prev1[1]], prev1]; 
        }
    }
    
    return prev1[1];
};