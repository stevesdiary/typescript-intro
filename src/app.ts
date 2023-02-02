//type Aliases:  Here the type of values is represented by an alias which can be used to denote the type whenever we want to use it.

import { type } from "os"

type stringOrNumber = string | number

type stringOrNumberArray = (string | number)[]
type Guitarists = {
   name?: string,
   active: boolean,
   albums: stringOrNumberArray
}
type UserId = stringOrNumber

//interface postId = stringOrNumber  // Interface doesn't work with type Aliases.


// Literal types

let userName: 'Dave' | 'John' | 'Amy'
userName = 'Amy'  //Using any other username other than (Dave, John or Amy) will flag error because they have been declared literally so it puts it in a limit of only what is declared.


//Functions: the type of input of function can also be specified including that of the expected return value
const add = (a: number, b: number): number => {
   return  a + b
}

const logMsg = (message: any): void => {
   console.log(message)
}

logMsg('Hello!')
logMsg(add(2,3))
// logMsg(add('a',3))

let subtract = function (c: number, d: number):
number {
   return c - d
}

type mathFunction = (a: number, b: number) => number
// interface mathFunction {
//    (a: number, b: number):number
// }
let multiply: mathFunction = function (c, d) {
   return c * d 
}
logMsg(multiply(2,2))

const addAll = (a: number, b:number, c?: number): number => {
   if( typeof c !== 'undefined') {
      return a + b + c
   }
   return a + b
}
// default param value
const sumAll = (a: number=10, b: number, c: number = 2): number => {
   return a + b + c
} 
logMsg(addAll(2, 3, 2))
logMsg(addAll(2, 3))
logMsg(sumAll(2, 3 ))
logMsg(sumAll(undefined, 3))  //Note that default value will not work with type Alias like we did with mathFunction 

// Rest Parameter

const total = (...nums: number[]): number =>{
   return nums.reduce((prev, curr)=> prev + curr)
}

logMsg(total(10, 2, 3))


const createError = (errMsg: string): never => {
   throw new Error(errMsg)
}

const infinite = () => {
   let i: number = 1
   while (true) {
      i++
      if ( i > 100) break
   }
} 
//Custom type guard
const isNumber = (value: any): boolean => {
   return typeof value === 'number'
   ? true : false
}

// Use of never type
const numberOrString = (value: number | string): string => {
   if (typeof value === 'string') return 'string'
   if (isNumber(value)) return 'number'
   return createError('This should never happen!')
}