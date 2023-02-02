"use strict";
//type Aliases:  Here the type of values is represented by an alias which can be used to denote the type whenever we want to use it.
// Object.defineProperty(exports, "__esModule", { value: true });
//interface postId = stringOrNumber  // Interface doesn't work with type Aliases.
// Literal types
let userName;
userName = 'Amy'; //Using any other username other than (Dave, John or Amy) will flag error because they have been declared literally so it puts it in a limit of only what is declared.
//Functions: the type of input of function can also be specified including that of the expected return value
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg('Hello!');
logMsg(add(2, 3));
// logMsg(add('a',3))
let subtract = function (c, d) {
    return c - d;
};
// interface mathFunction {
//    (a: number, b: number):number
// }
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 2));
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
// default param value
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));
logMsg(sumAll(undefined, 3)); //Note that default value will not work with type Alias like we did with mathFunction 
// Rest Parameter
const total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(10, 2, 3));
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
//Custom type guard
const isNumber = (value) => {
    return typeof value === 'number'
        ? true : false;
};
// Use of never type
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (isNumber(value))
        return 'number';
    return createError('This should never happen!');
};
