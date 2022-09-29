/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function(x, y, points) {
    const getDistance = (loc1) => {
        return Math.abs(loc1[0] - x) + Math.abs(loc1[1] - y);
    }
    
    let smallestDistance = Number.MAX_VALUE;
    let smallestIndex = -1;
    
    for(let i = 0; i < points.length; i++) {
        const [curX, curY] = points[i];
        if(curX !== x && curY !== y) continue;
        
        const distance = getDistance(points[i]);
        
        if(distance < smallestDistance) {
            smallestDistance = distance;
            smallestIndex = i;
        }
    }
    
    return smallestIndex;
};