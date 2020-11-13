const cartProduct = (setA, setB) => {
  const product = []

  for (let setAEl of setA) {
    if (!Array.isArray(setAEl)) {
      setAEl = [setAEl]
    }
    for (const setBEl of setB) {
      product.push([...setAEl, setBEl])
    }
  }
}

const cartesian = (...sets) => {
  let tempProduct = sets[0]

  for (let i = 1; i < sets.length; i++) {
    tempProduct = cartProduct(tempProduct, sets[i])
  }

  return tempProduct
}

const colors = ['blue', 'red']
const sizes = ['S', 'M', 'L', 'XL']
const styles = ['round neck', 'v neck']
console.log(cartProduct(colors, sizes))
console.log(cartesian(colors, sizes, styles))

// Time complexity: O(n^x)
// Space complexity: O(n^x)
