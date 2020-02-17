//Problem 1:
// let anyWord = "hello";
// let theSameWord = "goodbye";

// if (anyWord == theSameWord) {
//     console.log("THAT IS... CORRECT!!!");
// }
// else {
//     console.log("THAT IS... NOT CORRECT");
// }

//Problem 2:
// let num = prompt("Please enter a number:");

// if (num > 0) {
//     alert(num + " is positive");
// }
// else {
//     alert(num + " is negative");
// }

//Problem 3:
// let num1 = parseInt(prompt("Enter a number:"));
// let num2 = parseInt(prompt("Emter another number:"));
// let sum = num1 + num2;
// if ((sum%2) == 0){
//     alert("The sum of " + num1 + " and " + num2 + " is even.");

// }
// else {
//     alert("The sum of " + num1 + " and " + num2 + " is odd.");
// }

//Problem 4
// let secretWord = "secret";
// let userWord1 = prompt("Enter a word");
// let userWord2 = prompt("Enter another word");


// if (userWord1 == userWord2 && userWord1 != secretWord && userWord2 != secretWord) {
//     alert("You got in...but only because your words matched");
// }
// else if ((userWord1 == secretWord || userWord2 == secretWord) && (userWord1 != secretWord || userWord2 != secretWord)) {
//     alert("You got in...but only because one of your words matched the secret word");
// }
// else if (userWord1 == userWord2 && userWord1 == secretWord && userWord2 == secretWord) {
//     alert("You got in!");
// }
// else {
//     alert("Locked Out");
// }

//Challenge
let day = prompt("Enter a day of the week");

if (day == "Monday" || day == "monday") {
    alert("Monday is 'lunes' in Spanish");
}

else if (day == "Tuesday" || day == "tuesday"){
    alert("Tuesday is 'martes' in Spanish");
}

else if (day == "Wednesday" || day == "wednesday"){
    alert("Wednesday is 'miercoles' in Spanish");
}

else if (day == "Thursday" || day == "thursday"){
    alert("Thursday is 'jueves' in Spanish");
}

else if (day == "Friday" || day == "friday"){
    alert("Friday is 'viernes' in Spanish");
}

else if (day == "Saturday" || day == "saturday"){
    alert("Saturday is 'sabado' in Spanish");
}
else if (day == "Sunday" || day == "sunday"){
    alert("Sunday is 'domingo' in Spanish");
}

else {
    alert("That is not a day of the week in English");
}