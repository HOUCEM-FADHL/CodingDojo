function highPass(arr, cutoff) {
    // Initialize an empty array to store filtered values
    var filteredArr = [];

    // Loop through each element in the input array
    for (var i = 0; i < arr.length; i++) {
        // Check if the current element is greater than the cutoff value
        if (arr[i] > cutoff) {
            // If true, add the current element to the filtered array
            filteredArr.push(arr[i]);
        }
    }

    // Return the array containing values that passed the high-pass filter
    return filteredArr;
}

var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]
