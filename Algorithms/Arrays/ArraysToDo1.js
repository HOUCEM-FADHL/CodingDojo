// ----Push-----
// 1st way
function pushFront(arr, val) {
    arr.unshift(val);
    return arr;
}
console.log( pushFront([1, 2, 3], 4));
// 2nd way

function pushFront(arr, val) {
        let newArr = [val,...arr];
        return newArr;
    }
    console.log( pushFront([1, 2, 3], 4));
    // 3rd way
    
    function pushFront(arr, val) {
        let newArr = [val].concat(arr);
        return newArr;
    }
    console.log( pushFront([1, 2, 3], 4));

// -----Pop-----
// 1st way
function popFront(arr) {
    let removed = arr.shift();
    console.log(removed);
    let newArr = arr;
    return newArr;
}
console.log( popFront([1, 2, 3]));
// 2nd way

function popFront(arr) {
    let removed = arr[0]
    console.log(removed);
    let newArr = arr.slice(1);
    return newArr;
}
console.log( popFront([1, 2, 3]));
// 3rd way

function popFront(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length-1; i++) {
        if (i === 0) {
        console.log(arr[i])
        }
        newArr[i] = arr[i + 1];
    }
    return newArr;
}
console.log( popFront([1, 2, 3]));
// ----insertAt-----
function insertAt(arr, index, val) {
    for (let i = arr.length; i > index; i--) {
        arr[i] = arr[i-1];
    }
    arr[index] = val;
    return arr;
}
console.log( insertAt([1, 2, 3], 1, 4));
