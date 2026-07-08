# 📘 Lecture 09: Dictionaries and Sets in Python

Welcome to the Python Summer Camp Class 09!

In this lecture, we will learn about **Dictionaries** and **Sets** in Python.  

## What We'll Cover

### Part 1: Dictionaries
Dictionaries are one of the most powerful and useful data types because they store data in **key-value pairs**.

We use dictionaries to store:

- User information (name, age, email)
- Settings and configurations
- Database records
- JSON data
- Any data that needs a label (key) and a value

### Part 2: Sets
Sets are collections that store **unique** and **unordered** items, perfect for removing duplicates and mathematical operations

---

# Dictionary Concepts

- What is a Dictionary
- Key-Value Pairs
- Dictionary Type
- Ordered vs Unordered
- Dictionary Mutability
- Accessing Dictionary Values
- Updating and Adding Values
- Empty Dictionary
- Nested Dictionaries
- Dictionary Methods
  - keys()
  - values()
  - items()
  - get()
  - update()
  - len()

---

# What is a Dictionary?

A **Dictionary** is a collection of data stored in **key-value pairs**.

In dictionaries:
- Data is stored as pairs
- Each pair has a **key** and a **value**
- Keys are used to access values

### Syntax

```python
dictionary_name = {
    "key1": "value1",
    "key2": "value2",
    "key3": "value3"
}
```

### Example

```python
student = {
    "name": "Zoha Khan",
    "age": 20,
    "city": "Karachi"
}

print(student)
```

Output:

```python
{'name': 'Zoha Khan', 'age': 20, 'city': 'Karachi'}
```

---

# 📗 Key-Value Pairs in Dictionary

Dictionaries store data in **key-value pairs**.

- **Key**: Acts like a label or identifier
- **Value**: The actual data stored

```python
student = {
    "name": "Zoha",     # "name" is key, "Zoha" is value
    "age": 20,          # "age" is key, 20 is value
    "city": "Karachi"   # "city" is key, "Karachi" is value
}
```

---

## Values Can Be Any Data Type

In a dictionary, **values** can be of any type:

- String
- Integer
- Float
- Boolean
- List
- Tuple
- Even another dictionary

### Example

```python
person = {
    "name": "Ali",              # String
    "age": 25,                  # Integer
    "height": 5.8,              # Float
    "is_student": True,         # Boolean
    "hobbies": ["coding", "reading"],  # List
    "coordinates": (24.8, 67.0)        # Tuple
}

print(person)
```

---

## What Can Be Used as Keys?

Keys must be **immutable** (unchangeable) data types.

### ✅ Valid Keys (Immutable)

- String
- Integer
- Float
- Tuple
- Boolean

### ❌ Invalid Keys (Mutable)

- List (because lists can be changed)
- Dictionary (because dictionaries can be changed)

### Why Tuple Can Be Used as Key?

Tuple is **immutable**, which means it cannot be changed after creation.  
That's why tuples can be used as dictionary keys.

### Example

```python
# Valid - Using different immutable types as keys
data = {
    "name": "Zoha",           # String key ✅
    1: "One",                 # Integer key ✅
    (1, 2): "Coordinates",    # Tuple key ✅
    True: "Boolean key"       # Boolean key ✅
}

print(data)
```

### Invalid Example

```python
# Invalid - Using list as key
data = {
    ["name"]: "Zoha"    # ❌ Error: unhashable type: 'list'
}
```

---

# 📙 Dictionary Type

Let's check the type of a dictionary.

```python
student = {
    "name": "Zoha",
    "age": 20
}

print(type(student))
```

Output:

```python
<class 'dict'>
```

The type of dictionary is `dict`.

---

# 📕 Ordered vs Unordered

## Strings, Lists, and Tuples are Ordered

Strings, lists, and tuples have an **index** assigned to each element.  
That's why they are **ordered**.

```python
name = "Python"    # Has index: P=0, y=1, t=2, etc.
numbers = [10, 20, 30]  # Has index: 10=0, 20=1, 30=2
```

---

## Dictionaries are Unordered

Dictionaries do **not have index numbers**.  
That's why dictionaries are **unordered**.

