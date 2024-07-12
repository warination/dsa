const arr = [23, 56, 32, 77, 80, 99, 43, 12, 5, 64];

let position = 3;
for (let i = position; i < arr.length - 1; i++) {
  arr[i] = arr[i + 1];
}

arr.length = arr.length - 1;

console.log(arr);

// splice method
const arr2 = [23, 56, 32, 77, 80, 99, 43, 12, 5, 64];

arr2.forEach((element, i) => {
  if (position == i) {
    arr2.splice(i, 1);
  }
});

console.log(arr);
