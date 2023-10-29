function multiplyBy10(array) {
  return array.map((num) => {
    return num * 10;
  });
}

function shiftRight(array) {
  // your code here
  const arrayInput = [{ name: '' }, 10, 'left-side'];
  const desplazado = arrayInput.map((e, index, array) => {
    const newIndex = (index - 1 + array.length) % array.length;
    return array[newIndex];
  });

  return desplazado;
}

function onlyVowels(array) {
  // your code here
  const input = ['average', 'exceptional', 'amazing'];
  const non_vowels = input.map((word) => {
    const newWord = word
      .split('')
      .filter((e) => 'aeiouAEIOU'.includes(e))
      .join('');
    return newWord;
  });
  return non_vowels;
}

function doubleMatrix(array) {
  // your code here
  const input = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  const newArray = input.map((fila) => {
    return fila.map((e) => {
      return e * 2;
    });
  });

  return newArray;
}

module.exports = {
  multiplyBy10,
  shiftRight,
  onlyVowels,
  doubleMatrix,
};
