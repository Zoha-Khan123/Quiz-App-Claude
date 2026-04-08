import dotenv from "dotenv";
import mongoose from "mongoose";
import Quiz from "./models/Quiz.js";

dotenv.config();

// ========== EASY LEVEL (40 Questions) ==========
const easyQuiz = {
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



const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");

    await Quiz.deleteMany({});
    await Quiz.create(easyQuiz);

    console.log(
      "Quiz seeded successfully! (80 questions total)"
    );
    process.exit(0);
  } catch (error) {
    console.error("Seed error:", error.message);
    process.exit(1);
  }
};

seedDB();
