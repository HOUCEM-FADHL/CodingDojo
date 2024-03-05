function count(param1, param2, param3, param4) {
    let currentNum = param2;
    while (currentNum <= param3) {
        if (currentNum !== param4 && currentNum % param1 === 0) {
        console.log(currentNum);
        }
        currentNum += 1;
    }
}
count(3, 5, 17, 9);
