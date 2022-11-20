/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    const stack = [];
    let num = "";
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === " ") continue;
        
        switch (s[i]) {
            case ")":
                stack.push(num);
                num = "";
                let stack1 = [];
                while (true) {
                    const p = stack.pop();
                    if (p === "(") {
                        stack1.reverse();
                        num = evaluate(stack1);
                        break;
                    }
                    stack1.push(p);
                }
                
                break;
            case "(":
                if (num === "-") {
                    stack.push(num);
                    num = "";
                }
                stack.push(s[i]);
                break;
            case "+":
                stack.push(num);
                num = "";
                stack.push(s[i]);
                break;
            case "-":
                if (num === "") {
                    num = s[i];
                } else {
                    stack.push(num);
                    num = "";
                    stack.push(s[i]);
                }
                break;
            default:
                num = num + s[i];
                break;
        }
    }
    if (num !== "") stack.push(num);
    console.log(stack);
    return +evaluate(stack);
};

function evaluate(arr) {
    let num = 0;
    if (arr[0] === '-') {
        arr[1] = -(+arr[1]);
        arr.shift();
    }
    
    for (let i = 1; i < arr.length; i += 2) {
        if (arr[i] === "+") {
            num += +arr[i + 1];
        } else {
            num -= +arr[i + 1];
        }
    }
    num += +arr[0];
    console.log(arr, num)
    return num + "";
}