function removeBlanks(str) {
    let newStr = '';
    for(let i = 0; i < str.length; i++) {
        if(str[i] !==' ') {
            newStr += str[i];
        }
    }
    return newStr;
}

removeBlanks('Hello World');
console.log(removeBlanks('Hello Beautiful World'));

function getDigits(num) {
    let newStr = '';
    for(let i = 0; i < num.length; i++) {
    if (Number(num[i])) {
        newStr += num[i];
    }
}
    return newStr;
}

console.log(getDigits('12a3f4hh567!89'));

function acronym(str) {
    let result = '';
    let words = str.split(' '); 
    console.log(words); 
    
    for (let i = 0; i < words.length; i++) {
        if (words[i] !== '') {
            result += words[i][0].toUpperCase(); 
                }
    }

    return result;
}

console.log(acronym(" there's no free lunch - gotta pay yer way. ")); 
console.log(acronym("Live from New York, it's Saturday Night!"));

function countNonSpaces(str) {
    let count = 0;
    for(let i = 0; i < str.length; i++) {
        if(str[i]!==' ') {
            count++;
        }
    }
    return count;
}

console.log(countNonSpaces("Honey pie, you are driving me crazy"))
console.log(countNonSpaces('Hello World'));

function removeShorterStrings(arr, val) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].length >= val) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4))
console.log(removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3))