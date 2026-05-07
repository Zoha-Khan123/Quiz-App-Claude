import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "./models/Quiz.js";

dotenv.config();

// ========== QUIZ 1: Chapter 1-20 (80 Questions) ==========
const quiz1 = {
  title: "JavaScript Quiz (Chapter 1 to 20)",
  difficulty: "easy",
  timeLimit: 2700,
  questions: [
    // Ch 1: Alerts
    {
      question:
        "Which keyword is used to display a popup message box in JavaScript?",
      options: ["message", "alert", "popup", "prompt"],
      correctAnswer: 1,
    },
    {
      question: "What character must end every JavaScript statement?",
      options: ["Colon (:)", "Period (.)", "Semicolon (;)", "Comma (,)"],
      correctAnswer: 2,
    },
    // Ch 2: Variables for Strings
    {
      question: "Which keyword is used to declare a variable in JavaScript?",
      options: ["let", "var", "dim", "define"],
      correctAnswer: 1,
    },
    {
      question:
        "How do you assign the string 'Hello' to a variable called greeting?",
      options: [
        "var greeting = Hello",
        'var greeting = "Hello"',
        'greeting := "Hello"',
        'string greeting = "Hello"',
      ],
      correctAnswer: 1,
    },
    // Ch 3: Variables for Numbers
    {
      question: "What happens when a number is enclosed in quotation marks?",
      options: [
        "JavaScript treats it as a number",
        "JavaScript ignores the quotes",
        "JavaScript treats it as a string",
        "JavaScript throws an error",
      ],
      correctAnswer: 2,
    },
    {
      question:
        "Which of the following assigns a number (not a string) to a variable?",
      options: [
        'var x = "10"',
        "var x = 10",
        "var x = ten",
        "var x = number(10)",
      ],
      correctAnswer: 1,
    },
    // Ch 4: Variable Names
    {
      question:
        "Which of the following is an ILLEGAL variable name in JavaScript?",
      options: ["myVar", "_count", "2ndPlace", "$price"],
      correctAnswer: 2,
    },
    {
      question: "Variable names in JavaScript are:",
      options: [
        "Case-insensitive",
        "Case-sensitive",
        "Always lowercase",
        "Always uppercase",
      ],
      correctAnswer: 1,
    },
    // Ch 5: Math familiar operators
    {
      question: "Which operator is used for multiplication in JavaScript?",
      options: ["x", "×", "*", "•"],
      correctAnswer: 2,
    },
    {
      question: "Which operator is used for division in JavaScript?",
      options: ["\\", "/", "÷", "div"],
      correctAnswer: 1,
    },
    // Ch 6: Math unfamiliar operators
    {
      question: "What does the modulus operator (%) return?",
      options: ["Quotient", "Percentage", "Remainder", "Product"],
      correctAnswer: 2,
    },
    {
      question: "What does the increment operator (++) do?",
      options: [
        "Multiplies by 2",
        "Adds 1 to the variable",
        "Doubles the variable",
        "Adds 2 to the variable",
      ],
      correctAnswer: 1,
    },
    // Ch 7: Math ambiguity
    {
      question:
        "How do you force JavaScript to perform addition before multiplication?",
      options: [
        "Use square brackets []",
        "Use curly brackets {}",
        "Use parentheses ()",
        "Use the 'first' keyword",
      ],
      correctAnswer: 2,
    },
    {
      question: "What is the result of: (2 + 3) * 4?",
      options: ["14", "20", "24", "11"],
      correctAnswer: 1,
    },
    // Ch 8: Concatenation
    {
      question: "What does the + operator do when used with two strings?",
      options: [
        "Adds them mathematically",
        "Concatenates (joins) them",
        "Compares them",
        "Throws an error",
      ],
      correctAnswer: 1,
    },
    {
      question: 'What is the output of: "Hello" + " " + "World"?',
      options: ["HelloWorld", "Hello World", "Hello+World", "Error"],
      correctAnswer: 1,
    },
    // Ch 9: Prompts
    {
      question: "What does the prompt() function do?",
      options: [
        "Displays an alert",
        "Asks the user for input",
        "Prints to the console",
        "Creates a variable",
      ],
      correctAnswer: 1,
    },
    {
      question: "What type of value does prompt() always return?",
      options: ["Number", "Boolean", "String", "Object"],
      correctAnswer: 2,
    },
    // Ch 10: if statements
    {
      question: "What is the correct syntax for an if statement?",
      options: [
        "if x == 5 then {}",
        "if (x == 5) {}",
        "if x = 5 {}",
        "if [x == 5] {}",
      ],
      correctAnswer: 1,
    },
    {
      question:
        "An if statement executes its code block only when the condition is:",
      options: ["false", "undefined", "true", "null"],
      correctAnswer: 2,
    },
    // Ch 11: Comparison operators
    {
      question: "What does the === operator check?",
      options: [
        "Only value equality",
        "Value and type equality",
        "Assignment",
        "Greater than",
      ],
      correctAnswer: 1,
    },
    {
      question: "Which operator means 'not equal to' in JavaScript?",
      options: ["<>", "!=", "=/=", "~="],
      correctAnswer: 1,
    },
    // Ch 12: if...else
    {
      question: "When does the else block execute in an if...else statement?",
      options: [
        "When the if condition is true",
        "Always",
        "When the if condition is false",
        "Never",
      ],
      correctAnswer: 2,
    },
    {
      question:
        "What keyword is used to test additional conditions after an if?",
      options: ["also if", "else if", "or if", "then if"],
      correctAnswer: 1,
    },
    // Ch 13: Logical operators
    {
      question: "Which logical operator means AND in JavaScript?",
      options: ["||", "&&", "!!", "**"],
      correctAnswer: 1,
    },
    {
      question: "Which logical operator means OR in JavaScript?",
      options: ["&&", "||", "!!", "//"],
      correctAnswer: 1,
    },
    // Ch 14: Nested if
    {
      question: "What is a nested if statement?",
      options: [
        "An if with multiple conditions using &&",
        "An if statement inside another if statement",
        "An if statement that uses else",
        "An if without curly brackets",
      ],
      correctAnswer: 1,
    },
    {
      question: "In nested if statements, the inner if only runs when:",
      options: [
        "The outer if condition is false",
        "Both conditions are false",
        "The outer if condition is true",
        "Neither condition matters",
      ],
      correctAnswer: 2,
    },
    // Ch 15: Arrays
    {
      question: "What is the correct way to create an array in JavaScript?",
      options: [
        'var arr = "1, 2, 3"',
        "var arr = (1, 2, 3)",
        "var arr = [1, 2, 3]",
        "var arr = {1, 2, 3}",
      ],
      correctAnswer: 2,
    },
    {
      question: "What is the index of the first element in a JavaScript array?",
      options: ["1", "0", "-1", "undefined"],
      correctAnswer: 1,
    },
    // Ch 16: Arrays add/remove
    {
      question: "Which method adds an element to the END of an array?",
      options: ["shift()", "unshift()", "push()", "pop()"],
      correctAnswer: 2,
    },
    {
      question: "Which method removes the LAST element from an array?",
      options: ["push()", "shift()", "pop()", "delete()"],
      correctAnswer: 2,
    },
    // Ch 17: splice/slice
    {
      question:
        "Which method is used to add or remove elements at any position in an array?",
      options: ["slice()", "splice()", "split()", "shift()"],
      correctAnswer: 1,
    },
    {
      question: "What does the slice() method do?",
      options: [
        "Removes elements from the original array",
        "Extracts a section and returns a new array",
        "Sorts the array",
        "Reverses the array",
      ],
      correctAnswer: 1,
    },
    // Ch 18: for loops
    {
      question: "What are the three parts of a for loop?",
      options: [
        "start, end, step",
        "initialization, condition, increment",
        "begin, check, update",
        "first, last, count",
      ],
      correctAnswer: 1,
    },
    {
      question:
        "How many times will this loop run: for (var i = 0; i < 5; i++) {}?",
      options: ["4", "5", "6", "Infinite"],
      correctAnswer: 1,
    },
    // Ch 19: break, length
    {
      question: "What does the break statement do inside a loop?",
      options: [
        "Skips the current iteration",
        "Exits the loop immediately",
        "Pauses the loop",
        "Restarts the loop",
      ],
      correctAnswer: 1,
    },
    {
      question: "What does arrayName.length return?",
      options: [
        "The last index of the array",
        "The number of elements in the array",
        "The first element",
        "The data type of the array",
      ],
      correctAnswer: 1,
    },
    // Ch 20: Nested loops
    {
      question: "In a nested for loop, how does the inner loop behave?",
      options: [
        "Runs once for the entire outer loop",
        "Runs completely for each iteration of the outer loop",
        "Runs at the same time as the outer loop",
        "Runs only when the outer loop ends",
      ],
      correctAnswer: 1,
    },
    {
      question:
        "If an outer loop runs 3 times and inner loop runs 4 times, how many total iterations of the inner loop occur?",
      options: ["3", "4", "7", "12"],
      correctAnswer: 3,
    },

    {
      question: "What is the output of the following code?",
      code: `let x = "5" + 5 - 5;\nconsole.log(x);`,
      options: ["55", "50", "5", "NaN"],
      correctAnswer: 1,
    },
    {
      question: "What will be printed?",
      code: `console.log(10 + 5 * 2 ** 2 % 3);`,
      options: ["30", "12", "20", "0"],
      correctAnswer: 1,
    },
    {
      question: "What is the result?",
      code: `let a = "10";\nlet b = 5;\nconsole.log(a > b);`,
      options: ["false", "true", "Error", "NaN"],
      correctAnswer: 1,
    },
    {
      question: "What happens if the user clicks Cancel in prompt?",
      code: `let age = prompt("Enter your age");\nconsole.log(age);`,
      options: ["undefined", "null", '"" (empty string)', "0"],
      correctAnswer: 1,
    },
    {
      question: "What will be printed?",
      code: `let val = "0";\nif (val == false) {\n  console.log("A");\n} else if (val === false) {\n  console.log("B");\n} else {\n  console.log("C");\n}`,
      options: ["A", "B", "C", "Nothing"],
      correctAnswer: 0,
    },
    {
      question: "What is the output of this nested if (no braces)?",
      code: `if (true)\n  if (false)\n    console.log("Inner");\n  else\n    console.log("Else of inner");\nelse\n  console.log("Outer");`,
      options: ["Inner", "Outer", "Else of inner", "Nothing"],
      correctAnswer: 2,
    },
    {
      question: "What will be the output?",
      code: `let a = 5, b = 10, c = 15;\nif (a > b || b > c && a < c) {\n  console.log("True");\n} else {\n  console.log("False");\n}`,
      options: ["True", "False", "Error", "Nothing"],
      correctAnswer: 1,
    },
    {
      question: "After this code, what will be the array?",
      code: `let arr = [1, 2, 3, 4, 5];\narr.splice(2, 1, "X", "Y");\nconsole.log(arr);`,
      options: [
        "[1, 2, 3, 'X', 'Y']",
        "[1, 2, 'X', 'Y', 5]",
        "[1, 2, 'X', 'Y', 4, 5]",
        "[1, 2, 'X', 4, 5]",
      ],
      correctAnswer: 2,
    },
    {
      question: "What will be printed?",
      code: `let matrix = [[1,2,3], [4,5,6], [7,8,9]];\nconsole.log(matrix[1][2] + matrix[2][0]);`,
      options: ["6", "13", "15", "9"],
      correctAnswer: 1,
    },
    {
      question: "What is the output?",
      code: `let arr = [10, 20, 30];\ndelete arr[1];\nconsole.log(arr.length, arr[1]);`,
      options: ["2 undefined", "3 undefined", "3 20", "3 null"],
      correctAnswer: 1,
    },
    {
      question: "What will be the final array?",
      code: `let arr = [1, 2, 3, 4, 5];\narr.length = 2;\nconsole.log(arr);`,
      options: ["[1, 2, 3, 4, 5]", "[1, 2]", "[1, 2, undefined]", "Error"],
      correctAnswer: 1,
    },
    {
      question: "How many times will count++ execute?",
      code: `let count = 0;\nfor (let i = 0; i < 3; i++) {\n  for (let j = 0; j < 3; j++) {\n    if (i === 1 && j === 1) continue;\n    count++;\n  }\n}\nconsole.log(count);`,
      options: ["9", "8", "7", "6"],
      correctAnswer: 1,
    },
    {
      question: "What is the output?",
      code: `let sum = 0;\nfor (let i = 1; i <= 5; i++) {\n  sum += i;\n  for (let z = 5; z < 5; z++) {\n    sum -= i;\n  }\n}\nconsole.log(sum);`,
      options: ["0", "15", "5", "25"],
      correctAnswer: 1,
    },
    {
      question: "What will be the value of found?",
      code: `let found = false;\nfor (let i = 1; i <= 5 && !found; i++) {\n  for (let j = 1; j <= 5; j++) {\n    if (i * j === 12) {\n      found = true;\n      break;\n    }\n  }\n}\nconsole.log(found);`,
      options: ["false", "true", "undefined", "Error"],
      correctAnswer: 1,
    },
    {
      question: "What is the final value of sum?",
      code: `let sum = 0;\nfor (let i = 1; i <= 5; i++) {\n  sum += i;\n  if (i === 3) break;\n}\nconsole.log(sum);`,
      options: ["15", "6", "9", "3"],
      correctAnswer: 1,
    },
    {
      question: "Which operator has the highest precedence?",
      options: [
        "Addition (+)",
        "Modulus (%)",
        "Exponentiation (**)",
        "Logical AND (&&)",
      ],
      correctAnswer: 2,
    },
    {
      question: "What is the correct statement about == and ===?",
      options: [
        "== checks value and type both",
        "=== does type coercion",
        "== does type coercion while === does not",
        "Both are same",
      ],
      correctAnswer: 2,
    },
    {
      question: "Main difference between slice() and splice() is?",
      options: [
        "Both mutate the array",
        "slice() mutates original array",
        "slice() does not mutate, splice() does",
        "They are same",
      ],
      correctAnswer: 2,
    },
    {
      question: "What will these return?",
      code: `console.log(5 % -3);\nconsole.log(-5 % 3);`,
      options: ["2 and 2", "-2 and -2", "2 and -2", "-2 and 2"],
      correctAnswer: 2,
    },
    {
      question: "What is the output?",
      code: `let total = "0";\nfor (let i = 1; i <= 5; i++) {\n  total += i;\n}\nconsole.log(total);`,
      options: ["15", '"012345"', "12345", "510"],
      correctAnswer: 1,
    },
    {
      question: "After this operation, what is the array?",
      code: `let arr = [1, 2, 3];\narr.splice(1, 0, "X");\nconsole.log(arr);`,
      options: [
        "[1, 2, 'X', 3]",
        "[1, 'X', 2, 3]",
        "[1, 'X', 3]",
        "[1, 2, 3, 'X']",
      ],
      correctAnswer: 1,
    },
    {
      question: "What will be printed?",
      code: `console.log("5" - 2);\nconsole.log("5" + 2);`,
      options: ["3 and 52", "3 and 7", "NaN and 52", "52 and 3"],
      correctAnswer: 0,
    },
    {
      question: "What is the final value of sum?",
      code: `let sum = 0;\nfor (let i = 0; i < 5; i++) {\n  if (i === 3) continue;\n  sum += i;\n}\nconsole.log(sum);`,
      options: ["10", "7", "6", "15"],
      correctAnswer: 1,
    },
    {
      question: "What will be the output?",
      code: `let x = 10;\nx += "5";\nx -= 5;\nconsole.log(x);`,
      options: ["105", "100", "50", '"105"'],
      correctAnswer: 1,
    },
    {
      question: "What will be printed?",
      code: `let matrix = [[[1,2]], [[3,4]], [[5,6]]];\nconsole.log(matrix[1][0][1]);`,
      options: ["1", "4", "6", "undefined"],
      correctAnswer: 1,
    },
    {
      question: "How many times will count increase?",
      code: `let count = 0;\nfor (let i = 0; i < 4; i++) {\n  for (let j = 0; j < 3; j++) {\n    if (i === 2) break;\n    count++;\n  }\n}\nconsole.log(count);`,
      options: ["12", "9", "8", "6"],
      correctAnswer: 1,
    },
    {
      question: "What is the output?",
      code: `let total = 0;\nfor (let i = 1; i <= 5; i++) {\n  total += i;\n  for (let j = 5; j > i; j--) {\n    total -= 1;\n  }\n}\nconsole.log(total);`,
      options: ["15", "5", "10", "0"],
      correctAnswer: 1,
    },
    {
      question: "What will this code print?",
      code: `let userRole = "admin";\nlet isActive = true;\n\nif(userRole === "admin" && isActive){\n  console.log("Full access");\n} else {\n  if(userRole === "user" && isActive){\n    console.log("Limited access");\n  } else {\n    console.log("No access");\n  }\n}`,
      options: ["Full access", "Limited access", "No access", "Error"],
      correctAnswer: 0,
    },
    {
      question: "Output of discount check?",
      code: `let isMember = false;\nlet purchaseAmount = 120;\n\nif(isMember && purchaseAmount >= 100){\n  console.log("20% discount");\n} else {\n  if(!isMember && purchaseAmount >= 100){\n    console.log("10% discount");\n  } else {\n    console.log("No discount");\n  }\n}`,
      options: ["20% discount", "Error", "No discount", "10% discount"],
      correctAnswer: 3,
    },
    {
      question: "What will be printed?",
      code: `if ("") {\n  console.log("Truthy");\n} else {\n  console.log("Falsy");\n}`,
      options: ["Truthy", "Falsy", "Error", "Nothing"],
      correctAnswer: 1,
    },
    {
      question: "After this code, what is the array?",
      code: `let arr = [1,2,3,4];\narr.splice(1,1);\nconsole.log(arr);`,
      options: ["[1,3,4]", "[2,3,4]", "[1,2,4]", "[1,2,3]"],
      correctAnswer: 0,
    },
    {
      question: "What is the result?",
      code: `console.log(0 == false);\nconsole.log(0 === false);`,
      options: ["true true", "true false", "false false", "false true"],
      correctAnswer: 1,
    },
    {
      question: "What is the final value of sum?",
      code: `let sum = 0;\nfor (let i = 1; i <= 10; i++) {\n  if (i % 2 === 0) continue;\n  sum += i;\n}\nconsole.log(sum);`,
      options: ["55", "25", "30", "10"],
      correctAnswer: 1,
    },
    {
      question: "What is printed here?",
      code: `let temp = 35;\nlet isRaining = false;\n\nif(temp > 30){\n  if(isRaining){\n    console.log("Hot and wet");\n  } else {\n    console.log("Hot and dry");\n  }\n} else {\n  console.log("Cool weather");\n}`,
      options: ["Hot and wet", "Hot and dry", "Cool weather", "Error"],
      correctAnswer: 1,
    },
    {
      question: "How many times will count++ run before break?",
      code: `let count = 0;\nfor (let i = 0; i < 5; i++) {\n  count++;\n  if (i === 3) break;\n}\nconsole.log(count);`,
      options: ["5", "4", "3", "6"],
      correctAnswer: 1,
    },
    {
      question: "Variable names in JavaScript are case-sensitive. This is:",
      options: [
        "False",
        "True only in strict mode",
        "True",
        "Depends on browser",
      ],
      correctAnswer: 2,
    },
    {
      question: "Find the output of login check:",
      code: `let username = "guest";\nlet password = "1234";\nlet isTwoFactorEnabled = true;\n\nif(username === "admin" && password === "admin123"){\n  console.log("Admin login successful");\n} else {\n  if(username === "guest" && password === "1234" && !isTwoFactorEnabled){\n    console.log("Guest login successful");\n  } else {\n    console.log("Login failed");\n  }\n}`,
      options: [
        "Admin login successful",
        "Guest login successful",
        "Login failed",
        "Error",
      ],
      correctAnswer: 2,
    },
    {
      question: "What will be printed?",
      code: `let x = 5;\nif (x = 10) {\n  console.log(x);\n}`,
      options: ["5", "10", "Error", "undefined"],
      correctAnswer: 1,
    },
    {
      question: "What is the final value of sum?",
      code: `let sum = 0;\nfor (let i = 0; i < 5; i++) {\n  sum += i;\n  for (let j = 0; j < 5; j++) {\n    sum++;\n    if (i + j > 6) break;\n  }\n}\nconsole.log(sum);`,
      options: ["40", "35", "34", "30"],
      correctAnswer: 2,
    },
    {
      question: "What will be the output?",
      code: `let arr = [1, 2, 3];\nlet newArr = arr;\nnewArr.push(4);\nconsole.log(arr.length);`,
      options: ["3", "4", "Error", "undefined"],
      correctAnswer: 1,
    },
  ],
};



