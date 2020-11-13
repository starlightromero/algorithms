const fact = n => n === 1 ? 1 : n * fact(n - 1)

console.log(fact(10))

// Time Complexity: O()
// Space Complexity: O(n)
