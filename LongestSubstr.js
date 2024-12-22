// Q8. Longest Substring

function longestStr(str) {
    let charSet = new Set()
    let l = 0
    let maxLen = 0
    for (let r = 0; r < str.length; r++) {
        while (charSet.has(str[r])) {
            charSet.delete(str[l])
            l++
        }
        charSet.add(str[r])
        maxLen = Math.max(maxLen, r - l + 1)
    }
    return maxLen
}
let str = "abcabcbb"
console.log(longestStr(str));