// ==================== EASY LEVEL (40 MCQs) ====================
const easyQuiz = {
  title: "JavaScript Easy Quiz",
  difficulty: "easy",
  timeLimit: 2400,
  questions: [
    {
      question: "What will be the output?",
      code: `var x = "5";\nvar y = 2;\nalert(x + y);`,
      options: ["7", "Error", "52", "undefined"],
      correctAnswer: 2
    },
    {
      question: "What will be displayed?",
      code: `var firstName = "Ali";\nvar lastName = "Khan";\nalert(firstName + lastName);`,
      options: ["AliKhan", "Ali Khan", "Error", "KhanAli"],
      correctAnswer: 0
    },
    {
      question: "What is the value of cities[2]?",
      code: `var cities = ["Karachi", "Lahore", "Islamabad"];\nalert(cities[2]);`,
      options: ["undefined", "Lahore", "Karachi", "Islamabad"],
      correctAnswer: 3
    },
    {
      question: "What will be the array after execution?",
      code: `var pets = ["dog", "cat", "bird"];\npets.pop();\nalert(pets);`,
      options: ['["cat", "bird"]', '["bird"]', '["dog", "cat"]', '["dog", "cat", "bird"]'],
      correctAnswer: 2
    },
    {
      question: "What will be the array after execution?",
      code: `var pets = ["dog", "cat"];\npets.push("bird", "fish");\nalert(pets);`,
      options: ["Error", '["dog", "cat"]', '["bird", "fish"]', '["dog", "cat", "bird", "fish"]'],
      correctAnswer: 3
    },
    {
      question: "What will be the array after execution?",
      code: `var pets = ["dog", "cat", "bird"];\npets.shift();\nalert(pets);`,
      options: ['["bird"]', '["cat", "bird"]', '[]', '["dog", "cat"]'],
      correctAnswer: 1
    },
    {
      question: "How many times will this loop execute?",
      code: `for (var i = 1; i <= 5; i++) {}`,
      options: ["Infinite", "6", "5", "4"],
      correctAnswer: 2
    },
    {
      question: "What will be the final value of i?",
      code: `for (var i = 0; i < 3; i++) {}\nalert(i);`,
      options: ["2", "4", "0", "3"],
      correctAnswer: 3
    },
    {
      question: "What will happen after break executes?",
      code: `for (var i = 0; i < 5; i++) {\n   if (i === 2) {\n      break;\n   }\n}`,
      options: ["Loop skips only one iteration", "Loop stops when i becomes 2", "Infinite loop starts", "Loop runs 5 times"],
      correctAnswer: 1
    },
    {
      question: "What is the output?",
      code: `var matchFound = false;\nif (10 > 5) {\n   matchFound = true;\n}\nalert(matchFound);`,
      options: ["undefined", "false", "Error", "true"],
      correctAnswer: 3
    },
    {
      question: "What will be the value of num?",
      code: `var num = 10;\nnum = num + 5 * 2;\nalert(num);`,
      options: ["25", "40", "30", "20"],
      correctAnswer: 3
    },
    {
      question: "What is the output?",
      code: `var x = 4;\nif (x > 5 || x < 10) {\n   alert("True");\n}`,
      options: ["Error", "Nothing", "False", "True"],
      correctAnswer: 3
    },
    {
      question: "What will be the output?",
      code: `var num = 2;\nif (num === 2) {\n   if (num < 5) {\n      alert("Nested");\n   }\n}`,
      options: ["undefined", "Error", "Nothing", "Nested"],
      correctAnswer: 3
    },
    {
      question: "What will happen?",
      code: `var cityNames = ["Karachi", "Lahore"];\nalert(cityNames[5]);`,
      options: ["Karachi", "null", "Lahore", "undefined"],
      correctAnswer: 3
    },
    {
      question: "What will happen?",
      code: `var x = 5;\nif (x === "5") {\n   alert("Equal");\n} else {\n   alert("Not Equal");\n}`,
      options: ["Equal", "5", "Not Equal", "Error"],
      correctAnswer: 2
    },
    {
      question: "What will be printed?",
      code: `function greet() {\n   alert("Hello");\n}\ngreet();`,
      options: ["Syntax error", "Nothing happens", "Hello is displayed", "Function is declared only"],
      correctAnswer: 2
    },
    {
      question: "What will be printed?",
      code: `function sum(a, b) {\n   alert(a + b);\n}\nsum(2, 3);`,
      options: ["23", "undefined", "Error", "5"],
      correctAnswer: 3
    },
    {
      question: "What will happen here?",
      code: `function test(a) {\n   alert(a);\n}\ntest();`,
      options: ["Error", "0", "null", "undefined"],
      correctAnswer: 3
    },
    {
      question: "What will be the output?",
      code: `function calc(num) {\n   return num * 2;\n}\nalert(calc(5));`,
      options: ["undefined", "5", "Error", "10"],
      correctAnswer: 3
    },
    {
      question: "What will be printed?",
      code: `var d = new Date();\nalert(typeof d);`,
      options: ["number", "date", "string", "object"],
      correctAnswer: 3
    },
    {
      question: "What will be printed?",
      code: `var d = new Date();\nalert(d.getFullYear());`,
      options: ["Current date", "Current month", "Current year", "Current time"],
      correctAnswer: 2
    },
    {
      question: "What does getDate() return?",
      options: ["Day of week", "Full year", "Day of month", "Current month"],
      correctAnswer: 2
    },
    {
      question: "What will be printed?",
      code: `var num = Number(""); \nalert(num);`,
      options: ["NaN", "Error", "undefined", "0"],
      correctAnswer: 3
    },
    {
      question: "What will be printed?",
      code: `var value = "007";\nalert(Number(value));`,
      options: ["NaN", "007", "Error", "7"],
      correctAnswer: 3
    },
    {
      question: "What will be the output?",
      code: `var ms = 0;\nvar sec = ms / 1000;\nalert(sec);`,
      options: ["undefined", "1", "NaN", "0"],
      correctAnswer: 3
    },
    {
      question: "What will be the result?",
      code: `var msDiff = 86400000;\nvar days = msDiff / (1000 * 60 * 60 * 24);\nalert(days);`,
      options: ["24", "60", "0", "1"],
      correctAnswer: 3
    },
    {
      question: "What will be printed?",
      code: `var d1 = new Date("Jan 1, 2025");\nvar d2 = new Date("Jan 1, 2026");\nalert(d2 > d1);`,
      options: ["undefined", "Error", "false", "true"],
      correctAnswer: 3
    },
    {
      question: "What will be the output?",
      code: `alert(Math.round(4.49));`,
      options: ["5", "4.5", "Error", "4"],
      correctAnswer: 3
    },
    {
      question: "What will be printed?",
      code: `var num = parseInt("25px");\nalert(num);`,
      options: ["NaN", "px", "Error", "25"],
      correctAnswer: 3
    },
    {
      question: "What is the output?",
      code: `var x = 10;\nif (x > 5 && x < 15) {\n   alert("Yes");\n} else {\n   alert("No");\n}`,
      options: ["No", "Error", "undefined", "Yes"],
      correctAnswer: 3
    },
    {
      question: "What will be copied into newArray?",
      code: `var pets = ["dog", "cat", "bird", "fish"];\nvar newArray = pets.slice(1, 3);\nalert(newArray);`,
      options: ['["bird", "fish"]', '["cat", "bird"]', '["dog", "cat"]', '["cat", "bird", "fish"]'],
      correctAnswer: 1
    },
    {
      question: "What will happen here?",
      code: `function test() {\n   return;\n}\nalert(test());`,
      options: ["false", "null", "0", "undefined"],
      correctAnswer: 3
    },
    {
      question: "What will be printed?",
      code: `var text = "JavaScript";\nalert(text.charAt(text.length));`,
      options: ["Error", "t", "undefined", "Empty string"],
      correctAnswer: 3
    },
    {
      question: "What is the difference between defining and calling a function?",
      options: ["Defining executes immediately", "Both are same", "Defining creates function, calling executes it", "Calling creates function"],
      correctAnswer: 2
    },
    {
      question: "Why are functions useful?",
      options: ["They stop loops permanently", "They allow code reuse and organization", "They increase variable size", "They convert strings into arrays"],
      correctAnswer: 1
    },
    {
      question: "What will be the output?",
      code: `var totalCost = 1 + 3 * 4 % 2;\nalert(totalCost);`,
      options: ["16", "4", "0", "1"],
      correctAnswer: 3
    },
    {
      question: "What will be the value of num after execution?",
      code: `var num = 5;\nnum++;\n++num;\nalert(num);`,
      options: ["8", "6", "5", "7"],
      correctAnswer: 3
    },
    {
      question: "What is the output?",
      code: `var city = "Karachi";\nif (city === "karachi") {\n   alert("Correct");\n} else {\n   alert("Wrong");\n}`,
      options: ["Karachi", "Correct", "Error", "Wrong"],
      correctAnswer: 3
    },
    {
      question: "What will be the output?",
      code: `var x = 5;\nif (x === "5") {\n   alert("Equal");\n} else {\n   alert("Not Equal");\n}`,
      options: ["Error", "Equal", "5", "Not Equal"],
      correctAnswer: 3
    },
    {
      question: "What will be the output?",
      code: `var num = 10;\nif (num % 2 === 0) {\n   alert("Even");\n} else {\n   alert("Odd");\n}`,
      options: ["Odd", "Error", "undefined", "Even"],
      correctAnswer: 3
    }
  ]
};

