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
        for(let i = index; i <= n; i++) {
            backtrack([...arr, i], i + 1); 
        }
    }

    backtrack([], 1);
    return results;
}