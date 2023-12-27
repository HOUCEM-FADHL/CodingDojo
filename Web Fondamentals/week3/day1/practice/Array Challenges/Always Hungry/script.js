function alwaysHungry(arr) {
    // Initialize a variable to count occurrences of "food"
    var food = 0;

    // Loop through each element in the array
    for (var i = 0; i < arr.length; i++) {
        // Check if the current element is equal to the string "food"
        if (arr[i] == "food") {
            console.log("yummy"); // If true, print "yummy"
            food++; // Increment the food count
        }
    }

    // Check if no occurrences of "food" were found
    if (food == 0) {
        console.log("I'm hungry"); // If true, print "I'm hungry"
    }
}

alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"
