/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
    // Keep track of total sum and count of nums 
    let sum = 0;
    let count = 0;
    
    // Loop through all nums
    for(let num of nums) {
        
        // check num is even and divisible by 3
        if(num % 2 === 0 && num % 3 === 0) {
            sum += num;
            count++;
        }
    }
    if(count === 0) return 0;
    return Math.floor(sum / count);
};