console.log("✅ Easy Quiz Loaded - 40 Questions (Options Shuffled)");



// ==================== MEDIUM LEVEL (40 MCQs)  ====================
const mediumQuiz = {
  title: "JavaScript Medium Quiz",
  difficulty: "medium",
  timeLimit: 3000, // 50 minutes
  questions: [
    {
      question: "What will be the output?",
      code: `var city = "KaRaChI";\nalert(city.toLowerCase().toUpperCase());`,
      options: ["Error", "karachi", "Karachi", "KARACHI"],
      correctAnswer: 3
    },
    {
      question: "What will be printed?",
      code: `var text = "JavaScript";\nalert(text.slice(-6));`,
      options: ["avaScr", "Java", "Error", "Script"],
      correctAnswer: 3
    },
    {
      question: "What will be the output?",
      code: `var text = "Programming";\nalert(text.slice(3, 3));`,
      options: ["gram", "undefined", "Error", "Empty string"],
      correctAnswer: 3
    },
    {
      question: "Why does slice() not modify the original string?",
      options: ["slice() works only on arrays", "JavaScript blocks modification automatically", "slice() creates loops internally", "Strings are immutable in JavaScript"],
      correctAnswer: 3
    },
    {
      question: "What will be the output?",
      code: `var text = "JavaScript";\nalert(text.indexOf("a", 2));`,
      options: ["1", "-1", "5", "3"],
      correctAnswer: 3
    },
    {
      question: "What will be printed?",
      code: `var text = "Mississippi";\nalert(text.indexOf("iss"));`,
      options: ["4", "7", "0", "1"],
      correctAnswer: 3
    },
    {
      question: "typeof NaN is:",
      options: ["number", "NaN", "undefined", "string"],
      correctAnswer: 0
    },
    {
      question: "What will happen here?",
      code: `var text = "abcabc";\nalert(text.replace("abc", "x"));`,
      options: ["xx", "abcx", "Error", "xabc"],
      correctAnswer: 3
    },
    {
      question: "Which method extracts a character?",
      options: ["slice()", "charAt()", "split()", "concat()"],
      correctAnswer: 1
    },
    {
      question: "What is the main difference between Math.floor() and Math.trunc() in positive numbers?",
      options: ["floor() returns decimals", "No difference for positive decimals", "trunc() rounds upward", "floor() rounds upward"],
      correctAnswer: 1
    },
    {
      question: "What will be the output?",
      code: `alert(Math.ceil(-4.8));`,
      options: ["-5", "4", "5", "-4"],
      correctAnswer: 3
    },
    {
      question: "What will be the output?",
      code: `alert(Math.floor(Math.random() * 10));`,
      options: ["1 to 9", "0 to 10", "1 to 10", "0 to 9"],
      correctAnswer: 3
    },
    {
      question: "Strings are compared using:",
      options: ["ASCII values", "Numbers", "Objects", "Arrays"],
      correctAnswer: 0
    },
    {
      question: "What will be the output?",
      code: `var num = parseFloat("12.99abc");\nalert(num);`,
      options: ["12", "NaN", "abc", "12.99"],
      correctAnswer: 3
    },
    {
      question: '"abc".length type is:',
      options: ["string", "number", "boolean", "object"],
      correctAnswer: 1
    },
    {
      question: "What will be printed?",
      code: `var num = 15.6789;\nalert(num.toFixed(0));`,
      options: ["15.6", "16", "15", "16.0"],
      correctAnswer: 1
    },
    {
      question: "What will be the output?",
      code: `var num = 4.335;\nalert(num.toFixed(2));`,
      options: ["4.33", "4.30", "4.35", "4.34"],
      correctAnswer: 3
    },
    {
      question: "Why does toFixed() return a string instead of number?",
      options: ["To reduce memory usage", "Because decimals cannot be numbers", "To preserve exact formatting and trailing zeros", "Because JavaScript arrays require strings"],
      correctAnswer: 2
    },
    {
      question: "What will be printed?",
      code: `var num = 3.1;\nalert(num.toFixed(3));`,
      options: ["3.000", "3.1", "3.111", "3.100"],
      correctAnswer: 3
    },
    {
      question: "What will be the output?",
      code: `var num = "5.9";\nalert(parseInt(num) + parseFloat(num));`,
      options: ["10", "11.8", "Error", "10.9"],
      correctAnswer: 3
    },
    {
      question: "Math.random() returns:",
      options: ["Integer", "0 to 1 decimal", "Negative number", "String"],
      correctAnswer: 1
    },
    {
      question: "What will happen here?",
      code: `var num = "abc";\nalert(parseInt(num));`,
      options: ["0", "abc", "undefined", "NaN"],
      correctAnswer: 3
    },
    {
      question: "Random number range default:",
      options: ["1–10", "0–1", "0–100", "-1 to 1"],
      correctAnswer: 1
    },
    {
      question: "Number(true) returns:",
      options: ["0", "1", "true", "NaN"],
      correctAnswer: 1
    },
    {
      question: "What is the range returned by getMonth()?",
      options: ["1–12", "0–12", "1–11", "0–11"],
      correctAnswer: 3
    },
    {
      question: "What will this print in January?",
      code: `var d = new Date("January 1, 2026");\nalert(d.getMonth());`,
      options: ["January", "1", "undefined", "0"],
      correctAnswer: 3
    },
    {
      question: "What will be printed?",
      code: `var d = new Date("July 20, 2026");\nalert(d.getDay());`,
      options: ["Day name", "Month index", "Day of month", "Day index of week"],
      correctAnswer: 3
    },
    {
      question: "What is the difference between getDate() and getDay()?",
      options: ["Both are same", "getDate() returns weekday index", "getDate() returns month date while getDay() returns weekday index", "getDay() returns day of month"],
      correctAnswer: 2
    },
    {
      question: "What will be the output?",
      code: `var d = new Date();\nd.setFullYear(2030);\nalert(d.getFullYear());`,
      options: ["Current year", "Error", "undefined", "2030"],
      correctAnswer: 3
    },
    {
      question: "What will happen here?",
      code: `var d = new Date();\nd.setMonth(12);\nalert(d.getMonth());`,
      options: ["12", "Error", "undefined", "0"],
      correctAnswer: 3
    },
    {
      question: "getTime() returns:",
      options: ["Date string", "Milliseconds", "Year", "Month"],
      correctAnswer: 1
    },
    {
      question: "What will be the output?",
      code: `var d = new Date(0);\nalert(d.getFullYear());`,
      options: ["1969", "2000", "0", "1970"],
      correctAnswer: 3
    },
    {
      question: "What will be printed?",
      code: `var ms = Date.now();\nalert(typeof ms);`,
      options: ["object", "string", "boolean", "number"],
      correctAnswer: 3
    },
    {
      question: "What will be the output?",
      code: `switch(2){\n case 1: alert("One"); break;\n case 2: alert("Two"); break;\n default: alert("None");\n}`,
      options: ["One", "None", "Error", "Two"],
      correctAnswer: 3
    },
    {
      question: "What happens if break is missing in switch?",
      options: ["Error", "Only one case runs", "Nothing happens", "Fall-through occurs"],
      correctAnswer: 3
    },
    {
      question: "What will happen?",
      code: `switch("1"){\n case 1: alert("Number"); break;\n case "1": alert("String"); break;\n}`,
      options: ["Number", "Both", "Error", "String"],
      correctAnswer: 3
    },
    {
      question: "Why does switch use strict comparison?",
      options: ["Uses ==", "Uses !=", "Uses >", "Uses === internally"],
      correctAnswer: 3
    },
    {
      question: "What does this expression calculate? ms / (1000 * 60)",
      options: ["Hours", "Days", "Seconds", "Minutes"],
      correctAnswer: 3
    },
    {
      question: "What is 1 day in milliseconds?",
      options: ["1000 * 60 * 60", "60 * 60 * 24", "1000 * 24", "1000 * 60 * 60 * 24"],
      correctAnswer: 3
    },
    {
      question: "What will be the output?",
      code: `var ms = 3600000;\nvar hours = ms / (1000 * 60 * 60);\nalert(hours);`,
      options: ["3600", "60", "0", "1"],
      correctAnswer: 3
    }
  ]
};

