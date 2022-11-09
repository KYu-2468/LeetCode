
var StockSpanner = function() {
    this.array = [];
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    let count = 1;
    
    for(let i = this.array.length - 1; i >= 0; i--) {
        if(this.array[i] <= price) count++;
        else break;
    }
    this.array.push(price);
    return count;
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */