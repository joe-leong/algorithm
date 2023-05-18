/**
 * 排序算法
 */

/**
 * 冒泡排序
 */
function bubbleSort(arr = []) {
  let $arr = [...arr];
  let len = $arr.length - 1;
  let temp = $arr[0];
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i; j++) {
      if ($arr[j] > $arr[j + 1]) {
        temp = $arr[j];
        $arr[j] = $arr[j + 1];
        $arr[j + 1] = temp;
      }
    }
  }
  return $arr;
}
console.log(bubbleSort([8, 7, 6, 5, 4, 3, 2, 1]));

/**
 * 插入排序
 */
function insertSort(arr = []) {
  let $arr = [...arr];
  let len = $arr.length;
  for (let i = 0; i < len; i++) {
    let j = i;
    while (j >= 0 && $arr[j] < $arr[j - 1]) {
      let temp = $arr[j];
      $arr[j] = $arr[j - 1];
      $arr[j - 1] = temp;
      j--;
    }
  }
  return $arr;
}
console.log(insertSort([8, 7, 6, 5, 4, 3, 2, 1]));

/**
 * 快速排序
 */
function quickSort(arr = [], left, right) {
  if (left >= right) {
    return;
  }
  let privot = partition(arr, left, right);
  quickSort(arr, left, privot - 1);
  quickSort(arr, privot + 1, right);
}
function partition(arr, left, right) {
  let base = arr[left];
  let index = left;
  while (left < right) {
    while (left < right) {
      if (arr[right] < base) {
        arr[left] = arr[right];
        index = right;
        left++;
        break;
      }
      right--;
    }
    while (left < right) {
      if (arr[left] > base) {
        arr[right] = arr[left];
        index = left;
        right--;
        break;
      }
      left++;
    }
  }
  arr[index] = base;
  return index;
}
let a = [8, 7, 6, 5, 4, 3, 2, 1];
quickSort(a, 0, 8);
console.log(a);

/**
 * 归并排序
 */
function mergeSort(arr = []) {
  if (arr.length < 2) {
    return arr;
  }
  let mid = arr.length >> 1;
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid, arr.length));
  return mergeSortAssist(left, right);
}
function mergeSortAssist(listLeft, listRight) {
  let result = [];
  while (listLeft.length && listRight.length) {
    if (listLeft[0] > listRight[0]) {
      result.push(listRight.shift());
    } else {
      result.push(listLeft.shift());
    }
  }
  result.push(...listLeft, ...listRight);
  return result;
}
console.log(mergeSort([5, 4, 7, 2, 9, 1, 6]));
