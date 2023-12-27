function reverse(arr) {
    // Initialize an empty array to store reversed values
    var temp = [];

    // Loop through the original array in reverse order and push each element to the temporary array
    for (var i = arr.length - 1; i >= 0; i--) {
        temp.push(arr[i]);
    }

    // Loop through the original array and update each element with the reversed values
    for (var i = 0; i < arr.length; i++) {
        arr[i] = temp[i];
    }

    // Return the original array with reversed values
    return arr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]
