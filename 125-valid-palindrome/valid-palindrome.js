/**
 * @param {string} s
 * @return {boolean}
 */

var isAlphaNum = function (s) {
    return ((s.toLowerCase() >= 'a' && s.toLowerCase() <= 'z') || (s >= '0' && s <= '9'))
}

var isPalindrome = function (s) {

    let i = 0, j = s.length - 1;
    while (i < j) {
        while (i < j && !isAlphaNum(s[i])) {
            i++;
        }
        while (j > i && !isAlphaNum(s[j])) {
            j--;
        }
        if (s[i].toLowerCase() !== s[j].toLowerCase()) {
            return false
        }
        i++;
        j--;
    }
    return true
};