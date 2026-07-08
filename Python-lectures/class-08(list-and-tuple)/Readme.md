# 📘 Lecture 08: Lists and Tuples in Python

Welcome to the Python Summer Camp Class 08!

In this lecture, we will learn about Lists and Tuples in Python.

Lists and Tuples are used to store multiple values in a single variable. They make our code cleaner and easier to manage.

---

# List and Tuple Concepts

- Why We Need Lists
- What is a List
- Creating Lists
- List Data Type
- Accessing List Elements
- List Length
- Storing Different Data Types in Lists
- Updating List Elements (Mutability)
- List Slicing
- List Methods
  - append()
  - sort()
  - reverse()
  - insert()
  - remove()
  - pop()
- What is a Tuple
- Creating Tuples
- Tuple Immutability
- Accessing Tuple Elements
- Tuple Methods
  - index()
  - count()

---

# Why We Need Lists?

Let's say we want to store names of 5 students.

Without lists, we would create separate variables:

```python
student1 = "Ali"
student2 = "Sara"
student3 = "Ahmed"
student4 = "Fatima"
student5 = "Hassan"

print(student1)
print(student2)
print(student3)
print(student4)
print(student5)
```

### Problems with This Approach

- Too many variables
- Hard to manage
- Difficult to perform operations on all students at once

---

# Using Lists - A Better Solution

Instead of creating separate variables, we can store all names in one list:

```python
students = ["Ali", "Sara", "Ahmed", "Fatima", "Hassan"]

print(students)
```

Output:

```python
['Ali', 'Sara', 'Ahmed', 'Fatima', 'Hassan']
```

### Benefits of Using Lists

- Store multiple values in one variable
- Easy to manage
- Can perform operations on all elements together

---

# What is a List?

A **List** is a collection that stores multiple values in a single variable.

- Lists are written using square brackets `[]`
- Values are separated by commas
- Lists can store any type of data

### Example

```python
fruits = ["Apple", "Mango", "Banana"]
```

---

# 📗 Creating Lists

We can create lists by placing values inside square brackets.

```python
numbers = [1, 2, 3, 4, 5]

print(numbers)
```

Output:

```python
[1, 2, 3, 4, 5]
```

---

## Empty List

We can also create an empty list:

```python
empty_list = []

print(empty_list)
```

Output:

```python
[]
```

---

# List Data Type

The data type of a list is `list`.

```python
numbers = [1, 2, 3, 4, 5]

print(type(numbers))
```

Output:

```python
<class 'list'>
```

---

# 📙 Accessing List Elements

Every element in a list has an index number.

Lists use **zero-based indexing**, meaning the first element is at index 0.

```python
fruits = ["Apple", "Mango", "Banana", "Orange"]
```

| Element | Apple | Mango | Banana | Orange |
|---------|-------|-------|--------|--------|
| Index | 0 | 1 | 2 | 3 |

---

## Accessing Elements Example

```python
fruits = ["Apple", "Mango", "Banana", "Orange"]

print(fruits[0])
print(fruits[2])
```

Output:

```python
Apple
Banana
```

---

# List Length

We can find the total number of elements in a list using `len()`.

```python
fruits = ["Apple", "Mango", "Banana", "Orange"]

print(len(fruits))
```

Output:

```python
4
```

---

# 📕 Storing Different Data Types in Lists

Lists can store different types of data at the same time.

```python
mixed_list = [10, 20.5, "Python", True]

print(mixed_list)
```

Output:

```python
[10, 20.5, 'Python', True]
```

Here:

- `10` is an integer
- `20.5` is a float
- `"Python"` is a string
- `True` is a boolean

---

# 📒 Updating List Elements

We can change the value of list elements using indexing.

```python
fruits = ["Apple", "Mango", "Banana"]

print("Before:", fruits)

fruits[1] = "Orange"

print("After:", fruits)
```

Output:

```python
Before: ['Apple', 'Mango', 'Banana']
After: ['Apple', 'Orange', 'Banana']
```

---

