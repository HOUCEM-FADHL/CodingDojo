// ---------- reverse -----------
function reverse(arr) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    while (leftIndex < rightIndex) {
        const temp = arr[leftIndex];
        arr[leftIndex] = arr[rightIndex];
        arr[rightIndex] = temp;

        leftIndex++;
        rightIndex--;
    }
}

const numericalArray = [1, 2, 3, 4, 5];
reverse(numericalArray);
console.log(numericalArray)

// --------- rotate ----------

function rotateArr(arr, shiftBy) {
    // Normalize shiftBy to ensure it's within the range of array length
    const normalizedShift = ((shiftBy % arr.length) + arr.length) % arr.length;

    // If shiftBy is negative, convert it to the equivalent positive shift
    let numShifts;
    if (normalizedShift < 0) {
       numShifts = arr.length + normalizedShift
    } else {
        numShifts = normalizedShift;
    }
    // No need to rotate if numShifts is 0 or the array length is 1
    if (numShifts === 0 || arr.length === 1) {
        return;
    }

    const reverseSubArray = (start, end) => {
        while (start < end) {
            // Swap elements at start and end indices
            const temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;

            // Move indices towards each other
            start++;
            end--;
        }
    };

    // Rotate the entire array
    reverseSubArray(0, arr.length - 1);

    // Rotate the first part of the array (from index 0 to numShifts - 1)
    reverseSubArray(0, numShifts - 1);

    // Rotate the second part of the array (from index numShifts to end)
    reverseSubArray(numShifts, arr.length - 1);
}

const arr = [1, 2, 3];
const shiftBy = 1;
rotateArr(arr, shiftBy);
console.log(arr); 

// --------- filter ----------

function filterArrayInRange(arr, min, max) {
    let index = 0; 

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= min && arr[i] <= max) {
            // If value is within range, move it to index position
            arr[index] = arr[i];
            index++;
        }
    }

    for (let i = index; i < arr.length; i++) {
        arr[i] = undefined;
    }

    arr.length = index;

    return arr;
}

const arr = [1, 5, 2, 8, 4, 9, 3];
const min = 3;
const max = 7;

filterArrayInRange(arr, min, max);
console.log(arr);

// --------- concat ----------

function arrConcat(arr1, arr2) {
    const combinedArray = [];

    for (let i = 0; i < arr1.length; i++) {
        combinedArray.push(arr1[i]);
    }

    for (let i = 0; i < arr2.length; i++) {
        combinedArray.push(arr2[i]);
    }

    return combinedArray;
}

const result = arrConcat(['a', 'b'], [1, 2]);
console.log(result);
