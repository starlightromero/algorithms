// Time Complexity: O(n)
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

const availableCoins = [100, 50, 20, 10, 5, 2, 1]
const targetAmount = 100
const changeAmount = computeChange(availableCoins, targetAmount)
console.log(changeAmount)
