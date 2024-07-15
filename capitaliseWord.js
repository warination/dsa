const capitalisedWord = (str) => {
  let strCap = str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1));
  return strCap.join(" ");
};

console.log(capitalisedWord("the quick brown fox jumps over the lazy dog"));
