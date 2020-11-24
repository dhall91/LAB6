

var today= new Date();
var hourNow = today.getHours();
var greeting;
let confirmation;

let firstname = prompt("Enter Firstname here.");
confirm("Are you sure" +firstname+ "is correct?");

if (hourNow > 18 && confirmation == true) {
greeting= 'Good evening! ' + firstname;
}else if (hourNow > 18 && confirmation != true) {
    greeting= 'Good evening! ' + "Yaa ediat?";
}else if (hourNow > 12 && confirmation == true) {
    greeting= 'Good evening! ' + firstname;
}else if  (hourNow > 12 && confirmation != true) {
greeting = ' Good afternoon! '+ firstname;
}else if (hourNow > 0) {
greeting = 'Good morning! '+ firstname;
}else {
greeting = 'Welcome! ' ;
}
document .write( ' <h3>' +greeting + ' </ h3> ');