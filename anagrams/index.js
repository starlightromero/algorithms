// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// const anagrams = (stringA, stringB) => {
//   const strMap = {}
//   const strA = stringA.replace(/[^\w]/g, '').toLowerCase()
//   const strB = stringB.replace(/[^\w]/g, '').toLowerCase()
//   if (strA.length !== strB.length) {
//     return false
//   }
//   let index = 0
//   while (index < strA.length) {
//     strMap[strA[index]] ? strMap[strA[index]] += 1 : strMap[strA[index]] = 1
//     strMap[strB[index]] ? strMap[strB[index]] -= 1 : strMap[strB[index]] = -1
//     index++
//   }
//   for (const key in strMap) {
//     if (strMap[key] !== 0) {
//       return false
//     }
//   }
//   return true
// }

const cleanString = str => {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
}

const anagrams = (stringA, stringB) => {
  return cleanString(stringA) === cleanString(stringB)
}

module.exports = anagrams
