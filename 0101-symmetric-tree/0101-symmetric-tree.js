var isSymmetric = function(root) {
    if (!root) return true;

    const isMirror = (t1, t2) => {
        // If both nodes are null, they are symmetric
        if (!t1 && !t2) return true;
        
        // If only one is null, or the values don't match, they aren't symmetric
        if (!t1 || !t2 || t1.val !== t2.val) return false;

        // Compare:
        // 1. Left child of T1 with Right child of T2
        // 2. Right child of T1 with Left child of T2
        return isMirror(t1.left, t2.right) && isMirror(t1.right, t2.left);
    };

    return isMirror(root.left, root.right);
};