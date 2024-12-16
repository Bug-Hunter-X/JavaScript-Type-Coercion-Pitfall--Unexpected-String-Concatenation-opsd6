# JavaScript Type Coercion Pitfall: Unexpected String Concatenation

This repository demonstrates a common JavaScript bug caused by loose typing and implicit type coercion.  The `foo` function intends to add two numbers, but due to the presence of a string argument, it performs string concatenation instead of numerical addition.

## Bug Description

The `bug.js` file contains a function that is supposed to add two numbers, however, when one of the arguments is a string, JavaScript implicitly coerces the number to a string, resulting in string concatenation.

## Solution

The `bugSolution.js` file provides a corrected version of the function, explicitly checking for the data type of the arguments and handling them appropriately. This robust error handling prevents unexpected behavior and ensures that the function behaves as intended.

## How to Reproduce the Bug

1. Clone this repository.
2. Navigate to the repository's directory in your terminal.
3. Run `node bug.js`.
4. Observe the unexpected output (string concatenation).