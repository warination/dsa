// spread operator

let arr = [1, 5, 8, 12, 16, 24, 48, 53, 56, 66, 77, 88, 99];

let arr2 = [4, 9, 15, 19, 25, 28, 33, 43];

let arr3 = [...arr, ...arr2];

console.log(arr3);

// while loop method

let arr4 = [];

let a1 = 0;
let a2 = 0;
let a4 = 0;

while (a1 < arr.length && a2 < arr2.length) {
  if (arr[a1] < arr2[a2]) {
    arr4[a4] = arr[a1];
    a1++;
  } else {
    arr4[a4] = arr2[a2];
    a2++;
  }
  a4++;
}

while (a1 < arr.length) {
  arr4[a4] = arr[a1];
  a1++;
  a4++;
}

while (a2 < arr2.length) {
  arr4[a4] = arr2[a2];
  a2++;
  a4++;
}

console.log(arr4);
