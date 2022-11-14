/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
//     const result = new Array(nums.length).fill(1);
//     let rightProduct = 1;
    
//     for(let i = 1; i < nums.length; i++) {
//         const prev = result[i - 1];
//         result[i] = (nums[i] * prev);
//     }
    
//     for(let i = nums.length - 1; i >= 0; i--) {
//         const leftProduct = result[i - 1] !== undefined ? result[i - 1] : 1;
//         result[i] = rightProduct * leftProduct;
//         rightProduct *= nums[i];
//     }
    
//     return result;
    const result = [];
    let rightProduct = 1;
    
    for(let i = 0; i < nums.length; i++) {
        const prev = result[i - 1] !== undefined ? result[i - 1] : 1;
        result.push(nums[i] * prev);
    }
    
    for(let i = nums.length - 1; i >= 0; i--) {
        const leftProduct = result[i - 1] !== undefined ? result[i - 1] : 1;
        result[i] = rightProduct * leftProduct;
        rightProduct *= nums[i];
    }
    
    return result;
};