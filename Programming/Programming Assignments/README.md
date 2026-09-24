# JavaScript Programming Assignments

This module contains beginner-to-intermediate JavaScript exercises focused on programming fundamentals, problem solving, arrays, strings, functions, and object-oriented programming.

## Module Purpose

The assignments are designed to build the programming foundation required for SQA and test automation work. The exercises practice data handling, control flow, reusable functions, validation logic, and class-based design.

## Learning Objectives

After completing this module, you should be able to:

- Declare and use variables and constants.
- Write functions with parameters and return values.
- Apply conditional statements and loops.
- Work with strings and arrays.
- Use array methods such as `includes`, `push`, and iteration.
- Solve common programming problems with reusable logic.
- Create and use JavaScript classes and inheritance.
- Run JavaScript files with Node.js.
- Debug syntax, runtime, and logical errors.
- Write simple input/output examples that can later be converted into automated tests.

## Assignment Index

### Number and Mathematical Logic

| Assignment | Practice Area |
|---|---|
| `EvenOdd.js` | Identify whether a number is even or odd. |
| `Factorialnumber.js` | Calculate the factorial of a number. |
| `FizzBuzz.js` | Apply multiple conditions and divisibility rules. |
| `celciousFaren.js` | Convert temperature values. |
| `sumArray.js` | Calculate the sum of array values. |
| `largestNumber.js` | Find the largest value from multiple numbers. |
| `largeNumber.js` | Store and return number values through a class. |

### String Exercises

| Assignment | Practice Area |
|---|---|
| `reverseString.js` | Reverse characters in a string. |
| `reverseString(1).js` | Additional reverse-string practice. |
| `palindrom.js` | Check whether a string is a palindrome. |
| `stringVowels.js` | Find vowels in a string. |
| `Countvowle.js` | Practice vowel-counting logic. |
| `parentString.js` | Practice string behavior through a parent class. |

### Array and Duplicate Exercises

| Assignment | Practice Area |
|---|---|
| `Array.js` | Work with array values and iteration. |
| `DArray.js` | Practice duplicate-array logic. |
| `countDuplicates.js` | Find repeated values in an array. |
| `Vowels.js` | Practice array processing through inheritance. |
| `numberCheck.js` | Combine class-based checks and reusable methods. |
| `numberCheck(1).js` | Additional number-check practice. |

### Object-Oriented Programming and Inheritance

| Assignment | Practice Area |
|---|---|
| `checkLargeone.js` | Extend a parent class and process inherited values. |
| `numberEvenorodd.js` | Use inheritance for number validation. |
| `numberEvenorodd(1).js` | Additional inheritance and number-check practice. |

## How to Run an Assignment

### Prerequisites

- Node.js installed
- VS Code or another code editor
- A terminal such as PowerShell, Command Prompt, or Git Bash

Check Node.js:

```powershell
node --version
```

### Run a File

From this folder, run a file with:

```powershell
node .\Factorialnumber.js
```

For a filename containing spaces or special characters, use quotes:

```powershell
node ".\numberCheck(1).js"
```

You can also run a file using its full path:

```powershell
node "C:\Users\Ela\.vscode-shared\Programming\Programming Assignments\Factorialnumber.js"
```

## Suggested Test Data

Each assignment should be checked with normal, boundary, and invalid values where applicable.

| Data Type | Example Cases |
|---|---|
| Number | Positive, zero, negative, decimal, and very large values. |
| String | Empty string, one character, spaces, uppercase, lowercase, and special characters. |
| Array | Empty array, one item, repeated values, mixed values, and large arrays. |
| Function input | Valid input, missing input, incorrect type, and boundary input. |

## SQA Review Checklist

For each assignment, verify:

- The file runs without syntax errors.
- The function or class has a clear responsibility.
- Inputs are handled correctly.
- Expected output is produced for normal values.
- Boundary values are considered.
- Empty or invalid input does not cause an unexpected crash.
- Variables use clear names.
- The code does not rely on undeclared variables.
- `return` statements are placed at the correct level.
- Class methods are outside the constructor unless intentionally defined otherwise.
- Parent and child class property names match exactly.
- Output is understandable and consistent.

## Example Manual Test Case

| Field | Example |
|---|---|
| Test Case ID | JS-FACTORIAL-001 |
| Scenario | Calculate the factorial of a positive number |
| Input | `5` |
| Expected Result | `120` |
| Actual Result | Record during execution |
| Status | Pass or Fail |

## Common JavaScript Defects to Watch For

- Missing braces or parentheses.
- Calling a method without using the dot operator.
- Returning from inside a loop too early.
- Forgetting to return a calculated value.
- Using `=` instead of `===` in a condition.
- Using a variable before declaring it.
- Mixing `this.value` with a different property name.
- Calling a parent method that does not exist.
- Incorrect `import` and `export` syntax.
- Creating the parent object when the child object is required.
- Forgetting to pass constructor arguments.
- Using `Array` or `String` as custom class names, which can hide JavaScript built-ins.

## GitHub Submission

This folder is the JavaScript Programming Assignment module inside the main repository.

Suggested submission format:

```text
Module Name: JavaScript Programming Assignment
Repository Link: https://github.com/rabeyajahanj/ostadSQAbatch_21/tree/main/Programming/Programming%20Assignments
```

Specific file example:

```text
https://github.com/rabeyajahanj/ostadSQAbatch_21/blob/main/Programming/Programming%20Assignments/Factorialnumber.js
```

## Git Workflow

From the repository root:

```powershell
git add "Programming/Programming Assignments/README.md"
git commit -m "Add programming assignments README"
git push
```

## Completion Criteria

This module is complete when:

- All assignment files are stored in this folder.
- Each file runs successfully with Node.js.
- Expected outputs have been checked.
- Important edge cases have been considered.
- The README accurately describes the module.
- The repository link opens the folder for reviewers.
- No passwords, tokens, personal credentials, or local VS Code state files are included.
