// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

const maxChar = str => {
  if (typeof str !== 'string') {
    throw new Error('maxChar takes a parameter of type string!')
  }
  const strMap = {}
  let highest = 0
  for (const c of str) {
    strMap[c] = strMap[c] + 1 || 1
    highest = strMap[c] > strMap[highest] || highest === 0 ? c : highest
  }
  return highest
}

module.exports = maxChar
