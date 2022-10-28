/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    const result = [];
    intervals.push(newInterval);
    intervals.sort((a, b) => a[0] - b[0]);
    
    let interval = intervals[0];
    
    for(let i = 1; i < intervals.length; i++) {
        if(intervals[i][0] > interval[1]) {
            result.push(interval);
            interval = intervals[i];
        } else {
            interval[1] = Math.max(interval[1], intervals[i][1]);
        }
    }
    
    result.push(interval);
    
    return result;
};