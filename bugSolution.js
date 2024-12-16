function foo(a, b) {
  //Check if both inputs are numbers
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; // performs numerical addition
  } else {
    console.error("Invalid input: Both arguments must be numbers");
    return NaN; // handle the error appropriately
  }
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(1, "1")); // Output: Invalid input: Both arguments must be numbers
NaN