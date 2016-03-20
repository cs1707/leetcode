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
    var sum = l1.val + l2.val
    l1 = l1.next
    l2 = l2.next
    var carry = Math.floor(sum / 10)
    var result = new ListNode(sum % 10)
    var current = result
    
    while(l1 != null || l2 != null) {
        l1 = getListNode(l1)
        l2 = getListNode(l2)
    
        sum = carry + l1.val + l2.val
        
        var node = new ListNode(sum % 10)
        current.next = node
        current = current.next
        l1 = l1.next
        l2 = l2.next
        
        carry = Math.floor(sum / 10)
    }
    
    if(carry > 0) {
        current.next = new ListNode(carry)
    }
    return result
};

function getListNode(listNode) {
    
    if(listNode) {
        return listNode
    }
    
    return new ListNode(0)
}

