/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        const results = new Array(functions.length);
        let resolvedCount = 0;

        // Handle the edge case of an empty array immediately
        if (functions.length === 0) {
            resolve(results);
            return;
        }

        functions.forEach((fn, index) => {
            // Execute the function to get a promise
            fn()
                .then((val) => {
                    results[index] = val;
                    resolvedCount++;

                    // If all promises are done, resolve with the full array
                    if (resolvedCount === functions.length) {
                        resolve(results);
                    }
                })
                .catch((err) => {
                    // If any single promise fails, the whole promiseAll fails
                    reject(err);
                });
        });
    });
};