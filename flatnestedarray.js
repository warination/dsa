const nestedArray = [1, [2, [3, [4, [5]], 6], 7]];
const flatArray = nestedArray.reduce((acc, curr) => {
  return acc.concat(Array.isArray(curr) ? flattenArray(curr) : curr);
}, []);
console.log(flatArray); // Output: [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arr) {
  return arr.reduce((acc, curr) => {
    return acc.concat(Array.isArray(curr) ? flattenArray(curr) : curr);
  }, []);
}
