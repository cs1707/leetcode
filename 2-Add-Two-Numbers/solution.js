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
    var current
    
    while(l1 != null || l2 != null) {
        l1 = getListNode(l1)
        l2 = getListNode(l2)
        
        v1 = l1.val
        l1 = l1.next
        
        v2 = l2.val
        l2 = l2.next
        
        sum = carry + v1 + v2
        var node = new ListNode(sum % 10)
        if(current) {
            current.next = node
            current = current.next
        } else {
            current = node
            l3 = current
        }
        
        carry = Math.floor(sum / 10)
    }
    
    if(carry > 0) {
        current.next = new ListNode(carry)
    }
    return l3
};

function getListNode(listNode) {
    
    if(listNode) {
        return listNode
    }
    
    return new ListNode(0)
}

