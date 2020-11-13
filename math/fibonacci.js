// const fib = n => {
//   const numbers = [1, 1]
//   for (let i = 2; i < n + 1; i++) {
//     numbers.push(numbers[i - 1] + numbers[i - 2])
//   }
//   return numbers[n]
// }

const fib = (n, memo) => {
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

console.log(fib(4, {}))
