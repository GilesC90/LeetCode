/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

/**
    Runtime: 136 ms, faster than 61.77% of JavaScript online submissions for Add Two Numbers.
    Memory Usage: 46.8 MB, less than 15.00% of JavaScript online submissions for Add Two Numbers.
 */

var addTwoNumbers = function(l1, l2) {
    let head = new ListNode();
        let curr = head;
        let extra = 0;
        while (l1 || l2) {
            let l1Val = l1 ? l1.val : 0;
            let l2Val = l2 ? l2.val : 0;
            let sum = l1Val + l2Val + extra
            extra = sum > 9 ? 1 : 0;
            if (l1) {
                l1.val = sum % 10;
                curr.next = l1;
            } else {
                l2.val = sum % 10;
                curr.next = l2;
            }
            curr = curr.next;
            if (l1) l1 = l1.next;
            if (l2) l2 = l2.next;
        }
        if (extra > 0) {
            curr.next = new ListNode(1);
        }
        return head.next;
    };

/** First Try
 * - Didn't work because logic flawed
 * - Input: [1, 0, 0 ,1], [3, 4]
 * - Expected Output: [1, 0, 3, 5]
 * - Actual Output: [4, 4, 0, 1] 
 */

var addTwoNumbers = function(l1, l2) {
    let sum = 0;
    let m = 0;
    let runner = l1;
    while (runner) {
        sum += (runner.val * Math.pow(10, m));
        runner = runner.next;
        m++;
    }
    console.log(sum);
    runner = l2, m = 0;
    while (runner) {
        sum += (runner.val * Math.pow(10, m));
        runner = runner.next;
        m++;
    }
    sum = sum.toString().split('').reverse();
    let l3 = new ListNode(sum[0], null);
    runner = l3;
    for (let i = 1; i < sum.length; i++) {
        runner.next = new ListNode(sum[i], null);
        runner = runner.next;
    }
    return l3;
};

