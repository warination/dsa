function numberOfDigit(num) {
  let count = 0;
  num = Math.abs(num);

  do {
    count++;
    num = Math.floor(num / 10);
  } while (num > 0);

  return count;
}

console.log(numberOfDigit(45874));
