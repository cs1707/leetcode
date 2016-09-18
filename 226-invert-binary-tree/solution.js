/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (!root) {
        return null
    }
    
    root.right = invertTree(root.left)
    root.left = invertTree(root.right)
    
    var temp = root.left
    root.left = root.right
    root.right = root.temp
   
    return root
};