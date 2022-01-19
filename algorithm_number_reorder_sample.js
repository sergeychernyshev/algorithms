let inputArray = [12, 12, 34, 56, 7, 4, 8389, 345, 65, 2];

function sortSmallToLarge(input) {
  let output = [];
  input.forEach((element) => {
    for (let i = 0; i < output.length; i++) {
      if (element <= output[i]) {
        //place before
        output.splice(i, 0, element);
        return;
      }
    }
    output.push(element);
  });
  return output;
}

console.log(sortSmallToLarge(inputArray));
console.log(
  inputArray.sort(function (a, b) {
    return a - b;
  })
);
