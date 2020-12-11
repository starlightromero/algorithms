const detectCapitalUse = word => {
  return word === word.toUpperCase() ||
    word === word.toLowerCase() ||
    word === word[0].toUpperCase() + word.slice(1).toLowerCase()
}

module.exports = detectCapitalUse
