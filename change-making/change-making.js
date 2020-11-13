// Time Complexity: O(n^2)
const computeChange = (coins, amount) => {
  let remainingAmount = amount

  const calculatedChange = {
    selectedCoins: {},
    numberOfCoins: 0
  }

  for (const coin of coins) {
    const count = Math.floor(remainingAmount / coin)
    calculatedChange.selectedCoins[coin] = count
    calculatedChange.numberOfCoins += count
    remainingAmount = remainingAmount - coin * count
    if (remainingAmount === 0) {
      return calculatedChange
    }
  }

  return calculatedChange
}

const computeChangeBruteForce = (coins, amount) => {
  const results = []
  for (let i = 0; i < coins.length; i++) {
    results.push(computeChange(coins.slice(i), amount))
  }

  let smallestAmountOfCoins = Number.MAX_SAFE_INTEGER
  let finalResult
  for (const result of results) {
    if (result.numberOfCoins < smallestAmountOfCoins) {
      smallestAmountOfCoins = result.numberOfCoins
      finalResult = result
    }
  }

  return finalResult
}

const availableCoins = [8, 6, 5, 1]
const targetAmount = 11
const changeAmount = computeChangeBruteForce(availableCoins, targetAmount)
console.log(changeAmount)
