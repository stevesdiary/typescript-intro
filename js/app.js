"use strict";
// Objects, Arrays, Tuples, & Enums
Object.defineProperty(exports, "__esModule", { value: true });
let stringArr = ['one', 'hey', 'chicken'];
let guitars = ['strat', 'Les Paul', 5150];
let mixedData = ['EVH', 1984, true];
stringArr[0];
stringArr.push('red');
guitars[0] = 1984;
guitars.unshift('Jim');
guitars = stringArr;
mixedData = guitars;
//guitars = mixedData  //the type of data has restricted us from reassigning anothe typeof array to it but it can work the other way round.
// the same goes for guitars and stringArr
let test = [];
let bands = [];
bands.push('Fanny James');
//Tuple  (Tuple can be used to strictly specify the position of the elements of an array)
let myTuple = ['Dave', 45, true];
// for example
let mixed = ['Jonah', 5, false];
myTuple[1] = 23; //the position of the el;ement allowable to be added can only be the type of the element in that position.
//Objects\
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: 'Salome',
    prop2: true
};
//Similar to the tuples, prop1 and prop2 can only be assigned string and boolean respectively
exampleObj.prop1 = 'John';
let evh = {
    name: 'Eddie',
    active: false,
    albums: [1983, 2021, 'OU1218']
};
let jp = {
    name: 'Jimmy',
    active: true,
    albums: ['I', 'II', 'IV']
};
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}!`;
    }
    return 'Hello!';
};
console.log(greetGuitarist(jp));
//Enums
// 'Unlike most TypeScript features, Enums are not a type-level Addition to javascript but something added to the language and runtime.'
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 0] = "U";
    Grade[Grade["D"] = 1] = "D";
    Grade[Grade["C"] = 2] = "C";
    Grade[Grade["B"] = 3] = "B";
    Grade[Grade["A"] = 4] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
