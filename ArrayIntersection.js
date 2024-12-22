// Q3. Array Intersection

function intersectionCheck(arr, brr) {
    let set1 = new Set(arr)
    let set2 = new Set(brr)
    let inter = [];
    for (ele of set1) {
        if (set2.has(ele)) {
            inter.push(ele)
        }
    }
    return ele
}
let arr = [1,2,3,4,5]
let brr = [4,5,6,7,8]
console.log(intersectionCheck(arr, brr))
