function dojoWay() {
    for (let i = 1; i <= 100; i++) {
        if (i % 5 === 0) {
            if (i % 10 === 0) {
                console.log("Dojo");
            }else {
            console.log("Coding");
            }
        } else {
            console.log(i);
        }
}
}
dojoWay();