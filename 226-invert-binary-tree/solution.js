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
    
    var temp = root.right
    root.right = invertTree(root.left)
    root.left = invertTree(temp)
    
    // var temp = root.left
    // root.left = root.right
    // root.right = temp
   
    return root
};