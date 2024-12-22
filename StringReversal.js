// Q1. String Reversal

function reverseStr(str) {
    let reversed = ''
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]
    }
    return reversed
}
let str1 = "Geekster"
console.log(reverseStr(str1))
