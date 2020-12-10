const fib = (n, memo = {}) => {
  let result
  if (memo[n]) {
    return memo[n]
  }
  if (n === 0 || n === 1) {
    result = 1
  } else {
    result = fib(n - 1, memo) + fib(n - 2, memo)
  }
  memo[n] = result
  return result
}

console.log(fib(4))
