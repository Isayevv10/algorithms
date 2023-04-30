function quickSort(array) {
  if (array.length < 2) {
    return array;
  }
  let pivot_element = array[array.length - 1];
  let left_sub_array = [];
  let right_sub_array = [];
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot_element) {
      left_sub_array.push(array[i]);
    } else {
      right_sub_array.push(array[i]);
    }
  }
  return [
    ...quickSort(left_sub_array),
    pivot_element,
    ...quickSort(right_sub_array),
  ];
}
const array = [5, 4, 8, 7, 12, 1];
console.log(quickSort(array));
