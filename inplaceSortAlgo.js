let inputList = [12, 34, 3];

function sortInPlace(input) {
  let occured = false;
  for (let i = 0; i < input.length - 1; i++) {
    if (input[i] > input[i + 1]) {
      let limbo = input[i];
      input[i] = input[i + 1];
      input[i + 1] = limbo;
      occured = true;
    }
  }
  if (occured) {
    sortInPlace(input);
  }
  return input;
}

// re written with while loop

function sortInPlace2(input) {
  let repeat = true;
  while (repeat) {
    repeat = false;
    for (let i = 0; i < input.length - 1; i++) {
      if (input[i] > input[i + 1]) {
        let limbo = input[i];
        input[i] = input[i + 1];
        input[i + 1] = limbo;
        repeat = true;
      }
    }
  }
  return input;
}

//console.log(sortInPlace(inputList));
console.log(sortInPlace2(inputList));
