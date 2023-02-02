import { type } from "os";

type One = string
type Two = string | number
type Three = 'Hello'

//Convert to more or less specific

let a: One = 'hello' 
let b = a as Two //Less specific type
let c = a as Three // more specific
//typescript also uses angle brackets to assign a defined type

let d = <One>'World'  //note that angle brackets (<>) can not be used with tsx files in react. 
let e = <string | number>'World' 

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
   if (c === 'add') return a + b
   return '' + a + b
}

let myVal: string = addOrConcat(2,3,'concat') as string

// Be careful! TS sees no problem  - but a string is returned
let nextVal: number = addOrConcat(2,2,'concat') as number

// 10 as string
(10 as unknown) as string

//The DOM

const img = document.querySelector('img')!

const myImg = document.getElementById('#img') as HTMLImageElement   // The ! is a non-null asserrtion that can be used to tell typescript that this is not null
const nextImg = document.getElementById('#img')
img.src
myImg.src 