// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// const chunk = (array, size) => {
//   const result = []
//   array.forEach((num, i) => {
//     const resultIndex = Math.floor(i / size)
//     result[resultIndex] ? result[resultIndex].push(num) : result[resultIndex] = [num]
//   })
//   return result
// }

const chunk = (array, size) => {
  const result = []
  let index = 0
  while (index < array.length) {
    result.push(array.slice(index, index + size))
    index += size
  }
  return result
}

module.exports = chunk
