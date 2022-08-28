/**
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */
var garbageCollection = function(garbage, travel) {
    let total = 0;
    
    garbage = garbage.map(house => toMap(house)); // n
    toTotalTimeToTravelToHouse(travel);  // n - 1
    
    total += checkTravelTimeToLastHouse(garbage, travel, 'M'); // n
    total += checkTravelTimeToLastHouse(garbage, travel, 'P'); // n
    total += checkTravelTimeToLastHouse(garbage, travel, 'G');  // n
    
    total += collectGarbage(garbage, 'M'); // n
    total += collectGarbage(garbage, 'P'); // n
    total += collectGarbage(garbage, 'G');  // n
    return total;
};

const collectGarbage = (garbage, type) => {
    let total = 0;
    
    for(let i = 0; i < garbage.length; i++) {
        if(garbage[i][type]) {
            total += garbage[i][type];
        }
    }
    
    return total;
}


const checkTravelTimeToLastHouse = (garbage, travel, type) => {
    
    for(let i = garbage.length - 1; i > 0; i--) {
        if(garbage[i][type]) {
            return travel[i - 1];
        }
    }
    
    return 0;
}

const toTotalTimeToTravelToHouse = (travel) => {
    
    for(let i = 1; i < travel.length; i++) {
        travel[i] += travel[i - 1];
    }
}


const toMap = (str) => {
    const map = {};
    
    for(let i = 0; i < str.length; i++) {
        
        if(map[str.charAt(i)]) {
            
            map[str.charAt(i)]++;
            
        } else {
            
            map[str.charAt(i)] = 1;
        }
    }
    
    return map;
}