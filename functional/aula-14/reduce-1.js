const numbers = [1, 2, 3, 4, 5, 6]

const sum = (total, el) => total + el
const total = numbers.reduce(sum)
console.log(total)
