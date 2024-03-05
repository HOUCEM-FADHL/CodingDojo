function addOdd(a, b) {
    let sum = 0;
    if(a === -b) {
        console.log(0);
    } else{
    for (let i = a; i <= b; i++) {
        if (i % 2!== 0) {
            sum += i;
        }
    }
    console.log(sum);
}
}
addOdd(-300000, 300000);