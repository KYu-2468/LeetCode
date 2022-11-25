/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function(arr) {
    const mod = 10 ** 9 + 7;
    let sum = 0;
    const stack = [];
    let current = 0;
    for (let i = 0; i < arr.length; i++) {
        let count = 1;
        
        while (stack.length && arr[i] < stack[stack.length - 1][0]) {
            const [n, c] = stack.pop();
            count += c;
            current -= n * c;
        }
        // console.log(sum, current, count, stack)
        if (stack.length && arr[i] === stack[stack.length - 1][0]) {
            stack[stack.length - 1][1] += count;
        } else {
            stack.push([arr[i], count]);
        }
        
        current += (arr[i] * count) % mod;
        sum += current % mod;
        sum = sum % mod;
    }
    
    return sum % mod;
};