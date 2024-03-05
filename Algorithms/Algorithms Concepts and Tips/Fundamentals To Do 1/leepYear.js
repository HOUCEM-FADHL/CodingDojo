function leepYear (year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                console.log("Leep Year");
            } else {
                console.log("Not a Leep Year");
            }
        } else {
            console.log("Leep Year");
        }
    } else {
        console.log("Not a Leep Year");
    }
}
leepYear(2000);