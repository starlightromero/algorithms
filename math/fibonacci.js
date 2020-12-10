const fib = n => {
  const numbers = [1, 1]
  for (let i = 2; i < n + 1; i++) {
    numbers.push(numbers[i - 1] + numbers[i - 2])
  }
  return numbers[n]
}

console.log(fib(4))