## Why Can We Update Lists?

Lists are **mutable**.

**Mutable** means we can change the values after the list is created.

---

## Important Point

Strings are immutable, but lists are mutable.

```python
# This works with lists
numbers = [1, 2, 3]
numbers[0] = 10
print(numbers)
```

Output:

```python
[10, 2, 3]
```

---

# 📗 List Slicing

Slicing is used to get a specific part of a list.

Syntax:

```python
list[start : end]
```

---

## Positive Slicing

```python
numbers = [10, 20, 30, 40, 50]

print(numbers[1:4])
```

Output:

```python
[20, 30, 40]
```

---

## Important Point

The ending index is **not included**.

`1:4` means:

- Start from index 1
- Stop before index 4

---

## If Start Index is Missing

Python automatically starts from index 0.

```python
numbers = [10, 20, 30, 40, 50]

print(numbers[:3])
```

Output:

```python
[10, 20, 30]
```

---

## If End Index is Missing

Python automatically goes till the end.

```python
numbers = [10, 20, 30, 40, 50]

print(numbers[2:])
```

Output:

```python
[30, 40, 50]
```

---

## Using len() with Slicing

```python
numbers = [10, 20, 30, 40, 50]

print(numbers[0:len(numbers)])
```

Output:

```python
[10, 20, 30, 40, 50]
```

---

## Negative Slicing

Negative indexing starts from the end.

```python
numbers = [10, 20, 30, 40, 50]
```

| Element | 10 | 20 | 30 | 40 | 50 |
|---------|----|----|----|----|-----|
| Positive Index | 0 | 1 | 2 | 3 | 4 |
| Negative Index | -5 | -4 | -3 | -2 | -1 |

Example:

```python
numbers = [10, 20, 30, 40, 50]

print(numbers[-3:-1])
```

Output:

```python
[30, 40]
```

---

# 📙 List Methods

List methods are used to perform different operations on lists.

---

# 1. append()

`append()` adds one element at the end of the list.

```python
fruits = ["Apple", "Mango"]

fruits.append("Banana")

print(fruits)
```

Output:

```python
['Apple', 'Mango', 'Banana']
```

---

## Important Point

`append()` does **not return** any value.

It returns `None` and directly changes the original list.

```python
fruits = ["Apple", "Mango"]

result = fruits.append("Banana")

print(result)
print(fruits)
```

Output:

```python
None
['Apple', 'Mango', 'Banana']
```

---

# 2. sort()

`sort()` arranges the list in ascending order.

```python
numbers = [50, 10, 30, 20, 40]

numbers.sort()

print(numbers)
```

Output:

```python
[10, 20, 30, 40, 50]
```

---

## Sorting Strings

`sort()` also works on strings.

```python
fruits = ["Mango", "Apple", "Banana"]

fruits.sort()

print(fruits)
```

Output:

```python
['Apple', 'Banana', 'Mango']
```

---

## Important Point

`sort()` does **not return** any value.

It returns `None` and directly changes the original list.

```python
numbers = [3, 1, 2]

result = numbers.sort()

print(result)
print(numbers)
```

Output:

```python
None
[1, 2, 3]
```

---

## Sorting in Descending Order

We can use `reverse=True` parameter to sort in descending order.

```python
numbers = [50, 10, 30, 20, 40]

numbers.sort(reverse=True)

print(numbers)
```

Output:

```python
[50, 40, 30, 20, 10]
```

---

## Sorting Strings in Descending Order

```python
fruits = ["Mango", "Apple", "Banana"]

fruits.sort(reverse=True)

print(fruits)
```

Output:

```python
['Mango', 'Banana', 'Apple']
```

---

# 3. reverse()

`reverse()` reverses the order of elements in the list.

```python
numbers = [10, 20, 30, 40, 50]

numbers.reverse()

print(numbers)
```

Output:

```python
[50, 40, 30, 20, 10]
```

---

## Important Point

`reverse()` does **not return** any value.

It returns `None` and directly changes the original list.

---

# 4. insert()

