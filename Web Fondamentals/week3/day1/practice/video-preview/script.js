// Getting the video element with id "codevideo"
var x = document.getElementById("codevideo");

// Function to play the video and mute it
function playvid() {
    x.play();       // Play the video
    x.muted = true; // Mute the video
}

// Function to pause the video
function pausevid() {
    x.pause();      // Pause the video
}

// // Function to play the provided HTML element (assumed to be a video element)
// function play(element) {
//     element.play(); // Invoking the play method to start playing the video
// }

// // Function to pause the provided HTML element (assumed to be a video element)
// function pause(element) {
//     element.pause(); // Invoking the pause method to pause the video
// }

