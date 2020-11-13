const findElement = (arr, element) => {
  let index = 0
  for (const a of arr) {
    if (a === element) {
      return index
    }
    index++
  }
}

const arr = [5, 3, 10, -10, 33, 51]

console.log(findElement(arr, 10))

// Time Complexity: O()
// Space Complexity: O(1)
