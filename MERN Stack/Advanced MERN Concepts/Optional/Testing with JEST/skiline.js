// function skyline(array) {
//     newArray = [];
//     for (var i = 0; i < array.length; i++) {
//         if (array[i] > array[i-1]) {
//             newArray.push(array[i]);
//         } else {
//             continue;
//         }
//     }
//     console.log(newArray);
// }
// skyline([-1,2,4,7,3])
// skyline([1,-2,4,-7,3])


function skyline(array) {
    newArray = [];
    let x=0
    for (var i = 0; i < array.length; i++) {
        if (array[i]> x) {
            x=array[i]
            newArray.push(array[i]);
        } 
    }
    console.log(newArray);
}
skyline([8,4,9])
skyline([-1,2,4,7,3])
skyline([1,-2,4,-7,3])