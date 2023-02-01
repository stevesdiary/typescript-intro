// Objects, Arrays, Tuples, & Enums

import { type } from "os"

let stringArr = ['one', 'hey', 'chicken']

let guitars = ['strat', 'Les Paul', 5150]

let mixedData = ['EVH', 1984, true]

stringArr[0]
stringArr.push('red')
guitars[0] = 1984

guitars.unshift('Jim')

guitars = stringArr

mixedData = guitars
//guitars = mixedData  //the type of data has restricted us from reassigning anothe typeof array to it but it can work the other way round.
                     // the same goes for guitars and stringArr

let test = []
let bands: string[] = []
bands.push('Fanny James')

//Tuple  (Tuple can be used to strictly specify the position of the elements of an array)
let myTuple: [string, number, boolean] = ['Dave', 45, true]
// for example
let mixed = ['Jonah', 5, false]

myTuple[1] = 23  //the position of the el;ement allowable to be added can only be the type of the element in that position.

//Objects\
let myObj: object
myObj = []
console.log(typeof myObj)

myObj =  bands
myObj = {}

const exampleObj = {
   prop1: 'Salome',
   prop2: true
}
//Similar to the tuples, prop1 and prop2 can only be assigned string and boolean respectively
exampleObj.prop1 = 'John'

type Guitarist = {
   name: string,
   active?: boolean,             // The ? make it an optional value (boolean and undefined)
   albums: (string | number)[]
}
interface Guitarists {
   name?: string,
   active: boolean,             //Objects can also be defined by using interface
   // When we have optional ? on the name or active but while trying to use the attributes of string or boolean, the ?(optional) symbol must be put on the attributes whenever it is called.
   albums: (string | number)[]
}


let evh: Guitarist = {
   name: 'Eddie',
   active: false,
   albums: [1983, 2021, 'OU1218']
}

let jp: Guitarist = {
   name: 'Jimmy',
   active: true,
   albums:['I', 'II', 'IV']
}

const greetGuitarist = (guitarist: Guitarist) => {
   if(guitarist.name){
      return `Hello ${guitarist.name.toUpperCase()}!`
   }
   return 'Hello!'
}

console.log(greetGuitarist(jp))

//Enums
// 'Unlike most TypeScript features, Enums are not a type-level Addition to javascript but something added to the language and runtime.'

enum Grade {
   U,  // If U = 1, then the default U= 0 will be overwritten and all other elements of enum(grade) will follow as well.
   D,
   C,
   B,
   A
}
console.log(Grade.U)