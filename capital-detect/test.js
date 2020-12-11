const detectCapitalUse = require('./index')

test('detectCapitalUse is a function', () => {
  expect(typeof detectCapitalUse).toEqual('function')
})

test('detects if the given string has a valid use of capitalization', () => {
  expect(detectCapitalUse('Google')).toBeTruthy()
})

test('detects if the given string has a valid use of capitalization', () => {
  expect(detectCapitalUse('USA')).toBeTruthy()
})

test('detects if the given string has a valid use of capitalization', () => {
  expect(detectCapitalUse('FaceBook')).toBeFalsy()
})
