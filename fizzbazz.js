/**
 * Implement the solution in this function
 *
 * @param {number} n Output goes from 1 to n
 * @returns {(number|string)[]} An array containing all numbers and strings
 */
function fizzbuzz (n) {
if (n%5 === 0){
    console.log("\"Buzz,\"");
}
else if (n%3 ===0){
    console.log("\"Fizz,\"");
}
else if (n%15 ===0){
    console.log("\"FizzBuzz,\"");
}
else {
    console.log(n+",");
}
}