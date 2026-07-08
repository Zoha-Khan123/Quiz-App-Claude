# 📘 Lecture 06: Strings in Python

Welcome to the Python Summer Camp Class 06!

In this lecture, we will learn about Strings in Python.  
Strings are one of the most important data types because they are used to store text data.

We use strings to store:

- Names
- Messages
- Sentences
- Email addresses
- Passwords
- User input

---

# String Concepts

- What is a String
- Types of Quotes in Strings
- Why Different Quotes are Used
- Escape Sequence Characters
- String Operations
  - Concatenation
  - Indexing
  - Slicing
- String Functions / Methods
  - len()
  - endswith()
  - capitalize()
  - replace()
  - find()
  - count()

---

# What is a String?

A **String** is a sequence of characters enclosed inside quotes.

Strings can contain:

- Alphabets
- Numbers
- Symbols
- Spaces

### Example

```python
name = "Zoha Khan"
```

Here:

- `"Zoha Khan"` is a String

---

# 📗 Types of Quotes in Strings

Python allows us to create strings using:

1. Single Quotes
2. Double Quotes
3. Triple Quotes

---

## Single Quotes

```python
name = 'Python'
```

---

## Double Quotes

```python
name = "Python"
```

---

## Triple Quotes

```python
message = """Welcome
to
Python"""
```

---

# Why Different Quotes are Used?

Mostly developers use **double quotes** because they are more common and readable.

But sometimes we need other quotes depending on the situation.

---

## Using Single Quotes

Single quotes are useful when the string contains double quotes.

```python
sentence = 'My name is "Zoha Khan"'

print(sentence)
```

Output:

```python
My name is "Zoha Khan"
```

---

## Using Double Quotes

Double quotes are useful when the string contains a single quote.

```python
sentence = "Python's course"

print(sentence)
```

Output:

```python
Python's course
```

---

## Using Triple Quotes

Triple quotes are used for multiline strings.

```python
message = """Hello
Welcome to Python
This is multiline text"""

print(message)
```

---

# 📙 Escape Sequence Characters

Escape sequence characters are special characters written using a backslash `\`.

They are used to perform special formatting inside strings.

---

## New Line (`\n`)

Moves text to the next line.

```python
print("Hello\nWorld")
```

Output:

```python
Hello
World
```

---

## Tab Space (`\t`)

Adds tab spacing.

```python
print("Hello\tWorld")
```

Output:

```python
Hello    World
```

---

## Double Quote (`\"`)

Used to print double quotes inside a string.

```python
print("My name is \"Zoha Khan\"")
```

Output:

```python
My name is "Zoha Khan"
```

---

## Single Quote (`\'`)

Used to print single quotes.

```python
print('Python\'s course')
```

Output:

```python
Python's course
```

---

## Backslash (`\\`)

Used to print a backslash.

```python
print("C:\\Users\\Admin")
```

Output:

```python
C:\Users\Admin
```

---

# 📕 String Operations

String Operations are used to work with strings.

---

# 1. Concatenation

Concatenation means joining two or more strings.

We use the `+` operator for concatenation.

```python
first_name = "Zoha"
last_name = "Khan"

full_name = first_name + " " + last_name

print(full_name)
```

Output:

```python
Zoha Khan
```

---

# 2. Indexing

Every character in a string has an index number.

```python
name = "Python"
```

| Character | P | y | t | h | o | n |
|-----------|---|---|---|---|---|---|
| Index | 0 | 1 | 2 | 3 | 4 | 5 |

---

## Accessing Characters

```python
name = "Python"

print(name[0])
print(name[3])
```

Output:

```python
P
h
```

---

## Important Point

Strings are **immutable** in Python.

This means we cannot change characters using indexing.

Wrong Example:

```python
name = "Python"

name[0] = "J"
```

Output:

```python
TypeError
```

---

# 3. Slicing

Slicing is used to get a specific part of a string.

Syntax:

```python
string[start : end]
```

---

## Slicing Example

```python
name = "Python"

print(name[0:4])
```

Output:

```python
Pyth
```

---

## Important Point

The ending index is not included.

`0:4` means:

- Start from index 0
- Stop before index 4

---

## If Second Index is Missing

Python automatically takes all characters till the end.

```python
name = "Python"

print(name[2:])
```

Output:

```python
thon
```

---

## If First Index is Missing

Python automatically starts from index 0.

```python
name = "Python"

print(name[:4])
```

Output:

```python
Pyth
```

---

## Using len() with Slicing

```python
name = "Python"

print(name[0:len(name)])
```

Output:

```python
Python
```

---

## Negative Indexing

Negative indexing starts from the end.

| Character | P | y | t | h | o | n |
|-----------|---|---|---|---|---|---|
| Negative Index | -6 | -5 | -4 | -3 | -2 | -1 |

Example:

```python
name = "Python"

print(name[-1])
print(name[-3])
```

Output:

```python
n
h
```

---

# 📒 String Functions / Methods

Functions and methods are used to perform different operations on strings.

---

# 1. len()

`len()` returns the total length of a string.

```python
name = "Python"

print(len(name))
```

Output:

```python
6
```

---

## Spaces are Also Counted

```python
text = "Hello World"

print(len(text))
```

Output:

```python
11
```

---

# 2. endswith()

Checks whether a string ends with a specific word or character.

```python
text = "hello.py"

print(text.endswith(".py"))
```

Output:

```python
True
```

---

## Important Point

`endswith()` does not change the original string.

---

# 3. capitalize()

Converts the first letter into uppercase.

```python
text = "python"

print(text.capitalize())
```

Output:

```python
Python
```

---

## Original String Does Not Change

```python
text = "python"

text.capitalize()

print(text)
```

Output:

```python
python
```

---

## Updating the Original String

```python
text = "python"

text = text.capitalize()

print(text)
```

Output:

```python
Python
```

---

# Important Rule

Most string methods do not change the original string directly.

Examples:

- capitalize()
- replace()
- lower()
- upper()

To save changes, we must update the variable.

---

# 4. replace()

Used to replace words or characters.

```python
text = "I love Java"

new_text = text.replace("Java", "Python")

print(new_text)
```

Output:

```python
I love Python
```

---

## Original String Does Not Change

```python
text = "Hello"

text.replace("H", "Y")

print(text)
```

Output:

```python
Hello
```

---

# 5. find()

Returns the index position of a word or character.

```python
text = "I love Python"

print(text.find("Python"))
```

Output:

```python
7
```

---

## If Value is Not Found

`find()` returns `-1`.

```python
text = "I love Python"

print(text.find("Java"))
```

Output:

```python
-1
```

---

# 6. count()

Counts how many times a value appears.

```python
text = "apple apple mango apple"

print(text.count("apple"))
```

Output:

```python
3
```

---

# 📗 Summary Table

| Category | Topics |
|-----------|---------|
| Quotes | Single, Double, Triple |
| Escape Characters | \n, \t, \", \', \\ |
| String Operations | Concatenation, Indexing, Slicing |
| String Functions | len(), endswith(), capitalize(), replace(), find(), count() |

---









