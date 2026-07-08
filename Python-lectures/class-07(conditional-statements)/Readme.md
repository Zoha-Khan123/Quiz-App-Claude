# 📘 Lecture 07: Conditional Statements in Python

Welcome to the Python Summer Camp Class 07!

In this lecture, we will learn about **Conditional Statements** in Python.

Conditional statements help programs make decisions.

They allow Python to check conditions and decide:

```text
Which code should run
and
Which code should not run
```

Conditional statements are one of the most important concepts in programming because almost every real-world application uses decision-making.

---

# 📗 Conditional Statements Concepts

- Conditional Statements
- `if` Statement
- `elif` Statement
- `else` Statement
- Indentation in Python
- Multiple `if` vs `if-elif-else`
- Logical Operators with Conditions
- Nested Conditions
- Truthy and Falsy Values

---

# 1️⃣ Conditional Statements

## 📘 What are Conditional Statements?

Conditional statements are used to execute code based on conditions.

Python checks whether a condition is:

```text
True
or
False
```

If the condition is `True`, Python runs the code.

If the condition is `False`, Python skips the code.

---

## 📙 Syntax of Conditional Statements

```python
if (condition):
    code

elif (condition):
    code

else:
    code
```

---

## 📗 Code Execution Flow

Python always checks conditions from:

```text
Top → Bottom
```

Execution flow:

```text
1. First Python checks if
2. If if is False, then elif checks
3. If all conditions are False, else runs
```

---

## 📘 Flow Diagram of Conditional Statements

```text
            Start
               │
               ▼
      Is if condition True?
            /       \
          Yes        No
          /           \
         ▼             ▼
   Run if block    Check elif
                         │
            Is elif condition True?
                   /        \
                 Yes         No
                 /            \
                ▼              ▼
       Run elif block    Run else block
```

---

# 2️⃣ if Statement

## 📘 What is if Statement?

The `if` statement is used to check the first condition.

If the condition is `True`, the code inside the `if` block runs.

---

## 📙 Syntax of if Statement

```python
if (condition):
    code
```

---

## 📗 Traffic Light Example Using if

```python
light = "red"

if (light == "red"):
    print("Stop")
```

Output:

```python
Stop
```

---

## 📘 Explanation

Python checks:

```python
(light == "red")
```

Condition result:

```python
True
```

So Python runs:

```python
print("Stop")
```

---

## 📙 Example with False Condition

```python
light = "green"

if (light == "red"):
    print("Stop")
```

Output:

```text
No Output
```

Explanation:

```text
Condition became False,
so Python skipped the if block.
```

---

## 📗 Using True in if Statement

```python
if (True):
    print("Python Class")
```

Output:

```python
Python Class
```

---

## 📘 Using False in if Statement

```python
if (False):
    print("Hello")
```

Output:

```text
No Output
```

Because:

```text
False condition never runs
```

---

# 3️⃣ elif Statement

## 📘 What is elif Statement?

`elif` means:

```text
else if
```

`elif` checks another condition when the `if` condition becomes False.

---

## 📙 Syntax of elif

```python
if (condition):
    code

elif (condition):
    code
```

---

## 📗 Traffic Light Example Using elif

```python
light = "yellow"

if (light == "red"):
    print("Stop")

elif (light == "yellow"):
    print("Ready")
```

Output:

```python
Ready
```

---

## 📘 Explanation

Python first checks:

```python
(light == "red")
```

Result:

```python
False
```

Then Python moves to:

```python
(light == "yellow")
```

Result:

```python
True
```

So Python runs:

```python
print("Ready")
```

---

## 📙 Difference Between if and elif

| if | elif |
|---|---|
| Checks the first condition | Checks additional conditions |
| Runs first | Runs only if previous condition is False |
| Required in conditional statements | Optional |

---

## 📗 Multiple elif Example

```python
light = "yellow"

if (light == "red"):
    print("Stop")

elif (light == "yellow"):
    print("Ready")

elif (light == "green"):
    print("Go")
```

Output:

```python
Ready
```

---

# 4️⃣ else Statement

## 📘 What is else Statement?

The `else` statement runs when all conditions become False.

---

## 📙 Syntax of else

```python
if (condition):
    code

else:
    code
```

---

## 📗 Traffic Light Example Using else

```python
light = "blue"

if (light == "red"):
    print("Stop")

elif (light == "yellow"):
    print("Ready")

elif (light == "green"):
    print("Go")

else:
    print("Invalid Traffic Light Color")
```

Output:

```python
Invalid Traffic Light Color
```

---

## 📘 Explanation

Python checks:

```python
(light == "red")
```

Result:

