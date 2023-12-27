const mergeSort = (arr) => {
  if (arr.length === 1) return arr; // can not be sorted further

  // split arr in half, and sort 2 halves recursively
  const midIndex = Math.floor(arr.length / 2);
  let leftArr = mergeSort(arr.slice(0, midIndex));
  let rightArr = mergeSort(arr.slice(midIndex, arr.length));

  // merge the two sorted arrays into a single sorted array
  const sortedArr = [];
  while (leftArr.length > 0 && rightArr.length > 0) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr[0]);
      leftArr = leftArr.slice(1, leftArr.length); // remove the first item
    } else {
      sortedArr.push(rightArr[0]);
      rightArr = rightArr.slice(1, rightArr.length);
    }
  }

  // merge left over items (if any) from any one remaining array
  if (leftArr.length > 0 && rightArr.length === 0) sortedArr.push(...leftArr);
  if (rightArr.length > 0 && leftArr.length === 0) sortedArr.push(...rightArr);

  return sortedArr;
};

console.log(mergeSort([200, -1, 7, 1, 3, 6, 2, 5, 4, 9, 377, 499, 66]));
