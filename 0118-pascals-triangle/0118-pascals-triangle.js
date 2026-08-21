var generate = function(numRows) {
    const result = [];

    for (let i = 0; i < numRows; i++) {
        // Create an array of size (i + 1) filled with 1s
        const row = new Array(i + 1).fill(1);

        // Fill in middle elements (from index 1 to i - 1)
        for (let j = 1; j < i; j++) {
            const prevRow = result[i - 1];
            row[j] = prevRow[j - 1] + prevRow[j];
        }

        result.push(row);
    }

    return result;
};