```python
False
```

Then:

```python
(light == "yellow")
```

Result:

```python
False
```

Then:

```python
(light == "green")
```

Result:

```python
False
```

Since all conditions became False:

```python
else
```

runs automatically.

---

## 📙 Difference Between if, elif, and else

| Statement | Purpose |
|---|---|
| if | Checks the first condition |
| elif | Checks more conditions |
| else | Runs when all conditions are False |

---

## 📗 How Many Times Can We Write Them?

| Statement | Usage Limit |
|---|---|
| if | Only 1 time |
| elif | Multiple times |
| else | Only 1 time |

---

## 📘 Correct Sequence

```python
if
elif
else
```

This order is important.

---

# 5️⃣ Indentation in Python

## 📘 What is Indentation?

Python uses indentation to define blocks of code.

Indentation means:

```text
Spaces before code
```

---

## 📙 Correct Example

```python
if (True):
    print("Hello")
```

---

## 📗 Wrong Example

```python
if (True):
print("Hello")
```

Output:

```python
IndentationError
```

---

## 📘 Why Indentation is Important?

Indentation tells Python:

```text
Which code belongs inside the condition
```

Without proper indentation, Python cannot understand the code structure.

---

# 6️⃣ Multiple if vs if-elif-else

## 📘 What is Multiple if?

In multiple `if` statements:

```text
Every condition checks independently
```

Even if one condition becomes True:

```text
Python still checks the remaining if statements.
```

---

## 📙 Flow of Multiple if

```text
Condition 1 → Check
Condition 2 → Check
Condition 3 → Check
```

---

## 📗 Wrong Example Using Multiple if

We will use a **Loyalty Reward Tier** example.

A customer should only have:

- Bronze Membership
- Silver Membership
- Gold Membership

A customer cannot belong to all tiers at the same time.

```python
points = 100

if(points >= 20):
    print("Bronze Member - Free Chocolate Unlocked!")

if(points >= 50):
    print("Silver Member - Free Ice Cream Unlocked!")

if(points >= 100):
    print("Gold Member - Free Toy Unlocked!")
```

Output:

```text
Bronze Member - Free Chocolate Unlocked!
Silver Member - Free Ice Cream Unlocked!
Gold Member - Free Toy Unlocked!
```

---

## 📘 Explanation

All three conditions became True because:

```python
points = 100
```

So Python executed all three `if` statements separately.

But logically:

```text
A customer should only have ONE membership tier.
```

So this approach is wrong.

---

## 📙 Correct Example Using if-elif-else

```python
points = 100

if(points >= 100):
    print("Gold Member - Free Toy Unlocked!")

elif(points >= 50):
    print("Silver Member - Free Ice Cream Unlocked!")

elif(points >= 20):
    print("Bronze Member - Free Chocolate Unlocked!")

else:
    print("Keep earning points to unlock rewards!")
```

Output:

```text
Gold Member - Free Toy Unlocked!
```

---

## 📗 Explanation

Python first checked:

```python
(points >= 100)
```

Result:

```python
True
```

So Python printed:

```text
Gold Member - Free Toy Unlocked!
```

After finding the first True condition:

```text
Python stopped checking further conditions.
```

---

## 📘 Flow of if-elif-else

```text
Condition 1 → True
        ↓
Run Block
        ↓
Stop Further Checking
```

---

## 📙 Difference Between Multiple if and if-elif-else

| Multiple if | if-elif-else |
|---|---|
| All conditions are checked | Stops after first True condition |
| Multiple blocks can run together | Only one block runs |
| Conditions are independent | Conditions are connected |

---

## 📗 Correct Use of Multiple if

```python
has_pencil = True
has_book = True
has_water_bottle = True

if (has_pencil):
    print("Pencil packed - ready to write!")

if (has_book):
    print("Book packed - ready to study!")

if (has_water_bottle):
    print("Water bottle packed - no more thirst!")
```

Output:

```text
Pencil packed - ready to write!
Book packed - ready to study!
Water bottle packed - no more thirst!
```

---

## 📘 Why Multiple if is Correct Here?

Because all these conditions can be True together at the same time.

---

# 7️⃣ Logical Operators with Conditions

Logical operators help us combine multiple conditions.

---

## 📘 Using and Operator

The `and` operator returns True only when:

```text
Both conditions are True
```

---

### Example

```python
marks = 85
attendance = 90

if ((marks >= 80) and (attendance >= 75)):
    print("Pass")
```

Output:

```python
Pass
```

---

## 📙 Using or Operator

The `or` operator returns True when:

```text
At least one condition is True
```

---

### Example

