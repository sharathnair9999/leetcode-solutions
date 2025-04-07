/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const map = new Map();
    for (const a of nums) {
        if (map.has(a)) {
            const prevCount = map.get(a)
            map.set(a, prevCount + 1)
        }
        else {
            map.set(a, 1)
        }
    };
    const freqMap = Array.from(map.entries()).sort((entryA, entryB) => entryB[1] - entryA[1]).map(entry => entry[0]).slice(0,k);
    return freqMap;
};