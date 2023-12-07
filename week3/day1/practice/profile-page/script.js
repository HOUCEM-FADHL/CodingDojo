// Get references to HTML elements
var countreq = document.querySelector(".con-req");
var countcon = document.querySelector(".y-con");
var user = document.querySelector(".card-body h1");

// Array of user names
var userArray = ["Jane Doe", "Adrien D", "Anne J", "Alayne T", "Arry Y"];

// Index to track the current user in the array
var index_user = 0;

// Function to change the displayed user name
function changename() {
    index_user++;
    
    // Reset index to 0 if it exceeds the array length
    if (index_user > userArray.length-1) {
        index_user = 0;
    }
    
    // Update the user element with the new name
    user.innerText = userArray[index_user];
}

// Function to update counts based on the status of a connection request
function status(req) {
    if (req == "accept") {
        // Decrease connection requests count and increase your connections count
        countreq.innerText--;
        countcon.innerText++;
    } else if (req == "refuse") {
        // Decrease connection requests count
        countreq.innerText--;
    }
}

// Function to hide the card-list-item
function hide() {
    var list = document.querySelector(".card-list-item");

    // Remove the card-list-item class to hide it
    list.classList.remove("card-list-item");
}
