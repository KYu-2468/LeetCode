/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    const merged = []
    intervals.sort((a, b) => a[0] - b[0]);
    
    let start = intervals[0][0];
    let end = intervals[0][1];
    
    for(let i = 0; i < intervals.length; i++) {
        let currentStart = intervals[i][0];
        let currentEnd = intervals[i][1];
        
        if(currentStart > end) {
            merged.push([start, end]);
            start = currentStart;
            end = currentEnd;
        } else {
            end = Math.max(end, currentEnd);
        }
        
        if(i === intervals.length - 1) {
            merged.push([start, end]);
        }
    }
    
    return merged;
};