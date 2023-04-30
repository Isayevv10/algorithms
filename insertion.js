function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    for (let j = i - 1; j > -1; j--) {
      if (array[j + 1] < array[j]) {
        [array[j + 1], array[j]] = [array[j], array[j + 1]];
      }
    }
  }
  return array;
}
console.log(insertionSort([5, 4, 8, 3, 12, 1]));
