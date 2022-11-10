
var StockSpanner = function() {
    this.stack = [];
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    let days = 1;
    while(this.stack.length && price >= this.stack[this.stack.length - 1][0]) {
        days += this.stack.pop()[1];
    }
    this.stack.push([price, days]);
    return days
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */