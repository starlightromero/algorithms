const sort = (arr) => {
  if (arr.length < 2) {
    return arr
  }
  if (arr.length === 2) {
    return arr[0] > arr[1] ? [arr[1], arr[0]] : arr
  }
  const middle = Math.floor(arr.length / 2)
  const leftArray = arr.slice(0, middle)
  const rightArray = arr.slice(middle)

  const leftSortedArray = sort(leftArray)
  const rightSortedArray = sort(rightArray)

  const mergedArr = []
  let leftArrayIndex = 0
  let rightArrayIndex = 0
  while (leftArrayIndex < leftSortedArray.length || rightArrayIndex < rightSortedArray.length) {
    if (leftArrayIndex >= leftSortedArray.length || leftSortedArray[leftArrayIndex] > rightSortedArray[rightArrayIndex]) {
      mergedArr.push(rightSortedArray[rightArrayIndex])
      rightArrayIndex++
    } else {
      mergedArr.push(leftSortedArray[leftArrayIndex])
      leftArrayIndex++
    }
  }

  return mergedArr
}

const sortedArray = sort([5, 10, -3, -10, 1, 100, 99])
console.log(sortedArray)

// Time Complexity: O(log n)
// Space Complexity: O(n)
