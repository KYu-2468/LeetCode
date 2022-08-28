/**
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */

var charCount = function(word) {
    const ans = {G: 0, M: 0, P: 0};
    for (const ch of word) {
        ans[ch]++;
    }
    return ans;
}

var garbageCollection = function(garbage, travel) {
    const trucks = {G: 0, M: 0, P: 0};
    let time = 0;
    
    for (let i = 0; i < garbage.length; i++) {
        const freq = charCount(garbage[i]);
        Object.keys(trucks).forEach(t => {
            time += freq[t];
            if (freq[t]) {
                for (let j = trucks[t] + 1; j <= i; j++) {
                    trucks[t]++;
                    time += travel[j - 1];
                }
            }
        });
    }
    
    return time;
};

// var garbageCollection = function(garbage, travel) {
//     let total = 0;
    
//     garbage = garbage.map(house => toMap(house)); // n
//     toTotalTimeToTravelToHouse(travel);  // n - 1
    
//     total += checkTravelTimeToLastHouse(garbage, travel, 'M'); // n
//     total += checkTravelTimeToLastHouse(garbage, travel, 'P'); // n
//     total += checkTravelTimeToLastHouse(garbage, travel, 'G');  // n
    
//     total += collectGarbage(garbage, 'M'); // n
//     total += collectGarbage(garbage, 'P'); // n
//     total += collectGarbage(garbage, 'G');  // n
//     return total;
// };

// const collectGarbage = (garbage, type) => {
//     let total = 0;
    
//     for(let i = 0; i < garbage.length; i++) {
//         if(garbage[i][type]) {
//             total += garbage[i][type];
//         }
//     }
    
//     return total;
// }


// const checkTravelTimeToLastHouse = (garbage, travel, type) => {
    
//     for(let i = garbage.length - 1; i > 0; i--) {
//         if(garbage[i][type]) {
//             return travel[i - 1];
//         }
//     }
    
//     return 0;
// }

// const toTotalTimeToTravelToHouse = (travel) => {
    
//     for(let i = 1; i < travel.length; i++) {
//         travel[i] += travel[i - 1];
//     }
// }


// const toMap = (str) => {
//     const map = {};
    
//     for(let i = 0; i < str.length; i++) {
        
//         if(map[str.charAt(i)]) {
            
//             map[str.charAt(i)]++;
            
//         } else {
            
//             map[str.charAt(i)] = 1;
//         }
//     }
    
//     return map;
// }