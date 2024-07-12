function dataIns() {
  let data = [23, 6, 534, 876, 3, 53, 97, 3, 35];

  let position = 3;

  for (let i = data.length - 1; i >= 0; i--) {
    if (i >= position) {
      data[i + 1] = data[i];
      if (i == position) {
        data[i] = 45;
      }
    }
  }
  return data;
}

console.log(dataIns());
