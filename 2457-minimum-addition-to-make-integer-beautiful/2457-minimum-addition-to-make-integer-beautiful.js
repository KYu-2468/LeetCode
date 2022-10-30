/**
 * @param {number} n
 * @param {number} target
 * @return {number}
 */

// Helper function that sums the digits of input num
const sumDigit = (num) => {
    // convert num to string
    let sum = 0;
    
    while(num) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    
    return sum;
}

var makeIntegerBeautiful = function(n, target) {
    let initSum = sumDigit(n);
    let curSum = initSum;
    let totalAdd = "";
    
    if(initSum <= target) {
        return 0;
    }
    
    while(curSum > target) {
        // console.log("str: ", curSum, n, totalAdd);
        if(n % 10 === 0) {
            n /= 10;
            totalAdd = "0" + totalAdd;
            continue;
        }
        const added = 10 - (n % 10);
        totalAdd = added + totalAdd;
        n += added;
        n /= 10;
        curSum = sumDigit(n);
        // console.log("end: ", curSum, n, totalAdd);
    }
    
    return +totalAdd;
};