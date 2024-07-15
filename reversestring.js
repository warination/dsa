const reverseString = (str) => {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
};
console.log(reverseString("hello"));

const reverseStr = (str) => {
  let newStr = "";
  newStr = str.split("").reverse().join("");
  return newStr;
};

console.log(reverseStr("hello world"));
