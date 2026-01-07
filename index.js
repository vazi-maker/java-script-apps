// var number = 10;
// console.log(number);
// var number = 20;
// console.log(number);
// let number = 70;
// number = 79;
// console.log(number);
// const pi = 3.17;
// console.log(pi);
// const country="India";
//calculation of days and months
// const days = 30;
// const months = 12;
// let count = 1000;
// console.log("no.of months:", count / 30);
// count = count % 30;
// console.log(count);
// console.log("no.of years:", count / 365);
// count = count % 365;
// console.log(count);
// let weight = 166;
// let age = 25;
// let height = 5.4;
// if (60 < weight < 120 && 20 < age < 60 && 4.5 < height < 7) {
//   console.log("person can bungee jump");
// } else {
//   console.log("person cannot bungee jump");
// }
// Example 1: Basic Array Operations (push, pop, shift, unshift)
function example1_BasicOperations() {
  let fruits = ["apple", "banana"];
  console.log("Initial array:", fruits);

  // push - adds to end
  fruits.push("orange");
  console.log("After push('orange'):", fruits);

  // pop - removes from end
  let removed = fruits.pop();
  console.log("After pop():", fruits, "| Removed:", removed);

  // unshift - adds to beginning
  fruits.unshift("mango");
  console.log("After unshift('mango'):", fruits);

  // shift - removes from beginning
  removed = fruits.shift();
  console.log("After shift():", fruits, "| Removed:", removed);
}

// Example 2: Array Iteration (forEach, map)
function example2_Iteration() {
  console.log("\n=== Example 2: Array Iteration ===");

  let numbers = [1, 2, 3, 4, 5];

  // forEach - execute function for each element
  console.log("Using forEach to print doubled values:");
  numbers.forEach((num) => console.log(`  ${num} * 2 = ${num * 2}`));

  // map - creates new array with transformed values
  let squared = numbers.map((num) => num * num);
  console.log("Original:", numbers);
  console.log("Squared using map:", squared);
}

// Example 3: Array Filtering and Finding
function example3_FilterAndFind() {
  console.log("\n=== Example 3: Filter and Find ===");

  let ages = [12, 18, 25, 30, 15, 45, 17];

  // filter - creates new array with elements that pass test
  let adults = ages.filter((age) => age >= 18);
  console.log("All ages:", ages);
  console.log("Adults (>= 18):", adults);

  // find - returns first element that passes test
  let firstAdult = ages.find((age) => age >= 18);
  console.log("First adult age:", firstAdult);

  // includes - checks if array contains value
  console.log("Includes 25?", ages.includes(25));
  console.log("Includes 100?", ages.includes(100));
}

// Example 4: Array Reduction
function example4_Reduce() {
  console.log("\n=== Example 4: Reduce ===");

  let prices = [10.99, 25.5, 5.99, 15.0];

  // reduce - reduces array to single value
  let total = prices.reduce((sum, price) => sum + price, 0);
  console.log("Prices:", prices);
  console.log("Total:", total.toFixed(2));

  // Finding max using reduce
  let numbers = [45, 12, 89, 23, 67];
  let max = numbers.reduce((maximum, current) =>
    current > maximum ? current : maximum
  );
  console.log("Numbers:", numbers);
  console.log("Maximum value:", max);
}

// Example 5: Array Sorting and Reversing
function example5_SortAndReverse() {
  console.log("\n=== Example 5: Sort and Reverse ===");

  let words = ["banana", "apple", "cherry", "date"];
  console.log("Original:", words);

  // sort - sorts array (modifies original)
  words.sort();
  console.log("After sort():", words);

  // reverse - reverses array (modifies original)
  words.reverse();
  console.log("After reverse():", words);

  // Sorting numbers (need compare function)
  let nums = [100, 5, 25, 10, 1];
  console.log("\nNumbers original:", nums);
  nums.sort((a, b) => a - b); // ascending
  console.log("Sorted ascending:", nums);
  nums.sort((a, b) => b - a); // descending
  console.log("Sorted descending:", nums);
}

// Run all examples
function runAllExamples() {
  example1_BasicOperations();
  example2_Iteration();
  example3_FilterAndFind();
  example4_Reduce();
  example5_SortAndReverse();
}

// Execute
runAllExamples();
