# 📘 Lecture 04: Types of Operators in Python  

Welcome to the Python Summer Camp Class 04!

In this lecture, we will learn about operators in Python. Operators are symbols used to perform different types of operations on values and variables.

Operators help us perform calculations, compare values, and build logical conditions in programs.

---

# Types of Operators Concepts

- What are Operators
- Arithmetic Operators
- Relational / Comparison Operators
- Assignment Operator
- Logical Operator

---


## What is an Operator?

An **Operator** is a symbol that performs a specific operation on one or more values (operands).

### Simple Definition

Operators are special symbols used to perform calculations, comparisons, assignments, and logical operations.

### Example

```python
a = 10
b = 5

c = a + b
```

Here:

- `+` is an Operator
- `a` and `b` are Operands

Output:

```python
15
```

---

# 📗 Types of Operators in Python

Python provides different types of operators:

1. Arithmetic Operators
2. Relational / Comparison Operators
3. Assignment Operators
4. Logical Operators

---

# 📙 1. Arithmetic Operators

Arithmetic Operators are used to perform mathematical calculations.

| Operator | Meaning | Example |
|-----------|---------|---------|
| + | Addition | 10 + 5 |
| - | Subtraction | 10 - 5 |
| * | Multiplication | 10 * 5 |
| / | Division | 10 / 5 |
| // | Floor Division | 10 // 3 |
| % | Modulus (Remainder) | 10 % 3 |
| ** | Exponent (Power) | 2 ** 3 |

---

## Addition (+)

Used to add two values.

```python
a = 10
b = 20

print(a + b)
```

Output:

```python
30
```

---

## Subtraction (-)

Used to subtract values.

```python
a = 20
b = 5

print(a - b)
```

Output:

```python
15
```

---

## Multiplication (*)

Used to multiply values.

```python
a = 5
b = 4

print(a * b)
```

Output:

```python
20
```

---

## Division (/)

Used to divide values.

```python
a = 20
b = 4

print(a / b)
```

Output:

```python
5.0
```

---

## Floor Division (//)

Used to divide values and return only the whole number (integer part).

```python
a = 10
b = 3

print(a // b)
```

Output:

```python
3
```

Explanation:

```text
10 ÷ 3 = 3.333...
Floor division removes the decimal part and returns only 3
```

---

## Difference Between / and //

| Division (/) | Floor Division (//) |
|--------------|---------------------|
| Returns decimal | Returns whole number |
| 10 / 3 = 3.333... | 10 // 3 = 3 |
| 7 / 2 = 3.5 | 7 // 2 = 3 |

---

## Modulus (%)

Returns the remainder.

```python
a = 10
b = 3

print(a % b)
```

Output:

```python
1
```

Explanation:

```text
10 ÷ 3 = 3 remainder 1
```

---

## Exponent (**)

Used to calculate power.

```python
print(2 ** 3)
```

Output:

```python
8
```

Explanation:

```text
2 × 2 × 2 = 8
```

---

# 📕 2. Relational / Comparison Operators

Comparison Operators compare two values and return a Boolean value (`True` or `False`).

| Operator | Meaning |
|-----------|---------|
| == | Equal To |
| != | Not Equal To |
| > | Greater Than |
| < | Less Than |
| >= | Greater Than or Equal To |
| <= | Less Than or Equal To |

---

## Equal To (==)

```python
print(10 == 10)
```

Output:

```python
True
```

---

## Not Equal To (!=)

```python
print(10 != 5)
```

Output:

```python
True
```

---

## Greater Than (>)

```python
print(20 > 10)
```

Output:

```python
True
```

---

## Less Than (<)

```python
print(5 < 10)
```

Output:

```python
True
```

---

## Greater Than or Equal To (>=)

```python
print(10 >= 10)
```

Output:

```python
True
```

---

## Less Than or Equal To (<=)

```python
print(5 <= 10)
```

Output:

```python
True
```

---

# 📒 3. Assignment Operators

Assignment Operators are used to assign values to variables.

| Operator | Example | Equivalent To |
|-----------|---------|--------------|
| = | x = 10 | Assign value |
| += | x += 5 | x = x + 5 |
| -= | x -= 5 | x = x - 5 |
| *= | x *= 5 | x = x * 5 |
| /= | x /= 5 | x = x / 5 |
| %= | x %= 5 | x = x % 5 |
| **= | x **= 2 | x = x ** 2 |

---

## Assignment (=)

```python
x = 50
```

Assigns value 50 to x.

---

## Add and Assign (+=)

```python
x = 10
x += 5

print(x)
```

Output:

```python
15
```

---

## Subtract and Assign (-=)

```python
x = 10
x -= 3

print(x)
```

Output:

```python
7
```

---

## Multiply and Assign (*=)

```python
x = 5
x *= 4

print(x)
```

Output:

```python
20
```

---

## Divide and Assign (/=)

```python
x = 20
x /= 4

print(x)
```

Output:

```python
5.0
```

---

## Modulus and Assign (%=)

```python
x = 10
x %= 3

print(x)
```

Output:

```python
1
```

---

## Power and Assign (**=)

```python
x = 2
x **= 3

print(x)
```

Output:

```python
8
```

---

# 📘 4. Logical Operators

Logical Operators are used to combine conditions.

They always return Boolean values (`True` or `False`).

| Operator | Meaning |
|-----------|---------|
| and | Both conditions must be True |
| or | At least one condition must be True |
| not | Reverses the result |

---

## Logical AND

Returns True only when both conditions are True.

```python
print(10 > 5 and 20 > 10)
```

Output:

```python
True
```

---

### False Example

```python
print(10 > 5 and 20 < 10)
```

Output:

```python
False
```

---

## Logical OR

Returns True if at least one condition is True.

```python
print(10 > 5 or 20 < 10)
```

Output:

```python
True
```

---

## Logical NOT

Reverses the Boolean result.

```python
print(not True)
```

Output:

```python
False
```

---

```python
print(not False)
```

Output:

```python
True
```

---

# 📗 Summary Table

| Category | Operators |
|------------|------------|
| Arithmetic | +, -, *, /, %, ** |
| Comparison | ==, !=, >, <, >=, <= |
| Assignment | =, +=, -=, *=, /=, %=, **= |
| Logical | and, or, not |

---
