// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

const capitalize = str => {
  const array = str.split(' ')
  for (const index in array) {
    array[index] = array[index][0].toUpperCase() + array[index].slice(1)
  }
  return array.join(' ')
}

module.exports = capitalize
