/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    var pre = null
    var curr = head
    while (curr) {
        var next = curr.next
        curr.next = pre
        pre = curr
        curr = next
    }
    return pre
};