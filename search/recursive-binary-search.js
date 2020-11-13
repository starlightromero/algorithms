const findElement = (arr, element, offset = 0) => {
  let startIndex = 0
  let endIndex = arr.length - 1

  const middleIndex = Math.floor((endIndex - startIndex) / 2)

  if (element === arr[middleIndex]) {
    return middleIndex + offset
  }

  if (arr[middleIndex] < element) {
    startIndex = middleIndex + 1
    offset += startIndex
  } else {
    endIndex = middleIndex
  }
  return findElement(arr.slice(startIndex, endIndex + 1), element, offset)
}

const arr = [1, 5, 9, 13, 99, 100]

console.log(findElement(arr, 99))

// Time Complexity: O()
// Space Complexity: O(n)
