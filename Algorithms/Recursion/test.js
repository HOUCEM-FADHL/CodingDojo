function rSigma(num) {
    // Base case: if num is less than 1, return 0
    if (num < 1) {
        return 0;
    } else {
        // Recursive case: add num to the sum of integers from 1 to num-1
        console.log(Math.floor(num));
        return Math.floor(num) + rSigma(Math.floor(num) - 1);
    }
}

// Example usage:
console.log(rSigma(5));   // Output: 15 (1+2+3+4+5)
console.log(rSigma(2.5)); // Output: 3 (1+2)
console.log(rSigma(-1));  // Output: 0
