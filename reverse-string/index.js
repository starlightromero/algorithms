// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

const reverse = str => {
  let reversed = ''
  for (const c of str) {
    reversed = c + reversed
  }
  return reversed
}

module.exports = reverse
