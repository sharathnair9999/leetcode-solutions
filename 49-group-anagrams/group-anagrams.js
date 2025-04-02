/**
 * @param {string[]} strs
 * @return {string[][]}
 */

var getCurrSorted = (str) => str ? str.split("").sort().join("") : ""

var isAnagram = function (str1, str2) {
    if (str1.length !== str2.length) return false;
    return getCurrSorted(str1) === getCurrSorted(str2)
}

var groupAnagrams = function (strs) {
    // if (strs.filter(str => !!str).length === 0) return [[""]]
    const anagramMap = new Map()

    for (let i = 0; i < strs.length; i++) {
        const currSorted = getCurrSorted(strs[i])
        if (anagramMap.has(currSorted)) {
            const currAnagramMap = anagramMap.set(currSorted, [...anagramMap.get(currSorted), strs[i]])
        }
        else {
            anagramMap.set(currSorted, [strs[i]])
        }
    }
    return Array.from(anagramMap.values())
};