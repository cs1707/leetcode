/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if (p != null && q != null) {
        return p.val == q.val && isSameTree(p.right, q.right) && isSameTree(p.left, q.left)
    }
    return p == q
    
};