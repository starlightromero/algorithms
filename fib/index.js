// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

const fib = (n, memo = {}) => {
  let result
  if (memo[n]) {
    return memo[n]
  }
  if (n === 0 || n === 1) {
    result = n
  } else {
    result = fib(n - 1, memo) + fib(n - 2, memo)
  }
  memo[n] = result
  return result
}

console.log(fib(7))

module.exports = fib
