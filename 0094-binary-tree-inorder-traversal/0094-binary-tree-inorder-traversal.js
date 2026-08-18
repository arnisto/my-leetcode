var inorderTraversal = function(root) {
    const result = [];
    const stack = [];
    let current = root;

    while (current || stack.length > 0) {
        // 1. Traverse all the way to the leftmost node
        while (current) {
            stack.push(current);
            current = current.left;
        }

        // 2. Pop the last node (leftmost unvisited node)
        current = stack.pop();
        result.push(current.val);

        // 3. Move to the right subtree
        current = current.right;
    }

    return result;
};