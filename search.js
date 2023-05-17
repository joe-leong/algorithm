/**
 * 顺序查找
 */
function sequenceSearch(arr = [], target) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}
console.log(sequenceSearch([5, 6, 78, 8, 4, 243, 45643], 243));

/**
 * 二分查找
 */
function midSearch(arr = [], target) {
  let newArr = arr.sort((a, b) => {
    return a - b;
  });
  let low = 0;
  let high = newArr.length - 1;
  let mid = null;
  while (low <= high) {
    mid = (high + low) >> 1;
    if (newArr[mid] > target) {
      high = mid - 1;
    } else if (newArr[mid] < target) {
      low = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
}
console.log(midSearch([5, 6, 78, 8, 4, 243, 45643], 243));
