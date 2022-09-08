// 1. let vs var vs const
// let a = "This is a variable!"

// var b = "This is also a variable!"

// const c = "What?"

// console.log(a,b,c)

// if (true) {
//   var var_variable = "this is true!"
//   // HERE
// }

// console.log(var_variable)
// var variables have a global scope -> function scope

// if (true) {
//   let let_variable = "this is also true!"
//   // HERE
// }

// console.log(let_variable)
// let variables are block scoped


// var a = "abc"
// var a = "xyz" // redeclaration of a variable

// console.log(a)

// let b = "abc"
// b = "xyz"

// console.log(b) // redifinition of a variable defined using let

// console.log(something) // hoisting and execution contexts

// var something = "Randomly something!"
// let something = "Randomly something now!"

const const_variable = 456

// const_variable = 567
// neither reassignment nor redeclaration is allowed

const const_object = {
  name: "Thor"
}

const_object.name = "thor odinson"
const_object.age = 1550