```python
day = "Sunday"

if ((day == "Sunday") or (day == "Saturday")):
    print("Weekend")
```

Output:

```python
Weekend
```

---

# 8️⃣ Nested Conditions

## 📘 What are Nested Conditions?

Nested conditions mean:

```text
A condition inside another condition
```

---

## 📙 Syntax of Nested Conditions

```python
if (condition):

    if (condition):
        code
```

---

## 📗 Example of Nested Conditions

```python
age = 20
has_id = True

if (age >= 18):

    if (has_id == True):
        print("Entry Allowed")

    else:
        print("ID Required")

else:
    print("Under Age")
```

Output:

```python
Entry Allowed
```

---

## 📘 How Nested Conditions Work

Python first checks:

```python
(age >= 18)
```

If this becomes True:

then Python checks the inner condition:

```python
(has_id == True)
```

If both conditions are True:

```python
Entry Allowed
```

prints.

---

## 📙 Nested Condition Flow Diagram

```text
Check Age
    │
    ▼
Age >= 18 ?
   /    \
 Yes     No
  │       │
  ▼       ▼
Check ID  Under Age
  │
  ▼
ID True?
 /    \
Yes    No
 │      │
 ▼      ▼
Entry   ID Required
Allowed
```

---

# 9️⃣ Truthy and Falsy Values in Python

We already learned that conditions work on:

```python
True
```

and

```python
False
```

Now let's understand an important concept called:

```text
Truthy and Falsy Values
```

---

# 📗 Example Using Static True Values

```python
has_pencil = True
has_book = True
has_water_bottle = True

if (has_pencil):
    print("Pencil packed - ready to write!")

if (has_book):
    print("Book packed - ready to study!")

if (has_water_bottle):
    print("Water bottle packed - no more thirst!")
```

Output:

```text
Pencil packed - ready to write!
Book packed - ready to study!
Water bottle packed - no more thirst!
```

---

# 📘 Explanation

In this example:

```python
has_pencil = True
```

means:

```text
Condition is True
```

So Python runs the code inside the `if` block.

The same happens for:

```python
has_book
```

and

```python
has_water_bottle
```

because all variables contain:

```python
True
```

---

# 📙 What if We Use Input?

Now suppose we want to ask the user.

Example:

```python
has_pencil = input("Do you have pencil?")
```

If the user writes:

```text
True
```

or

```text
False
```

Python still receives them as:

```python
"True"
```

and

```python
"False"
```

because:

```python
input()
```

always returns data in:

```text
String form
```

---

# 📘 Using bool() Function

Some students may think this is correct:

```python
has_pencil = bool(input("Do you have pencil?"))
```

But this creates confusion.

---

# 📗 The Problem

Suppose user writes:

```text
False
```

Python actually receives:

```python
"False"
```

Now Python checks:

```python
bool("False")
```

Output:

```python
True
```

---

# 📕 Why Does This Happen?

Because:

```text
"False"
```

is not an empty string.

Python does not check the text inside the string.

Python only checks:

```text
Is the value empty or not?
```

If the string contains any text:

```python
bool("Hello")
bool("False")
bool("0")
```

all become:

```python
True
```

because they are not empty.

---

# 📘 Example

```python
print(bool("False"))   # True
print(bool("Hello"))   # True
print(bool("0"))       # True
print(bool(""))        # False
```

---

# 📙 Falsy Values in Python

Falsy values are values that become:

```python
False
```

when passed inside:

```python
bool()
```

---

# 📗 Common Falsy Values

| Value | Type |
|---|---|
| `False` | Boolean |
| `None` | NoneType |
| `0` | Integer |
| `0.0` | Float |
| `0j` | Complex |
| `""` | Empty String |
| `[]` | Empty List |
| `()` | Empty Tuple |
| `{}` | Empty Dictionary |
| `set()` | Empty Set |

---

# 🖼️ Falsy Values Diagram

![Falsy Values Diagram](images/Falsy-values.png)

---

# 📘 Important Rule

```text
All empty values are mostly False.
All non-empty values are mostly True.
```

---

# 📗 Correct Way to Take True/False Input

```python
has_pencil = input("Do you have pencil give me answer in this form (True or False)").lower()

if (has_pencil == "true"):
    print("Pencil packed - ready to write!")

elif (has_pencil == "false"):
    print("Not pencil")

else:
    print("Invalid input please write only True or False")
```

---

# 📙 Explanation

We use:

```python
.lower()
```

so users can write:

```text
TRUE
True
true
```

and all become:

```python
"true"
```

Then we manually compare the string with:

```python
"true"
```

and

```python
"false"
```

This is the correct and safer approach for user input.

---
