/**
 * @param {number} x
 * @return {number}
 */

/**
    Runtime: 161 ms, faster than 12.54% of JavaScript online submissions for Reverse Integer.
    Memory Usage: 43.9 MB, less than 9.91% of JavaScript online submissions for Reverse Integer.
    Date: 2/3/2022
    Name: Bailey Kau
 */
var reverse = function(x) {
    let str = x.toString();
    let negative = false;
    if (str[0] == "-") {
        str = str.slice(1);
        negative = true;
    }
    let num = Number(str.split('').reverse().join(''));
    if (negative) { num *= -1 }
    if(num > (Math.pow(2, 31) - 1) || num < Math.pow(-2, 31)) { return 0 } else { return num }
};