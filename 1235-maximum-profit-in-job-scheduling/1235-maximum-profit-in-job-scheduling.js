/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
var jobScheduling = function(startTime, endTime, profit) {
    const jobs = new Array(startTime.length);
    for (let i = 0; i < startTime.length; i++) {
        jobs[i] = [startTime[i], endTime[i], profit[i]];
    }
    
    jobs.sort((a, b) => a[1] - b[1] || a[0] - b[0]);
    const dp = [jobs[0][2]];
    for (let i = 1; i < jobs.length; i++) {
        const [s, e, p] = jobs[i];
        
        if (s >= jobs[i - 1][1]) {
            dp.push(dp[dp.length - 1] + p);
            continue;
        } else if (s < jobs[0][1]) {
            dp.push(Math.max(p, dp[dp.length - 1]));
            continue;
        }
        let left = 0, right = i - 1;
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (s < jobs[mid][1]) {
                right = mid - 1;
            } else if (left === mid){
                break;
            } else {
                left = mid;
            }
        }
        if (s >= jobs[right][1]) left = right;
        // console.log(i, left, right, dp)
        dp.push(Math.max(dp[dp.length - 1], dp[left] + p));
    }
    // console.log(dp)
    return dp[dp.length - 1];
};