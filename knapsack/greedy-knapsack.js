const knapsack = (elements, capacity) => {
  const sack = { items: [], value: 0, weight: 0 }
  let remainingCapacity = capacity
  for (const element of elements) {
    if (element.weight <= remainingCapacity) {
      sack.items.push()
      sack.value += element.value
      sack.weight += element.weight
      remainingCapacity -= element.weight
    }
  }

  return sack
}

const items = [
  { name: 'a', value: 3, weight: 3 },
  { name: 'b', value: 6, weight: 8 },
  { name: 'c', value: 10, weight: 3 }
]

const maxCap = 8

console.log(knapsack(items, maxCap))
