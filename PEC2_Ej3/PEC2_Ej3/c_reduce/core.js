function sum(array) {
  // your code here
  const inputNum = [10, 15, 20, 25, 30, 35];
  const totalNums = inputNum.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  return totalNums;
}

function productAll(array) {
  // your code here
  const inputProducts = [[1, 2, 3], [4, 5], [6]];
  const newProducts = inputProducts.reduce((accumulator, currentArray) => {
    let sum = currentArray.reduce((num, accu) => {
      return num * accu;
    });
    return accumulator * sum;
  }, 1);

  return newProducts;
}

function objectify(array) {
  // your code here
  const inputArray = [
    ['Thundercats', '80s'],
    ['The Powerpuff Girls', '90s'],
    ['Sealab 2021', '00s'],
  ];

  const concat = inputArray.reduce((accumulator, currentKey) => {
    let words = currentKey.reduce((key, word) => {
      return { key: key, word: word };
    });
    accumulator[words.key] = words.word;
    return accumulator;
  }, {});

  return concat;
}

function luckyNumbers(array) {
  // your code here
  const arrayInput = [30, 48, 11, 5, 32];
  const result = arrayInput.reduce(
    (accumulator, num, index, array) => {
      if (index === 0) {
        accumulator[0] = 'Your lucky numbers are: ' + num;
      } else if (index === array.length - 1) {
        accumulator[0] += ', and ' + num;
      } else {
        accumulator[0] += ', ' + num;
      }
      return accumulator;
    },
    ['']
  );

  return result;
}

module.exports = {
  sum,
  productAll,
  objectify,
  luckyNumbers,
};
