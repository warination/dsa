const arr = [1, 2, 3, 4, 5, 6];

function slice(arr, start, end) {
  let newArr = [];
  for (let i = start; i < end; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}

const result = slice(arr, 0, 3);
console.log(result);
