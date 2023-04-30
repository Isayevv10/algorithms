function binarySearch(arr, num) {
  let first = 0;
  let end = arr.length - 1;
  while (first <= end) {
    let mid = Math.floor((first + end) / 2);
    if (arr[mid] == num) {
      return num;
    } else if (arr[mid] < num) {
      first = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
}
console.log(binarySearch([2, 6, 8, 10, 12, 14], 14));
