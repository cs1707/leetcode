/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    var pre
    var current = head
    
    while (current) {
        if (current.val === val) {
            if (pre) {
                pre.next = current.next
            } else {
                head = current.next
            }
            
        } else {
            pre = current
        }
        current = current.next
    }
    return head
    
};