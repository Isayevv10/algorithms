function selectionSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    let smallest = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[smallest]) {
        smallest = j;
      }
    }
    [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
  }
  return arr;
}
console.log(selectionSort([2, 9, 17, 5, 12, 1]));