```python
student = {
    "name": "Zoha",
    "age": 20
}

# There is no index like 0, 1, 2
# We access values using keys, not index
```

### Important Note

From **Python 3.7+**, dictionaries maintain **insertion order**.  
But they still don't have numeric indexes like lists.

---

# 📒 Dictionary is Mutable

Dictionaries are **mutable**, which means we can change, add, or delete key-value pairs.

```python
student = {
    "name": "Zoha",
    "age": 20
}

# We can change values
student["age"] = 21

print(student)
```

Output:

```python
{'name': 'Zoha', 'age': 21}
```

---

# 📗 Duplicate Keys Are Not Allowed

We **cannot** have the same key twice in a dictionary.

If we use the same key, the **last value** will overwrite the previous one.

```python
student = {
    "name": "Zoha",
    "age": 20,
    "age": 25    # This will overwrite age = 20
}

print(student)
```

Output:

```python
{'name': 'Zoha', 'age': 25}
```

As you can see, only the last `age` value is stored.

---

# 📘 Accessing Dictionary Values

To access values from a dictionary, we use **keys** inside **square brackets**.

### Syntax

```python
dictionary_name["key_name"]
```

### Example

```python
student = {
    "name": "Zoha Khan",
    "age": 20,
    "city": "Karachi"
}

print(student["name"])
print(student["age"])
print(student["city"])
```

Output:

```python
Zoha Khan
20
Karachi
```

---

## Error When Key Does Not Exist

If we try to access a key that **does not exist**, Python will give an **error**.

```python
student = {
    "name": "Zoha",
    "age": 20
}

print(student["city"])    # ❌ Key 'city' does not exist
```

Output:

```python
KeyError: 'city'
```

This is similar to accessing an invalid index in a list or string.

---

# 📙 Updating and Adding Values

## Updating an Existing Value

To update a value, we assign a new value to an existing key.

```python
student = {
    "name": "Zoha",
    "age": 20
}

# Update age
student["age"] = 21

print(student)
```

Output:

```python
{'name': 'Zoha', 'age': 21}
```

---

## Adding a New Key-Value Pair

To add a new key-value pair, we assign a value to a new key.

```python
student = {
    "name": "Zoha",
    "age": 20
}

# Add a new key-value pair
student["city"] = "Karachi"

print(student)
```

Output:

```python
{'name': 'Zoha', 'age': 20, 'city': 'Karachi'}
```

---

## Important Point: Same Key Updates, Not Creates New

If we try to add a key that **already exists**, it will **update** the value, not create a new key.

```python
student = {
    "name": "Zoha",
    "age": 20
}

# Trying to add "age" again
student["age"] = 25    # This will update, not create new

print(student)
```

Output:

```python
{'name': 'Zoha', 'age': 25}
```

---

# 📕 Empty Dictionary

We can create an **empty dictionary** and add values to it later.

### Creating Empty Dictionary

```python
student = {}

print(student)
print(type(student))
```

Output:

```python
{}
<class 'dict'>
```

---

### Adding Values to Empty Dictionary

```python
student = {}

# Adding values
student["name"] = "Zoha"
student["age"] = 20
student["city"] = "Karachi"

print(student)
```

Output:

```python
{'name': 'Zoha', 'age': 20, 'city': 'Karachi'}
```

---

# 📒 Nested Dictionaries

A **nested dictionary** is a dictionary inside another dictionary.

### What is a Nested Dictionary?

When a dictionary contains another dictionary as a value, it's called a nested dictionary.

### Example

```python
students = {
    "student1": {
        "name": "Zoha",
        "age": 20,
        "city": "Karachi"
    },
    "student2": {
        "name": "Ali",
        "age": 22,
        "city": "Lahore"
    }
}

print(students)
```

Output:

```python
{
    'student1': {'name': 'Zoha', 'age': 20, 'city': 'Karachi'}, 
    'student2': {'name': 'Ali', 'age': 22, 'city': 'Lahore'}
}
```

---

## Accessing Nested Dictionary Values

To access values from a nested dictionary, we use **multiple square brackets**.

### Syntax

```python
dictionary["outer_key"]["inner_key"]
```

### Example

