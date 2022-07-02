/**
 * @param {arr[]} sorted array.
 * @return {result} number
 */

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Linear Search
function linearSearch(arr, elem) {
  for (let i = 0; i < arr.length; i++) {
    // loop through array
    if (arr[i] === elem) {
      // i is elem
      return i; // returns the index
    }
  }
  return -1; // returns -1 on fail
}

// console.log(linearSearch(arr, 1));

// Binary Search
function binarySearch(sortedArray, key) {
  let start = 0; // start of array
  let end = sortedArray.length - 1; // end of array

  while (start <= end) {
    // while we have start and end
    let middle = Math.floor((start + end) / 2); // get the average and round up to nearest whole number

    if (sortedArray[middle] === key) {
      // key is the average
      return middle; // found the key
    } else if (sortedArray[middle] < key) {
      start = middle + 1; // search to the right
    } else {
      end = middle - 1; // search to the left
    }
  }
  return -1; // key wasn't found
}

// console.log(binarySearch(arr, 3));
