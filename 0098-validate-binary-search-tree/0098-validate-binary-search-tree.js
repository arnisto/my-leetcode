var isValidBST = function(root) {
    // Helper function to track the valid range
    const validate = (node, min, max) => {
        // An empty tree/leaf is valid
        if (!node) return true;

        // The current node's value must be strictly within the min and max
        if ((min !== null && node.val <= min) || (max !== null && node.val >= max)) {
            return false;
        }

        // When going left, the current node becomes the new maximum
        // When going right, the current node becomes the new minimum
        return validate(node.left, min, node.val) && validate(node.right, node.val, max);
    };

    return validate(root, null, null);
};