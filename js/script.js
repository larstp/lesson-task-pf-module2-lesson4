/* Question 1
Declare and call a function that logs the string "What the func is this nonsense?"*/

function logWord() {
  console.log("What the func is this nonsense?");
}

logWord();

/* Question 2
Create and call a function with two arguments, firstName and lastName.

The function should log both the argument values with a space between them.*/

function logName() {
  let firstName = "John";
  let lastName = "Doe";
  console.log(firstName + " " + lastName);
}

logName();

/* Question 3
Create a function with two arguments, firstNumber and secondNumber.

Inside the function, check the type of the arguments.

If they are numbers, multiply them and return the result.

If either of them are not numbers return the message: "Please supply number values".

Call the function, assign the return value to a variable called result and log the variable.*/

var firstNumber = 87607;
var secondNumber = 9875678;

function multiply(firstNumber, secondNumber) {
  var typeofFirst = typeof firstNumber;
  var typeofSecond = typeof secondNumber;

  if (typeofFirst !== "number" || typeofSecond !== "number") {
    return "Please supply number values";
  }

  return firstNumber * secondNumber;
}

var result = multiply(firstNumber, secondNumber);
console.log(result);

/* Question 4
Create a function with three arguments.

Try and convert each argument to a number.

If any of the arguments cannot be converted to a number, return the message: "Invalid argument types".

If all arguments are numbers or can be converted to numbers, add them all and return the result.

Select the p element on the page and assign the result of the function call to be its innerHTML value.*/

// I have no idea what this means

function addition(num1, num2, num3) {
  var convertToNumber1 = parseFloat(num1);
  var convertToNumber2 = parseFloat(num2);
  var convertToNumber3 = parseFloat(num3);

  if (
    isNaN(convertToNumber1) ||
    isNaN(convertToNumber2) ||
    isNaN(convertToNumber3)
  ) {
    return "Thats not a number, silly";
  }
  return convertToNumber1 + convertToNumber2 + convertToNumber3;
}

var paragraph = document.querySelector("p");
var sum = addition(6, true, "f");
console.log(sum);
paragraph.innerHTML = sum;

/* Question 5
Select the button with the class heading using document.querySelector.

Create a function and assign it to the onclick property of the button.

The function should select the h1 element on the page and update its innerHTML without replacing the existing value.

After clicking once, the innerHTML value should be Functions: Updated.

Clicking the button again would mean the heading reads: Functions: Updated: Updated*/

var headerButton = document.querySelector(".heading");

headerButton.onclick = function () {
  var heading = document.querySelector("h1");
  heading.innerHTML += ": Updated";
};

/* Question 6
Select the button with the class title.

When this is button is clicked, update the title of the page (not the heading, the HTML page title visible in the browser tab) to read: I've been updated.

Hint: use console.dir(document) to view the properties available on the document object.*/

var titleButton = document.querySelector(".title");

function titleChange() {
  document.title = "I've been updated, and I liked it";
}

titleButton.onclick = titleChange;

/* Question 7
Select the buttons with the classes red, orange and pink.

Clicking on these buttons should change the background of the page to red, orange and pink respectively. */

var redButton = document.querySelector(".red");
var orangeButton = document.querySelector(".orange");
var pinkButton = document.querySelector(".pink");

function changeBackground(colour) {
  document.body.style.backgroundColor = colour;
}

redButton.onclick = function () {
  changeBackground("red");
};

orangeButton.onclick = function () {
  changeBackground("orange");
};

pinkButton.onclick = function () {
  changeBackground("pink");
};
