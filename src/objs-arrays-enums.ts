enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR
}

// const person: {
//   name: string
//   age: number
//   hobbies: string[]
//   role: [number, string]
//   aa: enum
// } = {
const person = {
  name: 'wai',
  age: 30,
  hobbies: ['sports', 'cooking'],
  role: [2, Role.AUTHOR]
}
