// Q7. Array Sum 

function findPair(arr, trgt) {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    const ele = trgt - arr[i];
    // Check if the element exists in the map
    if (map.has(ele)) {
      return [ele, arr[i]];
    }
    // Add the current element to the map
    map.set(arr[i], i);
  }
  return [];
}
console.log(findPair([1, 2, 3, 4, 5], 7));
console.log(findPair([1, 2, 3], 7));
