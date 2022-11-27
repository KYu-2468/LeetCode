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
const Y = 'Y';
const N = 'N';
var bestClosingTime = function(customers) {
    const dpy = new Array(customers.length).fill(-1);
    const dpn = new Array(customers.length).fill(-1);
    for (let i = 0; i < customers.length; ++i) {
        const v = customers[i];
        const isYCost = v === Y ? 0 : 1;
        const isNCost = 1 - isYCost;
        // case Y
        dpy[i] = (i == 0 ? 0 : dpy[i-1]) + isYCost;
        // casy N
        dpn[i] = (i == 0 ? 0 : Math.min(dpy[i-1], dpn[i-1])) + isNCost;
    }
    if (dpn[customers.length - 1] > dpy[customers.length - 1] ) {
        return customers.length;
    }

    let res = 0;
    for (let i = customers.length - 1; i > -1; --i) {
        if (dpn[i] < dpy[i]) {
            if (i === 0 || dpn[i - 1] > dpy[i - 1]) {
                res = i;
                break;
            }
        }
    }
    return res;
};