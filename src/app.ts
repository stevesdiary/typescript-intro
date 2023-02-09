//Generics

// const stringEcho = (arg: string): string => arg  // this is restricted to strings only check the next line for a generic type 

const echo = <T>(arg: T): T => arg   // This works with any type 

const isObj = <T>(arg: T): boolean => {
   return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null)

}

console.log(isObj(true))
console.log(isObj('John'))
console.log(isObj([1, 2, 3]))
console.log(isObj({ name: 'John'}))
console.log(isObj(null))

//Generic type is very effective when your function has to do some logic

const isTrue = <T>(arg: T): { arg: T, is: boolean } => {
   if (Array.isArray(arg)&& !arg.length) {
      return {arg, is: false }
   }
   if (isObj(arg)&& !Object.keys(arg as keyof T).length){
      return {arg, is: false }
   }
   return { arg, is: !!arg}     // (!!arg) is used to flip 0 & 1 to true or false
}

console.log(isTrue(false))
console.log(isTrue(0))
console.log(isTrue(true))
console.log(isTrue(1))
console.log(isTrue('Dave'))
console.log(isTrue(' '))
console.log(isTrue(null))
console.log(isTrue(undefined))
console.log(isTrue({})) //modified
console.log(isTrue({ name: 'John' }))
console.log(isTrue([]))
console.log(isTrue([1, 2, 3]))
console.log(isTrue(NaN))
console.log(isTrue(-0))

interface BoolCheck<T> {
   value: T,
   is: boolean,
}



const checkBoolValue = <T>(arg: T):BoolCheck<T> => {
   if (Array.isArray(arg)&& !arg.length) {
      return {value: arg, is: false }
   }
   if (isObj(arg)&& !Object.keys(arg as keyof T).length){
      return {value: arg, is: false }
   }
   return { value: arg, is: !!arg}     // (!!arg) is used to flip 0 & 1 to true or false
}


//Another Example

interface HasID{
   id: number
}

const processUser = <T extends HasID>(user: T): T => {
   //process the user with logic here
   return user
}

console.log(processUser({id: 1, name: 'Dave'}))
// console.log(processUser({name: 'Dave'}))

const getUsersProperty = <T extends HasID, K extends keyof T>(users: T[], key: K): T[K][] => {
   return users.map(user => user[key])
}

const usersArray = [
   {
      'id': 1,
      'name': 'Leanne Graham',
      'username': 'Bret',
      'email': 'upchh@example.com',
      'address': {
         'street': 'Kulas Light',
         'suite': 'Apt. 556',
         'city': 'Gwenborough',
         'zipcode': '92998-3874',
         'geo': {
            'lat': '-37.3159',
            'lng': '81.1496'
         }
      },
      'phone': '1-800-555-1212',
      'website': 'hildegard.org',
      'company': {
         'name': 'Romaguera-Crona',
         'catchPhrase': 'Multi-layered client-server neural-net',
         'bs': 'harness real-time e-markets'
      }
   },
]

console.log(getUsersProperty(usersArray, 'email'))
console.log(getUsersProperty(usersArray, 'username'))

class StateObject<T> {
   private data: T;

   constructor(value: T) {
      this.data = value
   }
   get state(): T {
      return this.data
   }

   set state(value: T) {
      this.data = value
   }
}

const store = new StateObject("John")
console.log(store.state)
store.state = "Dave"
//store.state = 12  // Typescript has inferred the type to be string since we have assigned "John" to it first 

const myState = new StateObject<(string | number | boolean)[]>([15]) 
myState.state = (['Dave', 25, true])
console.log(myState.state)