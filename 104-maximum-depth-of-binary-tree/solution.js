/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    
    if (!root) {
        return 0
    }
    
    var num = 1
    travel(root, 1)
    
    return num
    
    function travel(root, level) {
        if(root && !root.left && !root.right) {
            num = Math.max(num, level)
            return
        }
        
        if (root.left) {
            travel(root.left, level + 1)
        }
        
        if (root.right) {
            travel(root.left, level + 1)
        }
    }
};

