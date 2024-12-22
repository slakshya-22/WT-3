// Q2. ANAGRAM CHECK 

function isAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    let count = {}
    for (let char of str1) {
        count[char] = (count[char] || 0) + 1;
    }
    for (let char of str2) {
        if (!count[char]) {
            return false
        }
        count[char]--
    }
    return true
}
let str1 = "silent"
let str2 = "listen"
console.log(isAnagram(str1, str2));
