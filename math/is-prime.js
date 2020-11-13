const isPrime = number => {
  for (let i = 2; i < Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false
    }
  }
  return true
}

console.log(isPrime(9))