```python
students = {
    "student1": {
        "name": "Zoha",
        "age": 20
    },
    "student2": {
        "name": "Ali",
        "age": 22
    }
}

# Accessing nested values
print(students["student1"]["name"])
print(students["student2"]["age"])
```

Output:

```python
Zoha
22
```

---

### Step-by-Step Explanation

```python
students["student1"]              # Returns: {'name': 'Zoha', 'age': 20}
students["student1"]["name"]      # Returns: 'Zoha'
```

First, we access the outer dictionary, then the inner dictionary.

---

# 📗 Dictionary Methods

Python provides built-in methods to work with dictionaries.

---

# 1. keys() Method

The `keys()` method returns all the **keys** of a dictionary.

```python
student = {
    "name": "Zoha",
    "age": 20,
    "city": "Karachi"
}

print(student.keys())
```

Output:

```python
dict_keys(['name', 'age', 'city'])
```

---

## Converting to List

The `keys()` method returns `dict_keys`, which we can convert to a list using `list()`.

```python
student = {
    "name": "Zoha",
    "age": 20,
    "city": "Karachi"
}

keys_list = list(student.keys())

print(keys_list)
print(type(keys_list))
```

Output:

```python
['name', 'age', 'city']
<class 'list'>
```

---

# 2. len() Function

The `len()` function returns the **total number of key-value pairs** in a dictionary.

```python
student = {
    "name": "Zoha",
    "age": 20,
    "city": "Karachi"
}

print(len(student))
```

Output:

```python
3
```

---

# 3. values() Method

The `values()` method returns all the **values** of a dictionary.

```python
student = {
    "name": "Zoha",
    "age": 20,
    "city": "Karachi"
}

print(student.values())
```

Output:

```python
dict_values(['Zoha', 20, 'Karachi'])
```

---

## Converting to List

The `values()` method returns `dict_values`, which we can convert to a list.

```python
student = {
    "name": "Zoha",
    "age": 20,
    "city": "Karachi"
}

values_list = list(student.values())

print(values_list)
```

Output:

```python
['Zoha', 20, 'Karachi']
```

---

# 4. items() Method

The `items()` method returns all **key-value pairs** as **tuples**.

```python
student = {
    "name": "Zoha",
    "age": 20,
    "city": "Karachi"
}

print(student.items())
```

Output:

```python
dict_items([('name', 'Zoha'), ('age', 20), ('city', 'Karachi')])
```

---

## Converting to List

The `items()` method returns `dict_items`, which we can convert to a list.

```python
student = {
    "name": "Zoha",
    "age": 20,
    "city": "Karachi"
}

items_list = list(student.items())

print(items_list)
```

Output:

```python
[('name', 'Zoha'), ('age', 20), ('city', 'Karachi')]
```

Each key-value pair is stored as a **tuple** inside the list.

---

# 5. get() Method

The `get()` method returns the **value** of a specified key.

### Syntax

```python
dictionary.get("key_name")
```

### Example

```python
student = {
    "name": "Zoha",
    "age": 20,
    "city": "Karachi"
}

print(student.get("name"))
print(student.get("age"))
```

Output:

```python
Zoha
20
```

---

## Two Ways to Access Values

There are **two ways** to access dictionary values:

### 1. Using Square Brackets

```python
student = {
    "name": "Zoha",
    "age": 20
}

print(student["name"])
```

### 2. Using get() Method

```python
student = {
    "name": "Zoha",
    "age": 20
}

print(student.get("name"))
```

Both return the same result:

```python
Zoha
```

---

## Difference Between Square Brackets and get()

The main difference appears when we try to access a **key that does not exist**.

### Using Square Brackets

```python
student = {
    "name": "Zoha",
    "age": 20
}

print(student["city"])    # ❌ Key does not exist
```

Output:

```python
KeyError: 'city'
```

This gives an **error** and stops the program.

---

### Using get() Method

```python
student = {
    "name": "Zoha",
    "age": 20
}

print(student.get("city"))    # ✅ Key does not exist
```

Output:

```python
None
```

The `get()` method returns **None** instead of giving an error.

---

## Which Method is Better?

### Use `get()` When:
- You are not sure if the key exists
- You don't want the program to crash
- You want to provide a default value

