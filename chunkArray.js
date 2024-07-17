const chunkArray = (arr, value) => {
  let chunkedArr = [];
  let index = 0;
  while (index < arr.length) {
    let chunk = arr.slice(index, index + value);
    chunkedArr.push(chunk);
    index += value;
  }
  return chunkedArr;
};

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
