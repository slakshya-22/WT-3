// Q4. String Palindrome
function isPalindrome(str) {
    function alphaNumeric(char) {
        const lower = char.toLowerCase()
        return (lower >= 'a' && lower <= 'z') || (lower >= '0' && lower <= '9')
    }
    const newArr = []
    for (let i = 0; i < str.length; i++) {
        if (alphaNumeric(str[i])) {
            newArr.push(str[i].toLowerCase())   //check
        }   
    }
    let l = 0
    let r = newArr.length - 1
    while (l < r) {
        if (newArr[l] !== newArr[r]) {
            return false
        }
        l++
        r--
    }
    return true
}
console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome("Hello World"))
console.log(isPalindrome(".a."))