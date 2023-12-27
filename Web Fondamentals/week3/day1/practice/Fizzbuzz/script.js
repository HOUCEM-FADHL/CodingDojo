// Loop through numbers from 1 to 100
for (var i = 1; i <= 100; i++) {
    // Check if the current number is divisible by both 3 and 5
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("Fizzbuzz"); // If true, print "Fizzbuzz"
    } else if (i % 3 == 0) {
        console.log("Fizz"); // If divisible by 3, print "Fizz"
    } else if (i % 5 == 0) {
        console.log("Buzz"); // If divisible by 5, print "Buzz"
    } else {
        console.log(i); // If not divisible by 3 or 5, print the number itself
    }
}
