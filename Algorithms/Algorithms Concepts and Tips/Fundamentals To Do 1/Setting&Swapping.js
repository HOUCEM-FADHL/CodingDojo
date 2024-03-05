function swapping () {
    let myNumber = 42;
    let myName = "John";
    [myNumber, myName] = [myName, myNumber];
    console.log(myNumber);
    console.log(myName);
}
swapping();