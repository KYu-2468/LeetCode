/**
 * @param {string} customers
 * @return {number}
 */
// var bestClosingTime = function(customers) {
//     let min = 0;
//     let earliest = customers.length;
    
//     for (const str of customers) {
//         if (str === "N") min++;
//     }
//     let cur = min;
//     for (let i = customers.length - 1; i >= 0; i--) {
//         if (customers[i] === "Y") {
//             cur++;
//         } else {
//             cur--;
//         }
        
//         if (cur <= min) {
//             min = cur;
//             earliest = i;
//         }
//     }
    
//     return earliest;
// };
function bestClosingTime(customers) {
    let pen = 0;
	
	// Initialize with penalty for not closing the shop
    for (let i = 0; i < customers.length; i += 1) {
        const customer = customers.charAt(i) === "Y";
        
		// For each hour w/o customer, add penalty
        if (!customer) {
            pen += 1;
        }
    }
    
    let minPen = pen; // For tracking the minimal penalty
    let minH = customers.length; // Hour of minimal penalty so far
    
    for (let i = customers.length - 1; i >= 0; i -= 1) {
        const customer = customers.charAt(i) === "Y";
        
		// If we're closing the shop on this hour:
		
		// If there is a customer, apply penalty
        if (customer) {
            pen += 1;
		// Otherwise, compensate initial penalty
        } else {
            pen -= 1;
        }
        
		// Less than or equals to since we need to find the first closing hour
        if (pen <= minPen) {
            minPen = pen;
            minH = i;
        }
    }
    
    return minH;
}