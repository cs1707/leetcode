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
        var next = node.next
        if (next) {
            next.next = node
            head = next
            node.next = node.next.next
        }
        node = node.next
    }
    return head
};