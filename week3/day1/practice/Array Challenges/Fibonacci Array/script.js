function fibonacciArray(n) {
    // Initialize an array with the starting values [0, 1]
    var fibArr = [0, 1];

    // Loop to generate Fibonacci numbers up to the nth element
    for (var i = fibArr.length; i < n; i++) {
        // Add the sum of the last two elements to extend the Fibonacci sequence
        fibArr.push(fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2]);
    }

    // Return the generated Fibonacci array
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
