// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

const reverseInt = n => {
  const sign = Math.sign(n)
  let reversed = ''
  const numAsString = sign === 1 ? n.toString() : n.toString().substr(1)
  for (const c of numAsString) {
    reversed = c + reversed
  }
  return +reversed * sign
}

module.exports = reverseInt
