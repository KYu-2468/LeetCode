/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minGroups = function(arr) {
    
    let rooms = 0;
    const startTime = [];
    const endTime = [];
    let s1 = 0;
    let e1 = 0;


    for (let i = 0; i < arr.length; i++) {
        startTime.push(arr[i][0])
        endTime.push(arr[i][1])
}


startTime.sort((a, b) => a-b); // [0, 0, 2]
    endTime.sort((a, b) => a-b); // [2, 2, 4]


    while (s1 < startTime.length) {
        if (startTime[s1] <= endTime[e1]) {
        rooms++;
        s1++;
}
    else {
    s1++;
    e1++
}
}

return rooms;

    
//     if(intervals.length <= 1) {
//         if(intervals.length === 1) {
//             return 1;
//         }
//         return 0;
//     }
    
//     const start = [];
//     const end = [];
//     let max = 1;
//     let current = 1;
    
//     for(let i = 0; i < intervals.length; i++) {
//         start.push(intervals[i][0]);
//         end.push(intervals[i][1]);
//     }
    
//     start.sort((a, b) => a - b);
//     end.sort((a, b) => a - b);
    
//     for(let startP = 1, endP = 0; startP < start.length; startP++) {
//         while(end[endP] < start[startP]) {
//             current--;
//             endP++;
//         }
        
//         current++;
//         max = Math.max(max, current);
//     }
    
    
//     return max;
};