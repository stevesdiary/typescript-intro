// Index Signatures, Key of Assertions & the Record Utility Type

import { type } from "os"

// interface TransactionObj {
//    readonly [index: string]: number
// }

interface TransactionObj {
   readonly [index: string]: number
   Pizza: number,
   Books: number,
   Job: number
}

const todaysTransactions: TransactionObj = {
   Pizza: -10,
   Books: -5,
   Job: 50
}

console.log(todaysTransactions.Pizza)
console.log(todaysTransactions['Pizza'])



//Dynamically accessing properties

let prop: string = 'Pizza'
console.log(todaysTransactions[prop])

const todaysNet = (transactions: TransactionObj): number => {
   let total = 0 
   for (const transaction in transactions) {
      total += transactions[transaction]
   }
   return total
}

console.log(todaysNet(todaysTransactions))

// todaysTransactions.Pizza = 40

console.log(todaysTransactions['Dave'])


//////////////////////////////////////

interface Student {
   // [key: string]: string | number | number[] | undefined
   name: string,
   GPA: number,
   classes?: number[]
}

const student: Student = {
   name: "Sam",
   GPA: 3.5,
   classes: [100, 200]
}

// console.log(student.test)

for (const key in student) {
   console.log(`${key}: ${student[key as keyof Student]}`)
}

Object.keys(student).map(key => {
   console.log(student[key as  keyof typeof student])
})

const logStudentKey = (student: Student, key: keyof Student): void => {
   console.log(`Student ${key}: ${student[key]}`)
}

logStudentKey(student, 'GPA')


////////////////////////////////////////////

// interface Incomes {
//    [key: string]: number
// }
//this can also be written as: follows

type Streams = 'salary' | 'bonus' | 'extra'

type Incomes = Record<Streams, number | string>

const monthlyIncomes: Incomes = {
   salary: 5000,
   bonus: 100,
   extra: 250
}

for (const revenue in monthlyIncomes) {
   console.log(monthlyIncomes[revenue as keyof Incomes])
}