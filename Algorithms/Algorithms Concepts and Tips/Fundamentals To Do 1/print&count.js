function count (start, end) {
    let count = 0;
    for (let i = start; i <= end; i++) {
        if(i % 5 === 0) {
            console.log(i);
            count++;
    }
}
console.log("There are ",count, "numbers divisible by 5 between", start, "and", end);
}
count(512, 4096);