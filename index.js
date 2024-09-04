//Part 1: Stack Overflow
//counter Variable
let counter = 0;

//Create a simple function that increments the variable, and then calls itself recursively.
//Surround the initial function call in a try/catch block.
function counterIncrement() {
  try {
    counter += 1;
    counterIncrement();
  } catch (e) {
    console.log("Max size of Call Stack:", counter);
    console.error(e);
  }
}
counterIncrement();

//Part 2 Trampolines

// Write a recursive function that completely flattens an array of nested arrays, regardless of how deeply nested the arrays are.
// Once your recursive function is complete, trampoline it.

// Flatten function for an array using trampoline
function trampolineFlattenArray(arr) {
  return trampoline(() => flatten(arr));
}

// Flatten function to create function for trampoline
function flatten(arr) {
  let result = [];
  let index = 0;

  //Recursive function to process the array
  function processArray() {
    while (index < arr.length) {
      const element = arr[index++];
      if (Array.isArray(element)) {
        // Flatten the nested array
        const nestedResult = trampolineFlattenArray(element);
        result.push(...nestedResult);
      } else {
        result.push(element); // push the elements to the result
      }
    } // final result wrapped in a function
    return () => result;
  }

  return processArray;
}

// Trampoline function to handle recursive calls iteratively
function trampoline(fn) {
  let result = fn();
  while (typeof result === "function") {
    result = result();
  }
  return result;
}

console.log(trampolineFlattenArray([1, [2, [3, 4], 5]]));
console.log(trampolineFlattenArray([1, [2, [3, [4]]], 5]));
console.log(trampolineFlattenArray([1, [2, [3, [4, [5, [6]]]]]]));
console.log(trampolineFlattenArray([1, [2, [3]], 4, [5, [6, [7]]]]));
