/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let lca = root;
    if (p.val < lca.val && q.val < lca.val){
        return lowestCommonAncestor(root.left, p, q);
    } else if (p.val > lca.val && q.val > lca.val){
        return lowestCommonAncestor(root.right, p, q);
    } 
    console.log(lca)
    return lca;
    // else if (p.value < lca.value && q.value > lca.value){
    //     return lca;
    // } else if (p.value > lca.value && q.value < lca.value){
    //     return lca;
    // } 
};