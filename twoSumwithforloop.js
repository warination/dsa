function twoSum(arr, target) {
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    let complement = target - arr[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    } else {
      map.set(arr[i], i);
    }
  }
}

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === target) {
//         return [i, j];
//       }
//     }
//   }
//   return [];
// }

console.log(twoSum([5, 6, 8, 1, 12, 22, 18, 36, 25, 11, 9, 20], 40));