### Use Square Brackets `[]` When:
- You are sure the key exists
- You want an error if the key is missing

**Recommendation**: Use `get()` method for safer code.

---

### Providing Default Value with get()

We can provide a **default value** to return if the key does not exist.

```python
student = {
    "name": "Zoha",
    "age": 20
}

print(student.get("city", "Not Found"))
```

Output:

```python
Not Found
```

---

# 6. update() Method

The `update()` method is used to **add** or **update** multiple key-value pairs at once.

### Syntax

```python
dictionary.update({key: value})
```

### Example: Adding New Values

```python
student = {
    "name": "Zoha",
    "age": 20
}

student.update({"city": "Karachi", "course": "Python"})

print(student)
```

Output:

```python
{'name': 'Zoha', 'age': 20, 'city': 'Karachi', 'course': 'Python'}
```

---

### Example: Updating Existing Values

```python
student = {
    "name": "Zoha",
    "age": 20
}

student.update({"age": 21})

print(student)
```

Output:

```python
{'name': 'Zoha', 'age': 21}
```

---

## Important Point

If the key passed in `update()` **already exists**, it will **update** the value, not create a new key.

This is because **duplicate keys are not allowed** in dictionaries.

```python
student = {
    "name": "Zoha",
    "age": 20
}

student.update({"name": "Ali", "age": 25})    # Updates existing keys

print(student)
```

Output:

```python
{'name': 'Ali', 'age': 25}
```

---

# 📗 Summary Table

| Method | Description | Returns |
|--------|-------------|---------|
| `keys()` | Returns all keys | dict_keys (can convert to list) |
| `values()` | Returns all values | dict_values (can convert to list) |
| `items()` | Returns key-value pairs as tuples | dict_items (can convert to list) |
| `get()` | Returns value for a key (safe access) | Value or None |
| `update()` | Adds or updates multiple key-value pairs | None (modifies original) |
| `len()` | Returns number of key-value pairs | Integer |

---

# 📘 Key Points to Remember

- Dictionaries store data in **key-value pairs**
- Keys must be **immutable** (string, int, tuple, etc.)
- Values can be **any data type**
- Dictionaries are **mutable**
- **No duplicate keys** allowed
- Dictionaries are **unordered** (no index)
- Use `[]` to access values (can give error)
- Use `get()` for safe access (returns None if key missing)
- Use `update()` to add/update multiple items
- Nested dictionaries can store complex data

---

# 📗 Complete Example

```python
# Creating a dictionary
person = {
    "name": "Zoha Khan",
    "age": 20,
    "city": "Karachi",
    "hobbies": ["coding", "reading"],
    "is_student": True
}

# Accessing values
print(person["name"])
print(person.get("city"))

# Adding new key-value pair
person["email"] = "zoha@example.com"

# Updating existing value
person["age"] = 21

# Dictionary methods
print(person.keys())
print(person.values())
print(person.items())
print(len(person))

# Nested dictionary example
students = {
    "student1": {"name": "Zoha", "age": 20},
    "student2": {"name": "Ali", "age": 22}
}

print(students["student1"]["name"])
```

---

Happy Learning! 🎉

---
---

# 📘 Sets in Python

Now let's learn about **Sets**, another important collection type in Python!

A **Set** is a collection of **unordered** and **unique** items.  
Sets automatically remove duplicate values and do not maintain any specific order.

We use sets when we need:

- To store unique values only
- To remove duplicates from a list
- To perform mathematical operations like union and intersection
- Fast membership testing (checking if an item exists)

---

# Set Concepts

- What is a Set
- Set Characteristics (Unordered, Unique, Immutable elements)
- Data Types in Set
- Set Syntax
- Set Type
- Set Length
- Duplicate Values in Set
- Empty Set
- Set is Mutable but Elements are Immutable
- Hashable vs Unhashable
- Set Methods
  - add()
  - remove()
  - clear()
  - pop()
  - union()
  - intersection()

---

# What is a Set?

A **Set** is a collection that stores **unordered** and **unique** items.

Key characteristics:
- **Unordered**: Items have no index or specific position
- **Unique**: Every element appears only once (duplicates are automatically removed)
- **Immutable elements**: Set elements must be immutable (cannot be lists or dictionaries)

