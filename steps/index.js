// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

const steps = n => {
  if (!Number.isInteger(n) || n < 1) {
    throw new Error('steps parameter must be a positive integer!')
  }
  let stair = new Array(n + 1).join(' ')
  for (let i = 1; i <= n; i++) {
    stair = '#'.repeat(i) + stair.slice(i)
    console.log(stair)
  }
}

module.exports = steps
