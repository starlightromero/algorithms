const sort = (arr) => {
  const resultArr = [...arr]

  for (let outer = 0; outer < resultArr.length; outer++) {
    let outerElement = resultArr[outer]

    for (let inner = outer + 1; inner < resultArr.length; inner++) {
      let innerElement = resultArr[inner]
      if (outerElement > innerElement) {
        resultArr[outer] = innerElement
        resultArr[inner] = outerElement
        outerElement = resultArr[outer]
        innerElement = resultArr[inner]
      }
    }
  }

  return resultArr
}

const sortedArray = sort([5, 10, -3, -10, 1, 100, 99])
console.log(sortedArray)

// Time Complexity: O(n^2)
// Space Complexity: O(1)
