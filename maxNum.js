const arr = [4, 5, 8, 12, 56, 88, 74, 22];

const maxNum = (array) => {
  let max = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
};

console.log(maxNum(arr));
