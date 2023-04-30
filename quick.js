function quickSort(array) {
  if (array.length < 2) {
    return array;
  }
  let pivot = array[array.length - 1];
  let left_arr = [];
  let right_arr = [];
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) {
      left_arr.push(array[i]);
    } else {
      right_arr.push(array[i]);
    }
  }
  return [...quickSort(left_arr), pivot, ...quickSort(right_arr)];
}
const array = [5, 4, 8, 7, 12, 1];
console.log(quickSort(array));