`insert()` adds an element at a specific index.

Syntax:

```python
list.insert(index, element)
```

Example:

```python
fruits = ["Apple", "Banana"]

fruits.insert(1, "Mango")

print(fruits)
```

Output:

```python
['Apple', 'Mango', 'Banana']
```

---

# 5. remove()

`remove()` removes the first occurrence of an element.

```python
fruits = ["Apple", "Mango", "Banana", "Mango"]

fruits.remove("Mango")

print(fruits)
```

Output:

```python
['Apple', 'Banana', 'Mango']
```

---

## Important Point

Only the **first occurrence** is removed.

---

# 6. pop()

`pop()` removes an element at a specific index.

Syntax:

```python
list.pop(index)
```

Example:

```python
fruits = ["Apple", "Mango", "Banana"]

fruits.pop(1)

print(fruits)
```

Output:

```python
['Apple', 'Banana']
```

---

## If Index is Not Provided

`pop()` removes the last element by default.

```python
fruits = ["Apple", "Mango", "Banana"]

fruits.pop()

print(fruits)
```

Output:

```python
['Apple', 'Mango']
```

---

# 7. extend()

`extend()` adds multiple elements from another list to the end.

```python
fruits = ["Apple", "Mango"]
more_fruits = ["Banana", "Orange"]

fruits.extend(more_fruits)

print(fruits)
```

Output:

```python
['Apple', 'Mango', 'Banana', 'Orange']
```

---

## Difference Between append() and extend()

| append() | extend() |
|----------|----------|
| Adds one element | Adds multiple elements |
| fruits.append("Banana") | fruits.extend(["Banana", "Orange"]) |
| Result: ['Apple', 'Banana'] | Result: ['Apple', 'Banana', 'Orange'] |

Example showing the difference:

```python
fruits = ["Apple"]

# Using append with a list
fruits.append(["Mango", "Banana"])
print(fruits)
```

Output:

```python
['Apple', ['Mango', 'Banana']]
```

```python
fruits = ["Apple"]

# Using extend with a list
fruits.extend(["Mango", "Banana"])
print(fruits)
```

Output:

```python
['Apple', 'Mango', 'Banana']
```

---

# 8. clear()

`clear()` removes all elements from the list.

```python
fruits = ["Apple", "Mango", "Banana"]

fruits.clear()

print(fruits)
```

Output:

```python
[]
```

---

# 9. copy()

`copy()` creates a copy of the list.

```python
fruits = ["Apple", "Mango", "Banana"]

new_fruits = fruits.copy()

print(new_fruits)
```

Output:

```python
['Apple', 'Mango', 'Banana']
```

---

## Why Use copy()?

When we create a copy, changes to the new list do not affect the original list.

```python
fruits = ["Apple", "Mango"]

new_fruits = fruits.copy()
new_fruits.append("Banana")

print("Original:", fruits)
print("Copy:", new_fruits)
```

Output:

```python
Original: ['Apple', 'Mango']
Copy: ['Apple', 'Mango', 'Banana']
```

---

## Without copy() - Both Lists Change

```python
fruits = ["Apple", "Mango"]

new_fruits = fruits
new_fruits.append("Banana")

print("Original:", fruits)
print("Copy:", new_fruits)
```

Output:

```python
Original: ['Apple', 'Mango', 'Banana']
Copy: ['Apple', 'Mango', 'Banana']
```

Explanation:

```text
Without copy(), both variables point to the same list.
```

---

# 10. index()

`index()` returns the index of the first occurrence of an element.

```python
fruits = ["Apple", "Mango", "Banana", "Mango"]

print(fruits.index("Mango"))
```

Output:

```python
1
```

---

## If Element is Not Found

`index()` raises an error if the element is not found.

```python
fruits = ["Apple", "Mango", "Banana"]

print(fruits.index("Orange"))
```

Output:

```python
ValueError: 'Orange' is not in list
```

---

# 📌 Summary: Methods That Return None vs Values

