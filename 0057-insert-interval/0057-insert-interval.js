/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    if(intervals.length === 0) {
        return [newInterval];
    }
    
    const result = [];
    let set = false;
    
    if(newInterval[0] <= intervals[0][0]) {
        set = true;
        intervals.unshift(newInterval);
    } else if(newInterval[0] > intervals[intervals.length - 1][0]) {
        set = true;
        intervals.push(newInterval);
    }
    
    for(let i = 0; !set && i < intervals.length; i++) {
        if(intervals[i][0] <= newInterval[0] && newInterval[0] <= intervals[i + 1][0] ) {
            intervals.splice(i + 1, 0, newInterval);
            break;
        }
    }
    
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