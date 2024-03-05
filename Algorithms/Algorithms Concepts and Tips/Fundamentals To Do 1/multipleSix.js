function multipleSix(number) {
    let i = 0;
    while (i <= number) {
        if (i % 6 === 0) {
            console.log(i);
        }
        i++;
    }
}
multipleSix(1000);