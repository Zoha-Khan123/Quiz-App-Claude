# 📘 Lecture 05: Comments, Type Conversion, and Input Function in Python  

Welcome to the Python Summer Camp Class 05!

In this lecture, we will learn about comments, type conversion, and the `input()` function in Python.

Comments help programmers write understandable and clean code.  
Type conversion helps us change one data type into another.  
The `input()` function allows users to enter data during program execution.

These concepts are very important for writing interactive and user-friendly Python programs.

---

# Comments, Type Conversion, and Input Function Concepts

- What are Comments
- Why We Use Comments
- Single Line Comments
- Multi Line Comments
- What is Type Conversion
- Implicit Type Conversion
- Explicit Type Conversion (Type Casting)
- Type Casting Functions
- `input()` Function
- Input Data Type
- Converting String Input into Integer
- Converting String Input into Float

---

# 📗 1. Comments in Python

Comments are used to explain code.

Python ignores comments during program execution.

Comments help programmers understand the code easily.

---

## Why We Use Comments?

- To explain code
- To improve readability
- To make code easier to understand
- To write notes for programmers

---

# 📙 Types of Comments in Python

There are two types of comments in Python:

1. Single Line Comments
2. Multi Line Comments

---

# 📘 Single Line Comments

Single line comments are written using the `#` symbol.

Anything written after `#` is ignored by Python.

---

## Example

```python
# This is a single line comment

print("Hello World")
```

Output:

```python
Hello World
```

---

## Another Example

```python
# Storing age
age = 20

print(age)
```

Output:

```python
20
```

---

# 📕 Multi Line Comments

Multi line comments are used to write comments in multiple lines.

They are written using triple quotes:

- `''' '''`
- `""" """`

---

## Example

```python
"""
This is a multi line comment
Python ignores this text
Used for explanations
"""

print("Python")
```

Output:

```python
Python
```

---

## Another Example

```python
'''
Name: Zoha Khan
Course: Python
Lecture: 05
'''

print("Welcome")
```

Output:

```python
Welcome
```

---

# 📒 Important Note

Python does not have a separate multi line comment syntax like some languages.

Mostly triple quotes are used as multi line comments.

---

# 📗 2. Type Conversion in Python

Type Conversion means converting one data type into another data type.

---

## Simple Definition

Changing the data type of a value is called Type Conversion.

---

## Example

```python
age = "20"

print(type(age))
```

Output:

```python
<class 'str'>
```

Now converting string into integer:

```python
age = int(age)

print(type(age))
```

Output:

```python
<class 'int'>
```

---

# 📙 Types of Type Conversion

There are two types of type conversion:

1. Implicit Type Conversion
2. Explicit Type Conversion (Type Casting)

---

# 📘 1. Implicit Type Conversion

Implicit conversion is done automatically by Python.

Python converts smaller data types into larger data types automatically.

---

## Example

```python
a = 10
b = 2.5

result = a + b

print(result)
print(type(result))
```

Output:

```python
12.5
<class 'float'>
```

Explanation:

```text
Python automatically converted integer into float.
```

---

# 📕 2. Explicit Type Conversion (Type Casting)

Explicit conversion means converting data types manually by programmer.

This is also called Type Casting.

---

# Common Type Casting Functions

| Function | Converts Into |
|-----------|----------------|
| int() | Integer |
| float() | Float |
| str() | String |

---

## Convert String into Integer

```python
num = "100"

num = int(num)

print(num)
print(type(num))
```

Output:

```python
100
<class 'int'>
```

---

## Convert Integer into Float

```python
num = 10

num = float(num)

print(num)
print(type(num))
```

Output:

```python
10.0
<class 'float'>
```

---

## Convert Number into String

```python
age = 20

age = str(age)

print(age)
print(type(age))
```

Output:

```python
20
<class 'str'>
```

---

# 📘 3. input() Function in Python

The `input()` function is used to take input from the user.

It allows users to enter data during program execution.

---

## Syntax

```python
input()
```

---

## Example

```python
name = input("Enter Your Name: ")

print(name)
```

Output:

```python
Enter Your Name: Zoha Khan
Zoha Khan
```

---

# 📙 Important Point About input()

The `input()` function always returns data in **string (`str`)** format.

Even if user enters a number, Python stores it as string.

---

## Example

```python
age = input("Enter Your Age: ")

print(type(age))
```

Output:

```python
<class 'str'>
```

---

# Problem Without Conversion

```python
num1 = input("Enter First Number: ")
num2 = input("Enter Second Number: ")

print(num1 + num2)
```

Input:

```python
10
20
```

Output:

```python
1020
```

Explanation:

```text
Because input values are strings,
Python joined them instead of adding.
```

---

# 📕 Convert Input into Integer

We use `int()` to convert string input into integer.

---

## Example

```python
num1 = int(input("Enter First Number: "))
num2 = int(input("Enter Second Number: "))

print(num1 + num2)
```

Input:

```python
10
20
```

Output:

```python
30
```

---

# 📒 Convert Input into Float

We use `float()` to convert input into decimal numbers.

---

## Example

```python
price = float(input("Enter Product Price: "))

print(price)
print(type(price))
```

Input:

```python
99.5
```

Output:

```python
99.5
<class 'float'>
```

---

# 📗 Full Example Program

```python
name = input("Enter Your Name: ")
age = int(input("Enter Your Age: "))
height = float(input("Enter Your Height: "))

print("Name:", name)
print("Age:", age)
print("Height:", height)
```

Output:

```python
Enter Your Name: Zoha Khan
Enter Your Age: 20
Enter Your Height: 5.8

Name: Zoha Khan
Age: 20
Height: 5.8
```

---