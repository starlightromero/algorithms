const fizzbuzz = num => {
  for (let i = 1; i < num; i++) {
    i % 15 === 0 ? console.log('FizzBuzz')
      : i % 5 === 0 ? console.log('Buzz')
        : i % 3 === 0 ? console.log('Fizz')
          : console.log(i)
  }
}

fizzbuzz(100)
