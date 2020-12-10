const sort = (arr) => {
  const copiedArray = [...arr]

  if (copiedArray.length <= 1) {
    return copiedArray
  }

  const smallerElementsArray = []
  const biggerElementsArray = []
  const pivotElement = copiedArray.shift()
  const centerElementsArray = [pivotElement]

  while (copiedArray.length) {
    const currentElement = copiedArray.shift()
    if (currentElement === pivotElement) {
      centerElementsArray.push(currentElement)
    } else if (currentElement > pivotElement) {
      biggerElementsArray.push(currentElement)
    } else {
      smallerElementsArray.push(currentElement)
    }
  }

  const smallerElementsSortedArray = sort(smallerElementsArray)
  const biggerElementsSortedArray = sort(biggerElementsArray)

  return smallerElementsSortedArray.concat(centerElementsArray, biggerElementsSortedArray)
}

const sortedArray = sort([5, 10, -3, -10, 1, 100, 99])
console.log(sortedArray)

// Time Complexity: O(log n)
// Space Complexity: O(n) || O(log n)
