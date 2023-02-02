"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Convert to more or less specific
let a = 'hello';
let b = a; //Less specific type
let c = a; // more specific
//typescript also uses angle brackets to assign a defined type
let d = 'World'; //note that angle brackets (<>) can not be used with tsx files in react. 
let e = 'World';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 3, 'concat');
// Be careful! TS sees no problem  - but a string is returned
let nextVal = addOrConcat(2, 2, 'concat');
// 10 as string
10;
//The DOM
const img = document.querySelector('img');
const myImg = document.getElementById('#img'); // The ! is a non-null asserrtion that can be used to tell typescript that this is not null
const nextImg = document.getElementById('#img');
img.src;
myImg.src;
