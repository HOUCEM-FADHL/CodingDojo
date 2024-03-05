function countDown(lowNum, highNum, mult) {
    for (let i = highNum; i >= lowNum; i -= mult) {
        console.log(i);
    }
}
countDown(2, 9, 3);