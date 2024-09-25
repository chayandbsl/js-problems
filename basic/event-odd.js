// Problem Statement: Determine if a Number is Even or Odd

/* 
    ## Requirements:
    - Write a function named isEvenOrOdd that takes an integer as input.
    - The function should return:
        - "Even" if the number is even.
        - "Odd" if the number is odd.
        - If the input is not an integer, the function should return "Invalid input".

    ## Bonus Challenge:
    - Modify your function to handle a list of numbers and return an object (dictionary) 
      with each number as a key and its even/odd status as the value.
*/

function isEvenOrOdd(input) {
  const results = {};

  if (Array.isArray(input)) {
    input.forEach((number) => {
      if (typeof number !== "number" || !Number.isInteger(number)) {
        results[number] = "Invalid input";
      } else {
        results[number] = number % 2 === 0 ? "Even" : "Odd";
      }
    });

    return results;
  }

  if (typeof input !== "number" || !Number.isInteger(input)) {
    return "Invalid input";
  }

  return input % 2 === 0 ? "Even" : "Odd";
}

console.time("Execution Time for Array");
console.log(isEvenOrOdd([4, 7, 0, -3, 3.5, "abc"])); 
console.timeEnd("Execution Time for Array");

console.log("=================Single number output===================");
console.log(isEvenOrOdd(4));
console.log(isEvenOrOdd(7));
console.log(isEvenOrOdd(0));
console.log(isEvenOrOdd(-3));
console.log(isEvenOrOdd(3.5));
console.log(isEvenOrOdd("abc"));
