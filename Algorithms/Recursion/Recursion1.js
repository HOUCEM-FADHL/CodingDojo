function rSigma(num) {
    if (num < 1) {
        return 0;
    } else {
        return Math.floor(num) + rSigma(Math.floor(num) - 1);
    }
}

function rFactorial(num) {
    if (num < 1) {
        return 1;
    } else {
        return Math.floor(num) * rFactorial(Math.floor(num) - 1);
    }
}

console.log(rSigma(5));  
console.log(rSigma(2.5)); 
console.log(rSigma(-1));  
console.log(rFactorial(3));
console.log(rFactorial(6.5));