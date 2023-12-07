// Select all <span> elements and store them in the addlike variable
var addlike = document.querySelectorAll("span");

// Array to store initial like counts for each post
var likesArray = [9, 12, 9];

// Function to increment likes for a specific post
function increment(post) {
    // Check if the post parameter is equal to 1
    if (post == 1) {
        // Increment the like count for the first post in the array
        likesArray[0]++;
        // Update the inner text of the first span with the new like count
        addlike[0].innerText = likesArray[0];
    } 
    // Check if the post parameter is equal to 2
    else if (post == 2) {
        // Increment the like count for the second post in the array
        likesArray[1]++;
        // Update the inner text of the second span with the new like count
        addlike[1].innerText = likesArray[1];
    } 
    // Check if the post parameter is equal to 3
    else if (post == 3) {
        // Increment the like count for the third post in the array
        likesArray[2]++;
        // Update the inner text of the third span with the new like count
        addlike[2].innerText = likesArray[2];
    }
    // Note: If post is not 1, 2, or 3, nothing happens (no else statement provided)
}