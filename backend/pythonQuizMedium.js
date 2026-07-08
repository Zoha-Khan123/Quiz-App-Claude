// 70 Medium-Level Python Questions

export const pythonQuizMedium = {
  title: "Python Complete Course Quiz (Class 1-9)",
  difficulty: "medium",
  timeLimit: 3600,
  questions: [
    // Class 01: Programming (8 questions)
    {
      question: "What happens when you run a Python program?",
      options: [
        "It is directly executed by CPU",
        "It is converted to machine code then executed",
        "It is interpreted line by line by Python interpreter",
        "It is compiled into binary first"
      ],
      correctAnswer: 2
    },
    {
      question: "Which statement is TRUE about high-level languages?",
      options: [
        "They execute faster than low-level languages",
        "They are platform-dependent",
        "They are easier to write but slower to execute",
        "They don't need any translator"
      ],
      correctAnswer: 2
    },
    {
      question: "What does an interpreter do?",
      options: [
        "Converts entire code to machine code at once",
        "Executes code line by line without creating executable",
        "Only checks for syntax errors",
        "Creates .exe files"
      ],
      correctAnswer: 1
    },
    {
      question: "Why is Python called a high-level language?",
      options: [
        "Because it runs on powerful computers only",
        "Because it has complex syntax",
        "Because it abstracts hardware details and is human-readable",
        "Because it was created recently"
      ],
      correctAnswer: 2
    },
    {
      question: "What is the main difference between compiler and interpreter?",
      options: [
        "Compiler is faster, interpreter is slower",
        "Compiler converts entire code at once, interpreter line by line",
        "Compiler is for Python, interpreter is for Java",
        "Compiler needs internet, interpreter doesn't"
      ],
      correctAnswer: 1
    },
    {
      question: "Which is NOT a programming language?",
      options: [
        "Python",
        "HTML",
        "Java",
        "C++"
      ],
      correctAnswer: 1
    },
    {
      question: "What makes Python beginner-friendly?",
      options: [
        "It has no syntax rules",
        "It uses simple English-like syntax",
        "It doesn't need to be installed",
        "It runs without errors"
      ],
      correctAnswer: 1
    },
    {
      question: "Assembly language is closer to:",
      options: [
        "Human language",
        "Python syntax",
        "Machine language",
        "English"
      ],
      correctAnswer: 2
    },

    // Class 02: Python Basics (8 questions)
    {
      question: "What will be the output?",
      code: `print(type(print("Hello")))`,
      options: [
        "<class 'str'>",
        "<class 'NoneType'>",
        "Hello",
        "Error"
      ],
      correctAnswer: 1
    },
    {
      question: "Python is an open-source language, which means:",
      options: [
        "It's free to use but can't be modified",
        "It's free to use and modify",
        "It's paid but source code is visible",
        "It only works on Linux"
      ],
      correctAnswer: 1
    },
    {
      question: "What does .py file extension represent?",
      options: [
        "Python compiled file",
        "Python source code file",
        "Python library",
        "Python executable"
      ],
      correctAnswer: 1
    },
    {
      question: "What will happen if you run print(Hello) without quotes?",
      options: [
        "Prints Hello",
        "NameError: name 'Hello' is not defined",
        "SyntaxError",
        "Prints nothing"
      ],
      correctAnswer: 1
    },
    {
      question: "Which company does NOT use Python?",
      options: [
        "Google",
        "Netflix",
        "Instagram",
        "All of them use Python"
      ],
      correctAnswer: 3
    },
    {
      question: "What is the output?",
      code: `x = print("Test")\nprint(x)`,
      options: [
        "Test Test",
        "Test None",
        "Test",
        "None"
      ],
      correctAnswer: 1
    },
    {
      question: "Python is used for:",
      options: [
        "Only web development",
        "Only data science",
        "Web, AI, automation, data science, and more",
        "Only game development"
      ],
      correctAnswer: 2
    },
    {
      question: "What makes Python portable?",
      options: [
        "It's small in size",
        "It runs on Windows, Linux, and macOS",
        "It can be copied to USB",
        "It doesn't need installation"
      ],
      correctAnswer: 1
    },

    // Class 03: Variables (8 questions)
    {
      question: "What is the output?",
      code: `x = 10\ny = x\ny = 20\nprint(x)`,
      options: [
        "20",
        "10",
        "30",
        "Error"
      ],
      correctAnswer: 1
    },
    {
      question: "Which is a valid variable name?",
      options: [
        "my-variable",
        "2variable",
        "_variable",
        "class"
      ],
      correctAnswer: 2
    },
    {
      question: "What is the output?",
      code: `a = b = c = 5\nprint(a + b + c)`,
      options: [
        "5",
        "15",
        "555",
        "Error"
      ],
      correctAnswer: 1
    },
    {
      question: "What happens here?",
      code: `age = 25\nage = \"Twenty Five\"\nprint(type(age))`,
      options: [
        "<class 'int'>",
        "<class 'str'>",
        "Error",
        "<class 'float'>"
      ],
      correctAnswer: 1
    },
    {
      question: "Variables in Python are case-sensitive. What's the output?",
      code: `Name = \"Ali\"\nname = \"Ahmed\"\nprint(Name)`,
      options: [
        "Ahmed",
        "Ali",
        "Error",
        "Ali Ahmed"
      ],
      correctAnswer: 1
    },
    {
      question: "What is the output?",
      code: `x = 5\nprint(x, type(x))`,
      options: [
        "5 int",
        "5 <class 'int'>",
        "5",
        "int"
      ],
      correctAnswer: 1
    },
    {
      question: "Which keyword cannot be used as variable name?",
      options: [
        "data",
        "for",
        "name",
        "value"
      ],
      correctAnswer: 1
    },
    {
      question: "What is the output?",
      code: `price = 99.99\nprint(type(price))`,
      options: [
        "<class 'int'>",
        "<class 'float'>",
        "<class 'double'>",
        "<class 'decimal'>"
      ],
      correctAnswer: 1
    },

    // Class 04: Operators (10 questions)
    {
      question: "What is the output?",
      code: `print(10 / 3)`,
      options: [
        "3",
        "3.3333333333333335",
        "3.33",
        "4"
      ],
      correctAnswer: 1
    },
    {
      question: "What is the output?",
      code: `print(10 ** 2)`,
      options: [
        "20",
        "100",
        "1000",
        "12"
      ],
      correctAnswer: 1
    },
    {
      question: "What is the output?",
      code: `x = 10\nx += 5\nx *= 2\nprint(x)`,
      options: [
        "20",
        "30",
        "25",
        "40"
      ],
      correctAnswer: 1
    },
    {
      question: "What is the output?",
      code: `print(5 > 3 and 10 < 20)`,
      options: [
        "True",
        "False",
        "Error",
        "None"
      ],
      correctAnswer: 0
    },
    {
      question: "What is the output?",
      code: `print(not True)`,
      options: [
        "True",
        "False",
        "1",
        "0"
      ],
      correctAnswer: 1
    },
    {
      question: "What is the output?",
      code: `print(15 % 4)`,
      options: [
        "3",
        "4",
        "3.75",
        "0"
      ],
      correctAnswer: 0
    },
    {
      question: "What is the output?",
      code: `print(5 == 5 and 10 != 10)`,
      options: [
        "True",
        "False",
        "Error",
        "None"
      ],
      correctAnswer: 1
    },
    {
      question: "What is the output?",
      code: `x = 10\nprint(x > 5 or x < 3)`,
      options: [
        "True",
        "False",
        "Error",
        "10"
      ],
      correctAnswer: 0
    },
    {
      question: "What is the output?",
      code: `print(2 ** 3 ** 2)`,
      options: [
        "64",
        "512",
        "8",
        "12"
      ],
      correctAnswer: 1
    },
    {
      question: "What is the output?",
      code: `print(10 // 4 * 2)`,
      options: [
        "5",
        "4",
        "1.25",
        "2"
      ],
      correctAnswer: 1
    },

    // Class 05: Type Conversion & Input (8 questions)
    {
      question: "What is the output?",
      code: `x = \"100\"\ny = \"200\"\nprint(int(x) + int(y))`,
      options: [
        "100200",
        "300",
        "Error",
        "None"
      ],
      correctAnswer: 1
    },
    {
      question: "What happens here?",
      code: `num = int(\"25.5\")`,
      options: [
        "num becomes 25",
        "num becomes 25.5",
        "ValueError",
        "num becomes 26"
      ],
      correctAnswer: 2
    },
    {
      question: "What is the output?",
      code: `x = float(\"10\")\nprint(x, type(x))`,
      options: [
        "10 <class 'int'>",
        "10.0 <class 'float'>",
        "10 <class 'float'>",
        "Error"
      ],
      correctAnswer: 1
    },
    {
      question: "What is the output?",
      code: `a = 5\nb = 2.0\nresult = a + b\nprint(type(result))`,
      options: [
        "<class 'int'>",
        "<class 'float'>",
        "<class 'str'>",
        "Error"
      ],
      correctAnswer: 1
    },
    {
      question: "What is the output?",
      code: `print(str(100) + str(200))`,
      options: [
        "300",
        "100200",
        "Error",
        "None"
      ],
      correctAnswer: 1
    },
    {
      question: "What type conversion happens automatically?",
      code: `result = 10 + 5.5`,
      options: [
        "Float to int",
        "Int to float",
        "No conversion",
        "Error"
      ],
      correctAnswer: 1
    },
    {
      question: "What is the output?",
      code: `# This is a comment\nprint(\"Hello\")`,
      options: [
        "# This is a comment Hello",
        "Hello",
        "Error",
        "Nothing"
      ],
      correctAnswer: 1
    },
    {
      question: "Multi-line comments in Python use:",
      options: [
        "/* */",
        "''' ''' or \"\"\" \"\"\"",
        "// //",
        "<!-- -->"
      ],
      correctAnswer: 1
    },

    // Class 06: Strings (8 questions)
    {
      question: "What is the output?",
      code: `text = \"Python\"\nprint(text[-1])`,
      options: [
        "P",
        "n",
        "Error",
        "-1"
      ],
      correctAnswer: 1
    },
    {
      question: "What is the output?",
      code: `text = \"Hello\"\ntext[0] = \"J\"`,
      options: [
        "Jello",
        "TypeError",
        "Hello",
        "Error: immutable"
      ],
      correctAnswer: 1
    },
    {
      question: "What is the output?",
      code: `text = \"Python\"\nprint(text[1:4])`,
      options: [
        "Pyt",
        "yth",
        "ytho",
        "Pyth"
      ],
      correctAnswer: 1
    },
    {
      question: "What is the output?",
      code: `text = \"hello\"\nresult = text.upper()\nprint(text)`,
      options: [
        "HELLO",
        "hello",
        "Hello",
        "Error"
      ],
      correctAnswer: 1
    },
    {
      question: "What is the output?",
      code: `text = \"Python Programming\"\nprint(text.count(\"m\"))`,
      options: [
        "1",
        "2",
        "3",
        "0"
      ],
      correctAnswer: 1
    },
    {
      question: "What is the output?",
      code: `text = \"Hello World\"\nprint(text.replace(\"World\", \"Python\"))`,
      options: [
        "Hello World",
        "Hello Python",
        "Python World",
        "Error"
      ],
      correctAnswer: 1
    },
    {
      question: "What is the output?",
      code: `text = \"Python\"\nprint(text.find(\"x\"))`,
      options: [
        "0",
        "-1",
        "None",
        "Error"
      ],
      correctAnswer: 1
    },
    {
      question: "What is the output?",
      code: `print(\"Hello\\nWorld\")`,
      options: [
        "Hello\\nWorld",
        "Hello\nWorld",
        "HelloWorld",
        "Error"
      ],
      correctAnswer: 1
    },

    // Class 07: Conditionals (8 questions)
    {
      question: "What is the output?",
      code: `x = 0\nif x:\n    print(\"True\")\nelse:\n    print(\"False\")`,
      options: [
        "True",
        "False",
        "0",
        "Error"
      ],
      correctAnswer: 1
    },
    {
      question: "What is the output?",
      code: `x = 10\nif x > 5:\n    if x < 15:\n        print(\"Middle\")\nelse:\n    print(\"Outside\")`,
      options: [
        "Middle",
        "Outside",
        "Middle Outside",
        "Error"
      ],
      correctAnswer: 0
    },
    {
      question: "Which value is Falsy?",
      options: [
        "\"0\"",
        "[]",
        "\" \"",
        "[0]"
      ],
      correctAnswer: 1
    },
    {
      question: "What is the output?",
      code: `age = 18\nif age >= 18:\n    print(\"Adult\")\nelif age >= 13:\n    print(\"Teen\")\nelse:\n    print(\"Child\")`,
      options: [
        "Adult",
        "Teen",
        "Child",
        "Adult Teen"
      ],
      correctAnswer: 0
    },
    {
      question: "What is the output?",
      code: `x = 5\nif x > 3 and x < 10:\n    print(\"Yes\")\nelse:\n    print(\"No\")`,
      options: [
        "Yes",
        "No",
        "Error",
        "None"
      ],
      correctAnswer: 0
    },
    {
      question: "What is the output?",
      code: `if \"\":\n    print(\"A\")\nelse:\n    print(\"B\")`,
      options: [
        "A",
        "B",
        "AB",
        "Error"
      ],
      correctAnswer: 1
    },
    {
      question: "What is the output?",
      code: `x = 15\nif x > 10:\n    pass\nprint(\"Done\")`,
      options: [
        "Nothing",
        "Done",
        "Error",
        "10"
      ],
      correctAnswer: 1
    },
    {
      question: "What is the output?",
      code: `x = 20\nif x > 10 or x < 5:\n    print(\"True\")\nelse:\n    print(\"False\")`,
      options: [
        "True",
        "False",
        "Error",
        "None"
      ],
      correctAnswer: 0
    },

    // Class 08: Lists & Tuples (6 questions)
    {
      question: "What is the output?",
      code: `lst = [1, 2, 3]\nlst.append([4, 5])\nprint(len(lst))`,
      options: [
        "3",
        "4",
        "5",
        "Error"
      ],
      correctAnswer: 1
    },
    {
      question: "What is the output?",
      code: `lst = [1, 2, 3, 4, 5]\nprint(lst[-2:])`,
      options: [
        "[4, 5]",
        "[5]",
        "[3, 4]",
        "[-2]"
      ],
      correctAnswer: 0
    },
    {
      question: "What happens here?",
      code: `tup = (1, 2, 3)\ntup[0] = 10`,
      options: [
        "tup becomes (10, 2, 3)",
        "TypeError",
        "Error: immutable",
        "No error"
      ],
      correctAnswer: 1
    },
    {
      question: "What is the output?",
      code: `lst = [3, 1, 2]\nlst.sort()\nprint(lst.pop())`,
      options: [
        "3",
        "1",
        "2",
        "[3, 1, 2]"
      ],
      correctAnswer: 0
    },
    {
      question: "What is the output?",
      code: `lst = [1, 2, 3]\nlst2 = lst\nlst2.append(4)\nprint(len(lst))`,
      options: [
        "3",
        "4",
        "Error",
        "None"
      ],
      correctAnswer: 1
    },
    {
      question: "What is the output?",
      code: `tup = (1,)\nprint(type(tup))`,
      options: [
        "<class 'int'>",
        "<class 'tuple'>",
        "<class 'list'>",
        "Error"
      ],
      correctAnswer: 1
    },

    // Class 09: Dictionaries & Sets (8 questions)
    {
      question: "What is the output?",
      code: `d = {\"a\": 1, \"b\": 2}\nd[\"a\"] = 10\nprint(d[\"a\"])`,
      options: [
        "1",
        "10",
        "Error",
        "None"
      ],
      correctAnswer: 1
    },
    {
      question: "What is the output?",
      code: `d = {\"a\": 1, \"b\": 2}\nprint(d.get(\"c\", 0))`,
      options: [
        "None",
        "0",
        "Error",
        "KeyError"
      ],
      correctAnswer: 1
    },
    {
      question: "What is the output?",
      code: `s = {1, 2, 2, 3, 3, 3}\nprint(len(s))`,
      options: [
        "6",
        "3",
        "4",
        "Error"
      ],
      correctAnswer: 1
    },
    {
      question: "What happens here?",
      code: `d = {[1, 2]: \"value\"}`,
      options: [
        "No error",
        "TypeError: unhashable type",
        "Creates dictionary",
        "KeyError"
      ],
      correctAnswer: 1
    },
    {
      question: "What is the output?",
      code: `s1 = {1, 2, 3}\ns2 = {3, 4, 5}\nprint(len(s1.union(s2)))`,
      options: [
        "3",
        "5",
        "6",
        "Error"
      ],
      correctAnswer: 1
    },
    {
      question: "What is the output?",
      code: `d = {\"name\": \"Ali\", \"age\": 20}\nprint(len(d.keys()))`,
      options: [
        "1",
        "2",
        "3",
        "Error"
      ],
      correctAnswer: 1
    },
    {
      question: "What is the output?",
      code: `s = {1, 2, 3}\ns.add(2)\nprint(len(s))`,
      options: [
        "3",
        "4",
        "2",
        "Error"
      ],
      correctAnswer: 0
    },
    {
      question: "What is the output?",
      code: `s1 = {1, 2, 3}\ns2 = {2, 3, 4}\nprint(len(s1.intersection(s2)))`,
      options: [
        "1",
        "2",
        "3",
        "4"
      ],
      correctAnswer: 1
    }
  ]
};
