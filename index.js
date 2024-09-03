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
    console.log(counter);
    console.error(e);
  }
}
counterIncrement();

