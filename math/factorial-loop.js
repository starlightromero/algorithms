const fact = n => {
  let result = 1
  for (let i = 2; i <= n; i++) {
    result = result * i
  }
  return result
}

console.log(fact(10))

// Time Complexity: O()
// Space Complexity: O(1)
