## remotejob-bootcamp-assignment-1

# Question & Answers
## What is ES6 and what are the new features introduced in ES6?
ES6, also known as ECMAScript 2015 or ECMAScript 6, is the sixth edition of the ECMAScript language specification. It is a significant update to JavaScript that introduced many new features and improvements, making the language more powerful and easier to use. 

Here are some of the key features introduced in ES6:

1. Block-Scoped Variables: `let` and `const`
    - let: Allows you to declare variables that are limited to the scope of a block statement.
    - const: Allows you to declare constants that cannot be reassigned.
      ```
      let x = 10;
      const y = 20;
      ```
2. Arrow Functions
   
   Shorter syntax for writing function expressions, and they do not have their own this context.
   ```
   const add = (a, b) => a + b;
   ```
3. Template Literals
   
    Allows embedded expressions and multi-line strings using backticks (````).
    ```
    const name = 'John';
    const greeting = `Hello, ${name}!`;
    ```
4. Default Parameters
   
    Allows you to set default values for function parameters.
   ```
    function greet(name = 'Guest') {
      return `Hello, ${name}!`;
    }
   ```
5. Destructuring Assignment
   
    A syntax for extracting values from arrays or properties from objects into distinct variables.
   ```
    const [a, b] = [1, 2];
    const {name, age} = {name: 'John', age: 30};
   ```
6. Rest and Spread Operators
    - Rest operator: Allows you to represent an indefinite number of arguments as an array.
    - Spread operator: Allows an iterable such as an array to be expanded in places where zero or more arguments or elements are expected.
    ```
    function sum(...args) {
      return args.reduce((acc, val) => acc + val, 0);
    }
    
    const arr = [1, 2, 3];
    const newArr = [...arr, 4, 5];
    ```
7. Classes
   
    A new syntax for creating objects and dealing with inheritance, providing a cleaner and more intuitive way to create and manage objects.
   ```
    class Person {
      constructor(name, age) {
        this.name = name;
        this.age = age;
      }
    
      greet() {
        return `Hello, my name is ${this.name}`;
      }
    }
   ```
8. Modules
    
    Provides a standardized way to organize and import/export code in JavaScript.
   ```
   // Exporting a function
    export function sayHello() {
      return 'Hello';
    }
    
    // Importing a function
    import { sayHello } from './module';
   ```
9. Promises
    
    A new way to handle asynchronous operations, providing a cleaner alternative to callbacks.
   ```
   const fetchData = new Promise((resolve, reject) => {
       // Simulate a network request
      setTimeout(() => resolve('Data fetched'), 1000);
    });
    
    fetchData.then(data => console.log(data));
   ```
10. Symbol
    
    A new primitive data type, used to create unique identifiers for object properties.
    ```
    const sym = Symbol('unique');
    const obj = {
      [sym]: 'value'
    };
    ```
11. Iterators and Generators
    - Iterators: An object which defines a sequence and potentially a return value upon its termination.
    - Generators: Functions that can be paused and resumed, using the function* syntax.
      ```
      function* generator() {
          yield 1;
          yield 2;
          yield 3;
      }
    
        const gen = generator();
        console.log(gen.next().value); // 1
        console.log(gen.next().value); // 2
        console.log(gen.next().value); // 3
      ```
12. Map and Set
    
    New collection types that allow for more flexible and efficient data storage.
    ```
    const map = new Map();
    map.set('key', 'value');    
    const set = new Set([1, 2, 3, 4, 4]); // No duplicate values
    ```
13. Enhanced Object Literals
    
    Simpler syntax for defining object properties and methods.
    ```
    const name = 'John';
    const age = 30;
    
    const person = {
      name,
      age,
      greet() {
        return `Hello, my name is ${this.name}`;
      }
    };
    ```
14. For-of Loop
    
    A new loop that iterates over iterable objects such as arrays, strings, etc.
    ```
    const array = [1, 2, 3];
    for (const value of array) {
      console.log(value);
    }
    ```
