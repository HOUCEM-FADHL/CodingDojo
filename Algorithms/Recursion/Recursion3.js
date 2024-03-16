function rBinarySearch(arr, value) {
    if (arr.length === 0) {
        return false;
    } else {
        var mid = Math.floor(arr.length / 2);
        if (arr[mid] === value) {
            return true;
        } else if (arr[mid] > value) {
            return rBinarySearch(arr.slice(0, mid), value);
        } else {
            return rBinarySearch(arr.slice(mid + 1), value);
        }
    }
}

function rGCF(num1, num2) {
    if (num1 === 0) {
        return num2;
    }
    if (num2 === 0) {
        return num1;
    }
    if (num1 > num2) {
        return rGCF(num1 % num2, num2);
    }
    else {
        return rGCF(num1, num2 % num1);
    }
}


console.log(rBinarySearch([1,3,5,6],2))
console.log(rGCF(123456, 987654)); 

