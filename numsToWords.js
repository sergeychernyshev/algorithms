function wordify(num) {
  let strnum = num.toString();
  let wordForNums = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "Six",
    "seven",
    "eight",
    "nine",
  ];
  let fullword = "";
  for (let i = 0; i < strnum.length; i++) {
    let numword = wordForNums[parseInt(strnum[i])];
    fullword += numword + " ";
  }
  console.log(fullword);
}
wordify(350432);
