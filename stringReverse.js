function stringReverse(str) {
  let reverseString = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reverseString += str[i];
  }
  console.log(reverseString);
  return reverseString;
}

stringReverse('doodledoodle');
// space complexity= o(n)
// timecomplexity = o(n)
