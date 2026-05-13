/**
 * Implement the solution in this function
 *
 * @param {number} n Examine this number
 * @returns {boolean} True if n is prime and false otherwise
 */
function isPrime (n) {
for (let i = 2; i < n; i++)
    if (n % i == 0)
      return false;
 
  return true;
}
// Driver Code
console.log(isPrime(11))