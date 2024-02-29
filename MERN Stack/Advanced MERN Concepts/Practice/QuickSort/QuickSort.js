function hoarePartition(arr, low, high) {
  const pivot = arr[low];
  let left = low + 1;
  let right = high;

  while (true) {
    while (left <= right && arr[left] < pivot) {
      left++;
    }

    while (left <= right && arr[right] > pivot) {
      right--;
    }

    if (left <= right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
    } else {
      [arr[low], arr[right]] = [arr[right], arr[low]];
      return right;
    }
  }
}

function quicksort(arr, low, high) {
  if (low < high) {
    const pivotPosition = hoarePartition(arr, low, high);

    // Recursive calls on the partitions
    quicksort(arr, low, pivotPosition - 1);
    quicksort(arr, pivotPosition + 1, high);
  }
}

// Example usage:
const myArray = [29, 10, 14, 37, 13];
quicksort(myArray, 0, myArray.length - 1);
console.log(myArray);

// Bonus 1: Choosing the left-most value as the pivot could lead to worst-case scenarios if the input array is already sorted or nearly sorted. This is because the partition function will always result in one subarray with no elements and another with all the remaining elements. The time complexity in such cases becomes O(n^2) due to the unbalanced partitioning.

// Bonus 2: The average-case time complexity of quicksort is O(n log n), where n is the number of elements in the array. The worst-case time complexity is O(n^2), but this is unlikely to occur with a good pivot strategy.

// Bonus 3: Quicksort is called "quicksort" because, on average, it has a very fast execution time. The average-case time complexity is O(n log n), making it efficient for large datasets. The Big Omega (best-case) time complexity is also O(n log n), which occurs when the pivot choices consistently balance the subarrays. The Big Theta (average-case) time complexity is O(n log n) as well.
