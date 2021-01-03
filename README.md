# Programming Foundations - Module 2

## Lesson Task 4 Questions

### Question 1

Declare and call a function that logs the string "What the func is this nonsense?"

### Question 2

Create and call a function with two arguments, `firstName` and `lastName`.

The function should log both the argument values with a space between them.

### Question 3

Create a function with two arguments, `firstNumber` and `secondNumber`.

Inside the function, check the type of the arguments.

If they are numbers, multiply them and return the result.

If either of them are not numbers return the message: "Please supply number values".

Call the function, assign the return value to a variable called `result` and log the variable.

### Question 4

Create a function with three arguments.

Try and convert each argument to a number.

If any of the arguments cannot be converted to a number, return the message: "Invalid argument types".

If all arguments are numbers or can be converted to numbers, add them all and return the result.

Select the `p` element on the page and assign the result of the function call to be its innerHTML value.

### Question 5

Select the button with the class `heading` using `document.querySelector`.

Create a function and assign it to the `onclick` property of the button.

The function should select the `h1` element on the page and update its innerHTML without replacing the existing value.

After clicking once, the innerHTML value should be `Functions: Updated`.

Clicking the button again would mean the heading reads: `Functions: Updated: Updated`

### Question 6

Select the button with the class `title`.

When this is button is clicked, update the `title` of the `page` (not the heading, the HTML page title visible in the browser tab) to read: `I've been updated`.

Hint: use `console.dir(document)` to view the properties available on the document object.

### Question 7

Select the buttons with the classes `red`, `orange` and `pink`.

Clicking on these buttons should change the background of the page to `red`, `orange` and `pink` respectively.