console.log("✅ Medium Quiz Loaded Successfully! Total Questions:", mediumQuiz.questions.length);



// ==================== HARD LEVEL (40 MCQs) - OPTIONS SHUFFLED ====================
const hardQuiz = {
  title: "JavaScript Hard Quiz",
  difficulty: "hard",
  timeLimit: 3600, // 60 minutes
  questions: [
    {
      question: "What will be the output?",
      code: `var num = 1.005;\nalert(num.toFixed(2));`,
      options: ["1.00", "1.005", "1.01", "1.00"],
      correctAnswer: 2
    },
    {
      question: "What will be printed?",
      code: `console.log(Math.round(0.5) + " | " + Math.round(-0.5));`,
      options: ["1 | -1", "0 | -0", "1 | 0", "1 | -0"],
      correctAnswer: 2
    },
    {
      question: "What is the output?",
      code: `var d = new Date("2026-02-29");\nalert(d.getMonth() + 1);`,
      options: ["2", "NaN", "1", "3"],
      correctAnswer: 3
    },
    {
      question: "What will be the output?",
      code: `var text = "JavaScript";\nvar result = text.substring(4, 10) + text.substr(0, 4);\nalert(result);`,
      options: ["ScriptJava", "JavaScriptJava", "riptJava", "JavaScriptScript"],
      correctAnswer: 0
    },
    {
      question: "What will be the output?",
      code: `var arr = [10, 20, 30, 40, 50];\narr.splice(2, 2, 100, 200, 300);\nalert(arr.length);`,
      options: ["5", "6", "7", "8"],
      correctAnswer: 1
    },
    {
      question: "What will be printed?",
      code: `var text = "Hello World";\nvar result = text.replace("o", "X").replace("o", "Y");\nalert(result);`,
      options: ["HellX WYrld", "HellY WXrld", "HellX WXrld", "HellX World"],
      correctAnswer: 3
    },
    {
      question: "What will be the output?",
      code: `var num = 123.456789;\nvar result = Math.ceil(num * 100) / 100;\nalert(result);`,
      options: ["123.45", "123.46", "124", "123.456789"],
      correctAnswer: 1
    },
    {
      question: "What will happen?",
      code: `var text = "Hello";\nvar result = text.concat(" ", "World", "!");\nalert(result.length);`,
      options: ["11", "12", "13", "10"],
      correctAnswer: 1
    },
    {
      question: "What will be the output?",
      code: `var d = new Date();\nd.setDate(32);\nalert(d.getDate());`,
      options: ["32", "Error", "1", "2"],
      correctAnswer: 2
    },
    {
      question: "What will be the result?",
      code: `function test(a, b) {\n  a = 10;\n  alert(a + b);\n}\ntest(5, 5);`,
      options: ["15", "10", "20", "NaN"],
      correctAnswer: 2
    },
    {
      question: "What will happen?",
      code: `function test(a, b) {\n  alert(a + b);\n}\nvar x = test(2, 3);\nalert(x);`,
      options: ["5 then 5", "undefined then 5", "5 then undefined", "Error"],
      correctAnswer: 2
    },
    {
      question: "What will be output?",
      code: `function test(a) {\n  if (!a) {\n    return "Empty";\n  }\n  return a;\n}\nalert(test(0));`,
      options: ["0", "undefined", "Empty", "Error"],
      correctAnswer: 2
    },
    {
      question: "What will be the output?",
      code: `var x = "px10";\nalert(parseInt(x));`,
      options: ["10", "0", "NaN", "Error"],
      correctAnswer: 2
    },
    {
      question: "What will be printed?",
      code: `var arr = [5, 10, 15, 20, 25];\nvar sliced = arr.slice(-3, -1);\nalert(sliced.length);`,
      options: ["3", "2", "4", "1"],
      correctAnswer: 1
    },
    {
      question: "What will be the output?",
      code: `var text = "Programming";\nalert(text.lastIndexOf("m"));`,
      options: ["6", "7", "5", "8"],
      correctAnswer: 1
    },
    {
      question: "What will happen?",
      code: `var d = new Date(2026, 0, 32);\nalert(d.getDate() + "-" + (d.getMonth() + 1));`,
      options: ["32-1", "1-2", "32-2", "Invalid Date"],
      correctAnswer: 1
    },
    {
      question: "What will be printed?",
      code: `var result = 0;\nfunction add(x) {\n  return result += x;\n}\nadd(5);\nadd(10);\nadd(add(15));\nalert(result);`,
      options: ["30", "45", "15", "50"],
      correctAnswer: 1
    },
    {
      question: "What will be the output?",
      code: `var val = "0";\nswitch(val){\n  case 0: alert("Number"); break;\n  case "0": alert("String"); break;\n}`,
      options: ["Number", "Default", "String", "Error"],
      correctAnswer: 2
    },
    {
      question: "What will be alerted?",
      code: `var d = new Date(2026, 11, 31);\nd.setDate(d.getDate() + 2);\nalert(d.getDate());`,
      options: ["33", "2", "1", "31"],
      correctAnswer: 1
    },
    {
      question: "What will be the output?",
      code: `function demo() {\n  var x = 5;\n}\nalert(x);`,
      options: ["5", "undefined", "ReferenceError", "null"],
      correctAnswer: 2
    },
    {
      question: "What does String.fromCharCode(65, 66, 67) return?",
      options: ["656667", "ABC", "Error", "undefined"],
      correctAnswer: 1
    },
    {
      question: "Why does missing parameter cause NaN?",
      options: ["Missing values become false", "Missing parameter becomes undefined", "Functions require arrays only", "JavaScript ignores missing values"],
      correctAnswer: 1
    },
    {
      question: "Why do we use +1 in this code? Math.floor(Math.random() * 6) + 1",
      options: ["To remove decimals", "To avoid getting 0 as result", "To increase randomness", "To create arrays"],
      correctAnswer: 1
    },
    {
      question: "What happens when setMonth(12) is called?",
      options: ["Error", "Month becomes 12", "JavaScript automatically adjusts overflowing date values", "It returns January of same year"],
      correctAnswer: 2
    },
    {
      question: "Why can Date objects be compared with > and < ?",
      options: ["Dates are strings internally", "Dates are automatically converted into milliseconds", "JavaScript compares only years", "Date objects are arrays"],
      correctAnswer: 1
    },
    {
      question: "What will be printed?",
      code: `function calc(a, b, c) {\n  return a + b + c;\n}\nalert(calc(1, 2));`,
      options: ["3", "undefined", "NaN", "Error"],
      correctAnswer: 2
    },
    {
      question: "What will be the output?",
      code: `var text = "Hello World";\nalert(text.indexOf("o", text.indexOf("o") + 1));`,
      options: ["4", "-1", "7", "5"],
      correctAnswer: 2
    },
    {
      question: "Date object is created using:",
      options: ["new Date()", "Date()", "time()", "clock()"],
      correctAnswer: 0
    },
    {
      question: "Numbers are passed by value. What will be alerted?",
      code: `function test(x) {\n   x = x + 5;\n}\nvar num = 10;\ntest(num);\nalert(num);`,
      options: ["15", "10", "undefined", "Error"],
      correctAnswer: 1
    },
    {
      question: "What will be the output?",
      code: `alert(Math.floor(-4.2));`,
      options: ["-4", "-5", "-4.2", "4"],
      correctAnswer: 1
    },
    // Continuing to make total 40...
    {
      question: "What will be printed after return statement?",
      code: `function test() {\n  return "Hello";\n  alert("World");\n}\nalert(test());`,
      options: ["Hello and World", "World", "Hello", "Nothing"],
      correctAnswer: 2
    },
    {
      question: "What is the correct way to convert milliseconds to days?",
      options: ["ms * 1000*60*60*24", "ms / 1000", "ms / (1000*60*60*24)", "ms / 24"],
      correctAnswer: 2
    },
    {
      question: "What will be the output?",
      code: `var arr = [1, 2, 3, 4, 5];\nvar result = arr.slice(1, 4).length + arr.slice(-2).length;\nalert(result);`,
      options: ["5", "6", "4", "7"],
      correctAnswer: 0
    },
    {
      question: "What will happen with this Date?",
      code: `var d = new Date("2025-02-30");\nalert(d.getDate());`,
      options: ["30", "Error", "28 or 29", "1 or 2 (overflow)"],
      correctAnswer: 3
    },
    {
      question: "What is the output?",
      code: `var num = 45.678;\nalert(Math.round(num * 10) / 10);`,
      options: ["45.6", "45.7", "46", "45.68"],
      correctAnswer: 1
    },
    {
      question: "What will be the output?",
      code: `var text = "JavaScript";\nalert(text.charCodeAt(0));`,
      options: ["J", "74", "106", "Error"],
      correctAnswer: 1
    },
    {
      question: "What will be alerted?",
      code: `var arr = [10, 20, 30];\narr[5] = 50;\nalert(arr.length);`,
      options: ["3", "4", "5", "6"],
      correctAnswer: 3
    },
    {
      question: "What will be the final value?",
      code: `var result = 0;\nfunction add(x) { result += x; return result; }\nalert(add(5) + add(10) + add(15));`,
      options: ["30", "45", "15", "35"],
      correctAnswer: 1
    },
    {
      question: "What will be the output?",
      code: `var arr = [1, 2, 3];\nvar arr2 = arr;\narr2.push(4);\narr = [5, 6];\nalert(arr2.length);`,
      options: ["3", "4", "2", "Error"],
      correctAnswer: 1
    },
    {
      question: "What will be the output?",
      code: `var d = new Date(2026, 5, 15);\nvar day = d.getDay();\nvar days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];\nalert(days[day]);`,
      options: ["Mon", "Tue", "Wed", "Thu"],
      correctAnswer: 0
    }
  ]
};

