let arr = [15, 36, 54, 78, 45, 22, 10];

let arr2 = [24, 66, 89, 77, 14, 46, 90];

let arr3 = [];

for (let i = 0; i < arr.length; i++) {
  arr3[i] = arr[i];
}

for (let i = 0; i < arr2.length; i++) {
  arr3[arr.length + i] = arr2[i];
}

console.log(arr3);

let arr4 = [15, 36, 54, 78, 45, 22, 10];

let arr5 = [24, 66, 89, 77, 14, 46, 90];

let arr6 = [];

for (let i = 0; i < arr4.length; i++) {
  arr6.push(arr4[i]);
}

for (let i = 0; i < arr5.length; i++) {
  arr6.push(arr5[i]);
}

console.log(arr6);
