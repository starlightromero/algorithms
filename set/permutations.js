// Without Repetitions

const getPermutations = (options) => {
  const permutations = []

  if (options.length === 1) {
    return [options]
  }

  const partialPermutations = getPermutations(options.slice(1))

  const firstOption = options[0]

  for (let i = 0; i < partialPermutations.length; i++) {
    const partialPermuation = partialPermutations[i]

    for (let j = 0; j <= partialPermuation.length; j++) {
      const permutationInFront = partialPermuation.slice(0, j)
      const permutationInBack = partialPermuation.slice(j)
      permutations.push(permutationInFront.concat([firstOption], permutationInBack))
    }
  }

  return permutations
}

const todoListItems = ['walk the dog', 'clean the toilet', 'buy groceries', 'order food']

console.log(getPermutations(todoListItems))

// Time Complexity: O(n!)
// Space Complexity: O
