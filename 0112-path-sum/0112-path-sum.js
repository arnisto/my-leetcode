var hasPathSum = function(root, targetSum) {
    // Base case: empty tree/branch has no path
    if (!root) return false;

    // Check if current node is a leaf
    if (!root.left && !root.right) {
        return root.val === targetSum;
    }

    // Subtract current value and check subtrees recursively
    const remainingSum = targetSum - root.val;
    return hasPathSum(root.left, remainingSum) || hasPathSum(root.right, remainingSum);
};