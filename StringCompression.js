// Q6 String Compression

function compressStr(str) {
    let compress = ''
    let count = 1
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++
        } else {
            compress += str[i] + count
            count = 1
        }
    }
    if (compress.length < str.length) {
        return compress
    } else {
        return str
    }
}
let str = "aabcccccaaa"
console.log(compressStr(str));