### Syntax

```python
set_name = {value1, value2, value3}
```

### Example

```python
fruits = {"apple", "banana", "orange"}

print(fruits)
```

Output:

```python
{'banana', 'apple', 'orange'}    # Order may vary
```

Notice: The order might be different from how we wrote it because sets are **unordered**.

---

# 📗 Data Types in Set

Set elements must be **immutable** (unchangeable).

### ✅ Valid Data Types (Immutable)

- **Boolean**: `True`, `False`
- **Integer**: `1`, `2`, `100`
- **Float**: `3.14`, `2.5`
- **String**: `"hello"`, `"python"`
- **Tuple**: `(1, 2)`, `("a", "b")`

### Example

```python
mixed_set = {True, 10, 3.14, "Python", (1, 2)}

print(mixed_set)
```

Output:

```python
{True, 10, 3.14, 'Python', (1, 2)}
```

---

### ❌ Invalid Data Types (Mutable)

- **List**: Cannot be stored in a set
- **Dictionary**: Cannot be stored in a set
- **Set**: Cannot store another set

### Example (This will give an error)

```python
# Trying to store a list in a set
my_set = {1, 2, [3, 4]}    # ❌ Error
```

Output:

```python
TypeError: unhashable type: 'list'
```

We will learn more about **hashable** and **unhashable** later.

---

# 📙 Set Syntax

Sets are created using **curly braces** `{}`, similar to dictionaries.

**Difference**:
- **Dictionary**: Stores key-value pairs → `{"key": "value"}`
- **Set**: Stores only values → `{value1, value2}`

### Example

```python
# This is a set (only values)
my_set = {1, 2, 3, 4, 5}

print(my_set)
```

Output:

```python
{1, 2, 3, 4, 5}
```

---

# 📕 Set Type

Let's check the type of a set using `type()`.

```python
my_set = {1, 2, 3}

print(type(my_set))
```

Output:

```python
<class 'set'>
```

The type of set is `set`.

---

# 📒 Set Length

We can check the number of elements in a set using `len()`.

```python
fruits = {"apple", "banana", "orange", "mango"}

print(len(fruits))
```

Output:

```python
4
```

---

# 📗 Duplicate Values in Set

Sets automatically **ignore duplicate values**.

If we add the same value multiple times, it will appear only **once** in the set.

### Example

```python
numbers = {1, 2, 3, 2, 4, 3, 5, 1}

print(numbers)
```

Output:

```python
{1, 2, 3, 4, 5}
```

As you can see, duplicate values `1`, `2`, and `3` appeared only once.

---

### Real-World Use Case

Sets are useful when we want to remove duplicates from a list.

```python
# List with duplicates
numbers_list = [1, 2, 3, 2, 4, 3, 5, 1]

# Convert to set to remove duplicates
unique_numbers = set(numbers_list)

print(unique_numbers)
```

Output:

```python
{1, 2, 3, 4, 5}
```

---

# 📘 Empty Set

Creating an empty set is a bit different from other collections.

### Wrong Way ❌

```python
my_set = {}

print(type(my_set))
```

Output:

```python
<class 'dict'>
```

**Problem**: Using `{}` creates an **empty dictionary**, not a set!

---

### Correct Way ✅

To create an empty set, we use the `set()` function.

```python
my_set = set()

print(my_set)
print(type(my_set))
```

Output:

```python
set()
<class 'set'>
```

Now it's correctly a **set**.

---

# 📙 Set is Mutable but Elements are Immutable

This is an important concept to understand.

### Set is Mutable

**Mutable** means we can **add** or **remove** elements from a set after it is created.

```python
fruits = {"apple", "banana"}

# Adding a new element
fruits.add("orange")

print(fruits)
```

Output:

```python
{'apple', 'banana', 'orange'}
```

We successfully modified the set, so **set is mutable**.

---

### Set Elements Must Be Immutable

Even though we can change the set itself, the **elements inside the set** must be **immutable** (unchangeable).

This is why we **cannot store lists or dictionaries** in a set.

### Example

```python
my_set = {1, 2, "hello", (1, 2)}    # ✅ All elements are immutable

print(my_set)
```

Output:

