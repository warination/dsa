//sort array function

const arr1 = [23, 65, 2, 13, 19, 9, 88, 56, 43, 55, 22, 45, 77, 72, 90, 51];
const arr2 = [57, 12, 8, 75, 66, 21, 74, 17, 18, 35, 6];

const sortArr = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

const sortArr1 = sortArr(arr1);
const sortArr2 = sortArr(arr2);

// merge array

let mergeArray = [];
let a1 = 0;
let a2 = 0;
let m1 = 0;

while (a1 < sortArr1.length && a2 < sortArr2.length) {
  if (arr1[a1] < arr2[a2]) {
    mergeArray[m1] = arr1[a1];
    a1++;
  } else {
    mergeArray[m1] = arr2[a2];
    a2++;
  }
  m1++;
}

while (a1 < sortArr1.length) {
  mergeArray[m1] = arr1[a1];
  a1++;
  m1++;
}

while (a2 < sortArr2.length) {
  mergeArray[m1] = arr2[a2];
  a2++;
  m1++;
}

console.log(mergeArray);
