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
let secretWord = "secret";
let userWord1 = prompt("Enter a word");
let userWord2 = prompt("Enter another word");

if (userWord1 == userWord2 && userWord1 == secretWord && userWord2 == secretWord) {
    alert("You got in...but we don't know how");

    
}
 if (userWord1 == userWord2 && userWord1 != secretWord && userWord2 != secretWord) {
    alert("You got in...but only because your words matched");
}