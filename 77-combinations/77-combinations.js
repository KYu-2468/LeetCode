/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const combine = (n, k) => {
    const results = [];

    const backtrack = (arr, index) => {
        // base case
        
        if (arr.length === k) {
            results.push(arr);
            return;
        }
        
        if(index > n) return;
        
        backtrack([...arr], index + 1);
        backtrack([...arr, index], index + 1);
    }

    backtrack([], 1);
    return results;
}