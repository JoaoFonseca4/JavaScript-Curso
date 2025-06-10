
const students = [
    { name: 'Jake', score: 6.4 },
    { name: 'Susan', score: 8.6 },
    { name: 'Emma', score: 9.4 },
    { name: 'Peter', score: 9.1 },
]

const getScore = el => el.score

const result =  students
    .map(getScore)
    .map(Math.ceil)

console.log(students, result)


