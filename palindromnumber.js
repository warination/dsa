function palindromNumber1(num) {
  let numAsString = num.toString();
  let reversedNumAsString = numAsString.split("").reverse().join("");
  if (numAsString === reversedNumAsString) {
    console.log("true");
  } else {
    console.log("false");
  }
}
palindromNumber1(112353211);

function palindromNumber2(number) {
  let copyNum = number;
  let reversedNum = 0;
  while (copyNum > 0) {
    let lastDigit = copyNum % 10;
    reversedNum = reversedNum * 10 + lastDigit;
    copyNum = Math.floor(copyNum / 10);
  }
  return number == reversedNum;
}

console.log(palindromNumber2(2356532));
