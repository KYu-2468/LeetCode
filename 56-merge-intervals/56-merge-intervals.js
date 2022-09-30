/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    const result = [];
    intervals.sort((a, b) => a[0] - b[0]);
    
    result.push(intervals[0]);
    
    for(let i = 1; i < intervals.length; i++) {
        const lastInterval = result[result.length - 1];
        
        if(lastInterval[1] >= intervals[i][0]) {
            lastInterval[1] = Math.max(lastInterval[1], intervals[i][1]);
            continue;
        }
        
        result.push(intervals[i]);
    }
    
    return result;
};