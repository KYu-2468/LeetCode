/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const map = {}
    
    for(let char of nums) {
        if(!map[char]) map[char] = 0;
        map[char]++;
    }
    
    return Object.entries(map).sort((a, b) => b[1] - a[1]).slice(0, k).map(ele => +ele[0])
};