/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    coordinates.sort((a, b) => a[0] - b[0])
    
    const getSlope = (cord) => {
        if(cord[0] == 0 && coordinates[0][0] === 0) return Infinity;
        return (cord[1] - coordinates[0][1]) / (cord[0] - coordinates[0][0]);
    }
    
    const originalSlope = getSlope(coordinates[1]);
    
    for(let i = 2; i < coordinates.length; i++) {
        const slope = getSlope(coordinates[i]);
        
        if(slope !== originalSlope) return false;
    }
    
    return true;
};