const pallindrome = (item) => {
  let str = item.toString();
  let numReverse = str.split("").numReverseerse().join("");
  if (str === numReverse) {
    return true;
  } else {
    return false;
  }
};

console.log(pallindrome("abba"));

console.log(pallindrome(121424121));

const pallindromeNum = (num) => {
  let numCopy = num;
  let numReverse = 0;
  while (numCopy > 0) {
    numReverse = numReverse * 10 + (numCopy % 10);
    numCopy = Math.floor(numCopy / 10);
  }
  if (num === numReverse) {
    return true;
  } else {
    return false;
  }
};
