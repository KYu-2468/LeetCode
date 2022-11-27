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

function Bisect() {
    return { insort_right, insort_left, bisect_left, bisect_right }
    function insort_right(a, x, lo = 0, hi = null) {
        lo = bisect_right(a, x, lo, hi);
        a.splice(lo, 0, x);
    }
    function bisect_right(a, x, lo = 0, hi = null) { // > upper_bound
        if (lo < 0) throw new Error('lo must be non-negative');
        if (hi == null) hi = a.length;
        while (lo < hi) {
            let mid = parseInt((lo + hi) / 2);
            a[mid] > x ? hi = mid : lo = mid + 1;
        }
        return lo;
    }
    function insort_left(a, x, lo = 0, hi = null) {
        lo = bisect_left(a, x, lo, hi);
        a.splice(lo, 0, x);
    }
    function bisect_left(a, x, lo = 0, hi = null) { // >= lower_bound
        if (lo < 0) throw new Error('lo must be non-negative');
        if (hi == null) hi = a.length;
        while (lo < hi) {
            let mid = parseInt((lo + hi) / 2);
            a[mid] < x ? lo = mid + 1 : hi = mid;
        }
        return lo;
    }
}
////////////////////////////////////////////////////////////////

const bestClosingTime = (s) => {
    let n = s.length, a = [], b = [], d = [], bi = new Bisect();
    for (let i = 0; i < n; i++) s[i] == 'Y' ? a.push(i) : b.push(i);
    for (let j = 0; j <= n; j++) {
        let leftN = bi.bisect_right(b, j - 1);
        let rightY = a.length - bi.bisect_left(a, j);
        let cnt = leftN + rightY;
        d.push([cnt, j]);
    }
    d.sort((x, y) => {
        if (x[0] != y[0]) return x[0] - y[0]; // less penalty comes first
        return x[1] - y[1]; // same, comes smaller index
    })
    return d[0][1]
};