```python
{1, 2, 'hello', (1, 2)}
```

---

### Why Can't We Store Lists in Set?

```python
my_set = {1, 2, [3, 4]}    # ❌ List is mutable
```

Output:

```python
TypeError: unhashable type: 'list'
```

This error says: **unhashable type: 'list'**

But what does **unhashable** mean?

---

# 📕 Hashable vs Unhashable

To understand why lists cannot be stored in sets, we need to understand **hashing**.

### What is Hashing?

**Hashing** is a process of converting data into a unique fixed-size value (called a **hash value**).

Python uses hash values to quickly find and compare items in sets and dictionary keys.

---

### Hashable Types

**Hashable** types are those that have a **fixed hash value** that never changes.

Immutable types are hashable:
- Integer, Float, String, Tuple, Boolean

### Example

```python
print(hash(1))
print(hash(1))
```

Output:

```python
1
1
```

The hash value of `1` is always the same.

---

### Unhashable Types

**Unhashable** types are those whose **hash value can change**.

Mutable types are unhashable:
- List, Dictionary, Set

### Why Lists Are Unhashable

```python
list1 = [1, 2, 3]
# Suppose hash of list1 = 12345

list1.append(4)    # We modified the list
# Now hash of list1 should change because content changed
```

If we allow lists in sets, their hash value would keep changing whenever we modify them.  
This would break the way sets work internally.

That's why Python does not allow mutable (unhashable) types in sets.

---

### Why Tuples Are Allowed

Tuples are **immutable**, so their hash value never changes.

```python
my_set = {(1, 2), (3, 4)}

print(my_set)
```

Output:

```python
{(1, 2), (3, 4)}
```

This works perfectly because tuples cannot be changed after creation.

---

# 📒 Set Methods

Python provides several methods to work with sets.

---

# 1. add() Method

The `add()` method adds a **single element** to the set.

### Syntax

```python
set_name.add(element)
```

### Example: Adding Different Data Types

```python
my_set = set()    # Empty set

# Adding integer
my_set.add(10)

# Adding string
my_set.add("Python")

# Adding boolean
my_set.add(True)

# Adding tuple
my_set.add((1, 2))

print(my_set)
```

Output:

```python
{True, 10, 'Python', (1, 2)}
```

---

### Error: Adding a List

```python
my_set = set()

my_set.add([1, 2, 3])    # ❌ Trying to add a list
```

Output:

```python
TypeError: unhashable type: 'list'
```

**Explanation**:

This error occurs because:
1. Lists are **mutable** (can be changed)
2. Mutable objects are **unhashable**
3. Sets can only store **hashable** (immutable) objects

If we add `[1, 2]` to a set and later modify the list to `[1, 2, 3]`, its hash value would change.  
This would break the internal working of sets, so Python does not allow it.

---

# 2. remove() Method

The `remove()` method removes a specified element from the set.

### Syntax

```python
set_name.remove(element)
```

### Example

```python
fruits = {"apple", "banana", "orange"}

fruits.remove("banana")

print(fruits)
```

Output:

```python
{'apple', 'orange'}
```

---

### Error: Removing Non-Existent Element

If we try to remove an element that **does not exist**, Python will give an error.

```python
fruits = {"apple", "orange"}

fruits.remove("mango")    # ❌ 'mango' does not exist
```

Output:

```python
KeyError: 'mango'
```

---

# 3. clear() Method

The `clear()` method removes **all elements** from the set, making it empty.

### Syntax

```python
set_name.clear()
```

### Example

```python
fruits = {"apple", "banana", "orange"}

fruits.clear()

print(fruits)
```

Output:

```python
set()
```

The set is now empty.

---

# 4. pop() Method

The `pop()` method removes and returns a **random element** from the set.

### Syntax

```python
set_name.pop()
```

### Example

```python
numbers = {1, 2, 3, 4, 5}

removed_element = numbers.pop()

print("Removed:", removed_element)
print("Remaining set:", numbers)
```

Output (may vary):

```python
Removed: 1
Remaining set: {2, 3, 4, 5}
```

**Note**: Since sets are unordered, we cannot predict which element will be removed.

---

# 5. union() Method

The `union()` method combines two sets and returns a **new set** containing all unique elements from both sets.