| Returns None (Modifies Original List) | Returns Value |
|----------------------------------------|---------------|
| append() | pop() returns removed element |
| extend() | index() returns position |
| sort() | count() returns occurrences |
| reverse() | copy() returns new list |
| insert() | |
| remove() | |
| clear() | |

**Important:** Methods that return `None` directly modify the original list.

---

#  Tuples in Python

A **Tuple** is similar to a list, but it is **immutable**.

**Immutable** means we **cannot change** the values after the tuple is created.

---

# Creating Tuples

Tuples are written using parentheses `()`.

```python
fruits = ("Apple", "Mango", "Banana")

print(fruits)
```

Output:

```python
('Apple', 'Mango', 'Banana')
```

---

# Tuple Data Type

The data type of a tuple is `tuple`.

```python
fruits = ("Apple", "Mango", "Banana")

print(type(fruits))
```

Output:

```python
<class 'tuple'>
```

---

# Accessing Tuple Values

We can access tuple elements using indexing, just like lists.

```python
fruits = ("Apple", "Mango", "Banana")

print(fruits[0])
print(fruits[2])
```

Output:

```python
Apple
Banana
```

---

# Tuples are Immutable

We **cannot update** tuple elements.

```python
fruits = ("Apple", "Mango", "Banana")

fruits[0] = "Orange"
```

Output:

```python
TypeError: 'tuple' object does not support item assignment
```

---

## Important Point

Tuples are immutable, but lists are mutable.

Use tuples when you want to store data that should **not change**.

---

# Creating an Empty Tuple

```python
empty_tuple = ()

print(empty_tuple)
print(type(empty_tuple))
```

Output:

```python
()
<class 'tuple'>
```

---

# Creating a Tuple with Single Value

When creating a tuple with only one value, we **must add a comma** at the end.

```python
single_tuple = (5,)

print(single_tuple)
print(type(single_tuple))
```

Output:

```python
(5,)
<class 'tuple'>
```

---

## Without Comma - Not a Tuple

If we don't add a comma, Python treats it as a regular value, not a tuple.

```python
not_a_tuple = (5)

print(not_a_tuple)
print(type(not_a_tuple))
```

Output:

```python
5
<class 'int'>
```

---

## Multiple Values - Comma is Optional

For tuples with multiple values, the comma at the end is optional.

```python
fruits = ("Apple", "Mango", "Banana",)

print(fruits)
print(type(fruits))
```

Output:

```python
('Apple', 'Mango', 'Banana')
<class 'tuple'>
```

---

# 📗 Tuple Methods

Tuples have fewer methods than lists because they are immutable.

---

# 1. index()

`index()` returns the index of the first occurrence of an element.

Syntax:

```python
tuple.index(element)
```

Example:

```python
fruits = ("Apple", "Mango", "Banana", "Mango")

print(fruits.index("Mango"))
```

Output:

```python
1
```

---

# 2. count()

`count()` counts the total number of occurrences of an element.

Syntax:

```python
tuple.count(element)
```

Example:

```python
fruits = ("Apple", "Mango", "Banana", "Mango")

print(fruits.count("Mango"))
```

Output:

```python
2
```

---

# 📕 Summary Table

| Category | Topics |
|-----------|---------|
| Lists | Creating Lists, Accessing Elements, Updating Elements, Slicing |
| List Methods | append(), extend(), sort(), reverse(), insert(), remove(), pop(), clear(), copy(), index() |
| List Properties | Mutable, Can store different data types |
| Tuples | Creating Tuples, Accessing Elements, Immutability |
| Tuple Methods | index(), count() |
| Key Difference | Lists are mutable, Tuples are immutable |

---

# 📗 Key Differences: List vs Tuple

| Feature | List | Tuple |
|---------|------|-------|
| Syntax | Square brackets `[]` | Parentheses `()` |
| Mutability | Mutable (can change) | Immutable (cannot change) |
| Methods | Many methods available | Only 2 methods: index(), count() |
| Use Case | When data needs to change | When data should remain constant |
| Performance | Slower | Faster |

---
