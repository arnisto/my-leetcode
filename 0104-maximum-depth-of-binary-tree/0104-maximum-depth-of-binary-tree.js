var maxDepth = function(root) {
    if (!root) {
        return 0;
    }
    
    // Recursive calls to find the depth of child nodes
    const leftHeight = maxDepth(root.left);
    const rightHeight = maxDepth(root.right);
    
    // Return the max of the two plus 1 for the current node
    return Math.max(leftHeight, rightHeight) + 1;
};