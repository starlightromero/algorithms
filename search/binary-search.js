const findElement = (arr, element) => {
  let startIndex = 0
  let endIndex = arr.length - 1

  while (startIndex <= endIndex) {
    const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2)

    if (element === arr[middleIndex]) {
      return middleIndex
    }

    if (arr[middleIndex] < element) {
      startIndex = middleIndex + 1
    } else {
      endIndex = middleIndex - 1
    }
  }
}

const arr = [1, 5, 9, 13, 99, 100]

console.log(findElement(arr, 99))

// Time Complexity: O()
// Space Complexity: O(1)
