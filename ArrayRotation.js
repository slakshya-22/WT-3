// Q5. Array Rotation

function rotateArr(arr, k) {
  if (arr.length === 0) {
    return [];
  }
  // Normalize k in case it's greater than the array length
  k = k % arr.length;
  for (let i = 0; i < k; i++) {
    arr.unshift(arr.pop());
  }
  return arr;
}
console.log(rotateArr([1, 2, 3, 4, 5], 2));
console.log(rotateArr([1, 2, 3, 4, 5], 4));
console.log(rotateArr([], 2));
