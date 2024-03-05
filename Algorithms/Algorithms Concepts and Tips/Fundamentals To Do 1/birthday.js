function birthday (day,month) {
const birthday = 7;
const birthmonth = 11;
if ((day === birthday && month === birthmonth) || (day === birthmonth && month === birthday)) {
    console.log("How did you know?");
} else {
    console.log("Just another day....");
}
}
birthday(7,11);
birthday(1,1);
birthday(11,7);