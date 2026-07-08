# 📘 Lecture 03: Variables and Data Types  

Welcome to the Python Summer Camp Class 03!

In this lecture, we will learn about variables and data types in Python. Variables are used to store data, while data types define the kind of information stored inside a variable.

Understanding variables and data types is one of the most important foundations of programming because every program works with data.

---

# Variables and Data Types Concepts

- What is a Variable
- What is Memory
- Assignment Operator
- Variable Naming Rules
- Reserved Keywords in Python
- Data Types in Python
- String Data Type
- Integer Data Type
- Float Data Type
- Boolean Data Type
- `type()` Function

---

# What is a Variable?

## Definition

A variable is a name given to a memory location where data is stored.

### Simple Definition

A variable is like a container that holds data.

## Example

```python
name = "Zoha"
```

Here:

- `name` = Variable
- `"Zoha"` = Stored Value

---

# What is Memory?

## Definition

Memory (RAM) is the computer’s temporary storage area.

### Simple Definition

Memory is a place where data is stored while a program is running.

## Easy Example

Think of memory like a:

🧠 **Whiteboard in a classroom**

- You write information temporarily.
- When erased → data is gone.

---

# Assignment Operator (=)

The `=` symbol is called the **Assignment Operator**.

It is used to assign a value to a variable.

## Syntax

```python
variable = value
```

## Examples

```python
x = 10
name = "Zoha"
```

## Important

- Left side → Variable Name
- Right side → Value

---

# Variable Naming Rules

## Rules

✔ Must start with a letter or underscore (`_`)

✔ Cannot start with a number

✔ No spaces allowed

✔ Case-sensitive

✔ Cannot use reserved keywords

✔ Variable names may contain:
- Uppercase letters (`A-Z`)
- Lowercase letters (`a-z`)
- Numbers (`0-9`)
- Underscore (`_`)

## Valid Examples

```python
name
student_name
age1
_user
studentAge
```

## Invalid Examples

```python
1name
student name
for
user-name
```

---

# Reserved Keywords in Python

Reserved keywords are special words already defined in Python.

## Important

We **cannot** use them as variable names.

## Common Reserved Keywords

```text
if
else
for
while
True
False
class
def
return
import
from
break
continue
pass
try
except
finally
and
or
not
in
is
None
lambda
with
as
global
```

## Wrong Example

```python
if = 10
class = "Python"
```

---

# Important Note on Keywords

✔ Keywords are built-in words.

✔ Python uses them for logic and program structure.

✔ We should never use them as variable names.

✔ Keywords already have special meanings in Python.

---

# Data Types in Python

Python has different types of data.

---

# 1️⃣ String (`str`)

Text data.

## Example

```python
name = "Zoha"
```

---

# 2️⃣ Integer (`int`)

Whole numbers.

## Example

```python
age = 20
```

---

# 3️⃣ Float (`float`)

Decimal numbers.

## Example

```python
price = 99.5
```

---

# 4️⃣ Boolean (`bool`)

True / False values.

## Example

```python
is_student = True
```

---

# `type()` Function

We use `type()` to check a variable's data type.

## Example

```python
x = 10
print(type(x))
```

## Output

```python
<class 'int'>
```

## Purpose

Helps us know what type of data a variable stores.

---