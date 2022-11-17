/**
 * @param {number} ax1
 * @param {number} ay1
 * @param {number} ax2
 * @param {number} ay2
 * @param {number} bx1
 * @param {number} by1
 * @param {number} bx2
 * @param {number} by2
 * @return {number}
 */
var computeArea = function(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
    const aArea = (ax2 - ax1) * (ay2 - ay1);
    const bArea = (bx2 - bx1) * (by2 - by1);
    
    const xOverlap = (bx2 - bx1) + (ax2 - ax1) - (Math.max(ax2, bx2) - Math.min(ax1, bx1));
    const yOverlap = (by2 - by1) + (ay2 - ay1) - (Math.max(ay2, by2) - Math.min(ay1, by1));
    
    if(xOverlap > 0 && yOverlap > 0) return aArea + bArea - (xOverlap * yOverlap);
    return aArea + bArea
};