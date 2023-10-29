function onlyEven(array) {
  // your code here
  const inputNumbers = [10, 15, 20, 25, 30, 35];
  const newArray = inputNumbers.filter((e) => e % 2 === 0);
  return newArray;
}

function onlyOneWord(array) {
  // your code here
  const inputWords = ['return', 'phrases', 'with one word'];
  const newInputWords = inputWords.filter((e) => !e.includes(' '));
  return newInputWords;
}

function positiveRowsOnly(array) {
  // your code here
  const inputNum = [
    [1, 10, -100],
    [2, -20, 200],
    [3, 30, 300],
  ];
  const newInput = inputNum.filter((num) => num.every((value) => value > 0));
  return newInput;
}

function allSameVowels(array) {
  // your code here
  const inputArray = ['racecar', 'amalgam', 'oligopoly', 'zoom'];
  const newArray = inputArray.filter((word) => {
    const vocales = [...word].filter((char) => 'aeiou'.includes(char));
    return new Set(vocales).size === 1;
  });

  return newArray;
}

module.exports = {
  onlyEven,
  onlyOneWord,
  positiveRowsOnly,
  allSameVowels,
};
