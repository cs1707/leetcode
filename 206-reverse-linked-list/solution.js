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
    var node = head
    while (node) {
        if (node.next) {
            head = node.next
            head.next = node
            node.next = node.next.next
        }
        node = node.next
    }
    return head
};