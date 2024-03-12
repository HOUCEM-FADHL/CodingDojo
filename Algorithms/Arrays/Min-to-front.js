function minToFront(arr) {
    let min = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < arr[min]) {
            min = i;
        }
    }
    for (let i = min; i >0; i--) {
        let temp = arr[i];
        arr[i] = arr[i-1];
        arr[i-1] = temp;
    }
    return arr;
}
let arr = [2, 3, 1, 4, 5];
minToFront(arr);
console.log(arr)