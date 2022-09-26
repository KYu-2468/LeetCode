/**
 * @param {string} homepage
 */
var BrowserHistory = function(homepage) {
    this.history = [homepage];
    this.forwardHistory = [];
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
    this.history.push(url);
    this.forwardHistory = [];
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
    while(this.history.length > 1 && steps) {
        this.forwardHistory.push(this.history.pop());
        steps--;
    }
    
    return this.history[this.history.length - 1];
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
    while(this.forwardHistory.length && steps) {
        this.history.push(this.forwardHistory.pop());
        steps--;
    }
    
    return this.history[this.history.length - 1];
};

/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */