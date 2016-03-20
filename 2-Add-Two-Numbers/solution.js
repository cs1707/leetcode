/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var v1 = 0
    var v2 = 0
    var sum = 0
    var carry = 0
    var l3
    while(l1 != null || l2 != null) {
        if(l1) {
            v1 = l1.val
            l1 = l1.next
        }
        
        if(l2) {
            v2 = l2.val
            l2 = l2.next
        }
        
        sum = carry + v1 + v2
        var node = new ListNode(sum % 10)
        if(!l3) {
            l3 = node
        } else {
            l3.next = node
        }
        
        carry = Math.floor(sum / 10)
    }
    if(carry > 0) {
        l3.next = new ListNode(carry)
    }
    return l3
};

