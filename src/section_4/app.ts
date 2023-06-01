const hobbies = ['a', 'b']
const activeHobbies = ['c']

activeHobbies.push(...hobbies)
console.log(activeHobbies)

const person2 = {
  firstName: 'Max',
  age: 30,
}

const copiedPerson = {
  ...person2,
}

console.log(copiedPerson)

const add = (...numbers: number[]) => {
  let result = 0
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue
  }, 0)
}

const addedNumbers = add(5, 10, 2, 3.7)
console.log(addedNumbers)


const [hobby1, hobby2, ...remainingHobbies] = hobbies
console.log('aa')
console.log(hobbies, hobby1, hobby2)


const { firstName: userName, age } = person2
console.log(userName, age, person2)