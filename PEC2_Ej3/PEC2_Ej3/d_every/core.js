// Check to see if all elements in an array
// are even numbers.

function allEven(input) {
  return input.every((number) => number <= 10);
}

// Check to see if all elements in an array
// are of the same type.

function allSameType(input) {
  return input.every((e) => typeof e === 'number');
}

// Check to see if every element in the matrix is
// an array and that every element in the array is
// greater than 0.

function positiveMatrix(input) {
  return input.every((num) => {
    return num.every((number) => number > 0);
  });
}

// Check that all items in an array are strings
// and that they all only contain the same vowels.

function allSameVowels(input) {
  const newVocals = input.every((vocal) => {
    const newArray = vocal
      .split('')
      .filter((e) => 'aeiouAEIUO'.includes(e))
      .join('');
    return new Set(newArray).size === 1;
  });

  return newVocals;
}

module.exports = {
  allEven,
  allSameType,
  positiveMatrix,
  allSameVowels,
};