console.log("✅ Hard Quiz Loaded Successfully! Total Questions:", hardQuiz.questions.length);


// ========== QUIZ 2: With 3 Levels ==========
const quiz2 = {
  title: "JavaScript Quiz (Chapter 21 to 40)",
  levels: [
    {
      difficulty: "easy",
      timeLimit: 1800, // 30 minutes
      questions: easyQuiz.questions
    },
    {
      difficulty: "medium",
      timeLimit: 1800, // 30 minutes
      questions: mediumQuiz.questions
    },
    {
      difficulty: "hard",
      timeLimit: 2400, // 40 minutes
      questions: hardQuiz.questions
    }
  ]
};

console.log("✅ Quiz 2 Created with 3 Levels:");
console.log("   - Easy:", quiz2.levels[0].questions.length, "questions");
console.log("   - Medium:", quiz2.levels[1].questions.length, "questions");
console.log("   - Hard:", quiz2.levels[2].questions.length, "questions");


const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");

    await Quiz.deleteMany({});
    await Quiz.create([quiz1, quiz2]);

    console.log("✅ Quizzes seeded successfully!");
    console.log("📝 Quiz 1 (Chapter 1-20): 80 questions");
    console.log("📝 Quiz 2 (Chapter 1-40): 3 levels with 120 total questions");

    console.log("🎯 Grand Total: 200 questions across 2 quizzes");
    process.exit(0);
  } catch (error) {
    console.error("Seed error:", error.message);
    process.exit(1);
  }
};

seedDB();