### Syntax

```python
set1.union(set2)
```

### Venn Diagram for Union

```
    Set A          Set B
     ╭─────╮      ╭─────╮
     │  1  │      │  3  │
     │  2  ├──────┤  4  │
     │     │  2,3 │  5  │
     ╰─────╯      ╰─────╯

Union = {1, 2, 3, 4, 5}
(All elements from both sets)
```

---

### Example

```python
set1 = {1, 2, 3}
set2 = {3, 4, 5}

result = set1.union(set2)

print(result)
```

Output:

```python
{1, 2, 3, 4, 5}
```

---

### Important Point

The `union()` method does **not change** the original sets.  
It creates and returns a **new set**.

```python
set1 = {1, 2, 3}
set2 = {3, 4, 5}

result = set1.union(set2)

print("Original set1:", set1)
print("Original set2:", set2)
print("Union result:", result)
```

Output:

```python
Original set1: {1, 2, 3}
Original set2: {3, 4, 5}
Union result: {1, 2, 3, 4, 5}
```

---

# 6. intersection() Method

The `intersection()` method returns a **new set** containing only the **common elements** from both sets.

### Syntax

```python
set1.intersection(set2)
```

### Venn Diagram for Intersection

```
    Set A          Set B
     ╭─────╮      ╭─────╮
     │  1  │      │  4  │
     │  2  ├──────┤  5  │
     │     │█ 3 █ │     │
     ╰─────╯      ╰─────╯

Intersection = {3}
(Only common elements - shaded area)
```

---

### Example

```python
set1 = {1, 2, 3, 4}
set2 = {3, 4, 5, 6}

result = set1.intersection(set2)

print(result)
```

Output:

```python
{3, 4}
```

Only `3` and `4` are present in both sets.

---

### Important Point

The `intersection()` method also does **not change** the original sets.  
It creates and returns a **new set**.

```python
set1 = {1, 2, 3, 4}
set2 = {3, 4, 5, 6}

result = set1.intersection(set2)

print("Original set1:", set1)
print("Original set2:", set2)
print("Intersection result:", result)
```

Output:

```python
Original set1: {1, 2, 3, 4}
Original set2: {3, 4, 5, 6}
Intersection result: {3, 4}
```

---

# 📗 Summary Table

| Method | Description | Returns |
|--------|-------------|---------|
| `add()` | Adds a single element | None (modifies original) |
| `remove()` | Removes specified element (error if not found) | None (modifies original) |
| `clear()` | Removes all elements | None (modifies original) |
| `pop()` | Removes and returns a random element | The removed element |
| `union()` | Combines two sets | New set with all unique elements |
| `intersection()` | Finds common elements | New set with common elements only |
| `len()` | Returns number of elements | Integer |

---

# 📘 Key Points to Remember

- Sets store **unordered** and **unique** items
- Sets automatically **remove duplicates**
- Set elements must be **immutable** (hashable)
- Valid types: int, float, str, bool, tuple
- Invalid types: list, dict, set (mutable/unhashable)
- Empty set is created with `set()`, not `{}`
- Set is **mutable** (can add/remove elements)
- Set **elements** are **immutable** (cannot store mutable types)
- `union()` combines all elements from both sets
- `intersection()` returns only common elements
- Both `union()` and `intersection()` return new sets

---

# 📗 Complete Example

```python
# Creating a set
fruits = {"apple", "banana", "orange"}

# Adding element
fruits.add("mango")

# Checking length
print(len(fruits))

# Set with duplicates (automatically removed)
numbers = {1, 2, 3, 2, 4, 3, 5}
print(numbers)    # {1, 2, 3, 4, 5}

# Union example
set1 = {1, 2, 3}
set2 = {3, 4, 5}
print(set1.union(set2))    # {1, 2, 3, 4, 5}

# Intersection example
setA = {"apple", "banana", "orange"}
setB = {"banana", "mango", "orange"}
print(setA.intersection(setB))    # {'banana', 'orange'}

# Type checking
print(type(fruits))    # <class 'set'>

# Empty set
empty_set = set()
print(type(empty_set))    # <class 'set'>
```

---

Happy Learning! 🎉
