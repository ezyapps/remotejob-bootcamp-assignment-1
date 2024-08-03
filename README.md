## remotejob-bootcamp-assignment-1

# Question & Answers
## Q1: What is ES6 and what are the new features introduced in ES6?
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
## Q2: What is Event Bubble and Event Delegation in JS?
### Event Bubbling

Event Bubbling is a concept in the DOM (Document Object Model) where an event starts from the target element and then bubbles up to its ancestors in the DOM tree. When an event is triggered on an element, it first runs the handlers on that element, then on its parent, then on its parent's parent, and so on, up to the root of the document.

#### Example of Event Bubbling
```
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Event Bubbling Example</title>
    </head>
    <body>
      <div id="parent">
        <button id="child">Click Me!</button>
      </div>
    
      <script>
        document.getElementById('parent').addEventListener('click', function() {
          alert('Parent clicked');
        });
    
        document.getElementById('child').addEventListener('click', function() {
          alert('Child clicked');
        });
      </script>
    </body>
    </html>
```

In this example, when I click the button, both alerts will show up. First, the Child clicked alert (because the button is the target element), and then the Parent clicked alert (because the event bubbles up to the parent).
    
### Event Delegation

Event Delegation is a technique that leverages event bubbling to handle events at a higher level in the DOM rather than adding event listeners to individual child elements. By using event delegation, you attach a single event listener to a parent element that listens for events on its children. This is especially useful when you have a large number of child elements or when elements are dynamically added or removed.

#### Example of Event Delegation
```
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Event Delegation Example</title>
    </head>
    <body>
      <div id="parent">
        <button class="child">Button 1</button>
        <button class="child">Button 2</button>
        <button class="child">Button 3</button>
      </div>
    
      <script>
        document.getElementById('parent').addEventListener('click', function(event) {
          if (event.target && event.target.matches('.child')) {
            alert('Child button clicked: ' + event.target.textContent);
          }
        });
      </script>
    </body>
    </html>
```
In this example, the event listener is added to the parent div with the ID parent. When any of the child buttons are clicked, the event listener on the parent div handles the event. The event.target property is used to identify the actual element that triggered the event, and event.target.matches('.child') checks if the clicked element has the class child.

#### Advantages of Event Delegation
1. ** Improved Performance ** : Reduces the number of event listeners attached to the DOM, which can be beneficial for performance, especially with a large number of child elements.
2. ** Simplified Code ** : Makes it easier to manage event listeners, especially when adding or removing child elements dynamically.
3. ** Consistency ** : Ensures that all child elements, even those added after the event listener is attached, are handled consistently.


## Q3: What is the difference between localstorage, session storage and cookies.

LocalStorage, SessionStorage, and Cookies are all mechanisms for storing data on the client side in web applications. 

They each have different characteristics and use cases:

#### LocalStorage
##### Characteristics:
   - Lifetime: Data persists even after the browser is closed and reopened. Data remains until explicitly deleted.
   - Scope: Data is stored per origin (protocol, hostname, and port). All pages from the same origin can access the stored data.
   - Capacity: Typically around 5-10 MB per origin, though this can vary by browser.
   - Data Type: Stores data as strings. You need to serialize and deserialize objects (e.g., using JSON.stringify and JSON.parse).
    
**Use Case:** Suitable for storing long-term data that needs to be available across multiple sessions, like user preferences or settings.

#### Example:
```
// Storing data
localStorage.setItem('username', 'JohnDoe');

// Retrieving data
const username = localStorage.getItem('username');

// Deleting data
localStorage.removeItem('username');

// Clearing all data
localStorage.clear();
```

#### SessionStorage
##### Characteristics:

  - Lifetime: Data persists only for the duration of the page session. It is cleared when the page session ends, such as when the page or tab is closed.
  - Scope: Data is stored per origin and per tab/window. Different tabs/windows cannot share the stored data.
  - Capacity: Typically around 5-10 MB per origin, though this can vary by browser.
  - Data Type: Stores data as strings. You need to serialize and deserialize objects.
    
**Use Case:** Suitable for storing data that should only be available during a single page session, such as form data or temporary state information.

##### Example:
```
// Storing data
sessionStorage.setItem('sessionKey', 'sessionValue');

// Retrieving data
const sessionValue = sessionStorage.getItem('sessionKey');

// Deleting data
sessionStorage.removeItem('sessionKey');

// Clearing all data
sessionStorage.clear();
```

#### Cookies
##### Characteristics:
  - Lifetime: Can be set to expire at a specific time, or session cookies that expire when the browser is closed.
  - Scope: Data is sent with every HTTP request to the server. Cookies are domain-specific and can be set to be accessible from subdomains.
  - Capacity: Limited to about 4 KB per cookie, with a maximum of around 20-50 cookies per domain.
  - Data Type: Stores data as strings. Cookies often need to be URL-encoded/decoded.

**Use Case:** Suitable for storing data that needs to be sent to the server with every request, such as session tokens, user authentication, or tracking information.

##### Example:
```
// Setting a cookie
document.cookie = "username=JohnDoe; path=/; expires=Tue, 19 Jan 2038 03:14:07 GMT";

// Retrieving a cookie
const cookies = document.cookie.split(';');
let username = '';
for (let cookie of cookies) {
  const [name, value] = cookie.trim().split('=');
  if (name === 'username') {
    username = value;
  }
}

// Deleting a cookie
document.cookie = "username=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
```

#### Summary
  - **LocalStorage:** Persistent, large capacity, origin-wide, used for long-term storage.
  - **SessionStorage:** Session-based, large capacity, origin-wide but tab/window-specific, used for temporary data.
  - **Cookies:** Sent with every request, small capacity, can be domain-specific and have expiration dates, used for server communication and short-term storage.



## Q4: In CSS what is the difference between display inline, display inline block and display block?

In CSS, the display property determines how an element is displayed on the web page. 

Here are the differences between display: `inline`, display: `inline-block`, and display: `block`:

### `display: inline`
#### Characteristics:
  - **No line break:** Elements are displayed in a line, one after another, without starting a new line.
  - **No width and height:** The width and height properties are ignored.
  - **Padding and margin:** Top and bottom padding and margin are respected but do not push other elements away.
  - **Content area:** The element's box is only as wide as its content.

**Use Case:** Used for elements that should be part of the text flow, such as `<span>`, `<a>`, and `<em>`.

#### Example:
```
.inline-element {
  display: inline;
  width: 100px; /* Ignored */
  height: 50px; /* Ignored */
  margin: 10px; /* Top and bottom margin ignored */
  padding: 10px; /* Top and bottom padding ignored */
}
```

### `display: block`
#### Characteristics:
  - Line break: Elements take up the full width available and start on a new line.
  - Width and height: The width and height properties are respected.
  - Margin and padding: All sides of margin and padding are respected.
  - Content area: The element's box expands to fill the parent container's width by default.
    
**Use Case:** Used for elements that should occupy the full available width, such as `<div>`, `<p>`, and `<h1>`.

#### Example:
```
.block-element {
  display: block;
  width: 100px; /* Respected */
  height: 50px; /* Respected */
  margin: 10px; /* Respected */
  padding: 10px; /* Respected */
}
```

### `display: inline-block`
#### Characteristics:
  - No line break: Elements are displayed in a line, one after another, but they behave like block elements.
  - Width and height: The width and height properties are respected.
  - Margin and padding: All sides of margin and padding are respected.
  - Content area: The element's box does not expand to fill the parent container's width by default; it only takes up as much space as its content plus padding and margin.

**Use Case:** Used for elements that should be part of the text flow but need to have width and height, such as <img> and custom styled buttons.
#### Example:
```
.inline-block-element {
  display: inline-block;
  width: 100px; /* Respected */
  height: 50px; /* Respected */
  margin: 10px; /* Respected */
  padding: 10px; /* Respected */
}
```
### Visual Summary
1. display: inline:
  - Stays in line with other elements.
  - Width and height are ignored.
  - Top and bottom padding/margin do not affect layout.

2. display: block:
  - Starts on a new line.
  - Takes up the full width of its container.
  - Width, height, padding, and margin are all respected.

3. display: inline-block:
  - Stays in line with other elements.
  - Width, height, padding, and margin are all respected.
  - Does not take up the full width of its container by default.
    

## Q5: What are new features in CSS3?

CSS3 introduced a wide range of new features and enhancements that allow for more powerful and flexible styling of web pages. 

Here are some of the notable features introduced in CSS3:

### 1. Selectors
   
CSS3 introduced new selectors that provide more flexibility in targeting elements:
  - Attribute selectors: [attr^=value], [attr$=value], [attr*=value]
  - Pseudo-classes: :nth-child(), :nth-of-type(), :last-child, :first-of-type, :only-child, etc.
  - Pseudo-elements: ::before, ::after
    
#### Example
```
/* Selects elements where the class attribute starts with 'btn' */
[class^="btn"] {
  background-color: blue;
}

/* Selects every odd child element */
:nth-child(odd) {
  background-color: lightgray;
}
```
### 2. Box Model
CSS3 introduced new box model features:
  - Box-sizing: content-box, border-box
#### Example:
```
/* The width and height include padding and border */
.box {
  box-sizing: border-box;
}
```
### 3. Flexbox
A layout model that provides a way to align and distribute space among items in a container.

#### Example:
```
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
```
### 4. Grid Layout
A two-dimensional layout system for the web that allows you to create complex layouts.

#### Example:
```
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
}
```
### 5. Transitions
Allows you to change property values smoothly (over a given duration).

#### Example:
```
.button {
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: blue;
}
```

### 6. Animations
Allows you to animate the values of CSS properties over time.

#### Example:
```
@keyframes slide {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100px);
  }
}

.element {
  animation: slide 2s infinite;
}
```

### 7. Transforms
Allows you to rotate, scale, skew, or translate an element.

#### Example:
```
.element {
  transform: rotate(45deg) scale(1.5);
}
```

### 8. Multiple Backgrounds
Allows you to apply multiple background images to a single element.

#### Example:
```
.element {
  background: url(image1.png), url(image2.png);
  background-position: left top, right bottom;
}
```

### 9. Rounded Corners
Allows you to round the corners of elements using the border-radius property.

#### Example:
```
.box {
  border-radius: 10px;
}
```

### 10. Gradients
CSS3 allows you to create linear and radial gradients.

#### Example:
```
/* Linear gradient */
.box {
  background: linear-gradient(to right, red, yellow);
}

/* Radial gradient */
.circle {
  background: radial-gradient(circle, red, yellow);
}
```

### 11. Text Effects
CSS3 introduced text effects like text shadow, word wrap, and more.

#### Example:
```
/* Text shadow */
.text {
  text-shadow: 2px 2px 5px gray;
}

/* Word wrap */
.text {
  word-wrap: break-word;
}
```

### 12. Media Queries
Allows you to apply different styles for different devices or screen sizes.

#### Example:
```
/* Apply styles for screens with a width of at least 600px */
@media (min-width: 600px) {
  .container {
    background-color: lightblue;
  }
}
```

### 13. Custom Fonts
Allows you to use custom fonts in your web pages using the @font-face rule.

#### Example:
```
@font-face {
  font-family: 'MyCustomFont';
  src: url('mycustomfont.woff2') format('woff2');
}

body {
  font-family: 'MyCustomFont', sans-serif;
}
```

### 14. Opacity
Allows you to set the transparency of an element.

#### Example:
```
.element {
  opacity: 0.5;
}
```

### 15. Calc() Function
Allows you to perform calculations to determine CSS property values.

#### Example:
```
.element {
  width: calc(100% - 50px);
}
```

These features provide web developers with a wide range of tools for creating more dynamic, responsive, and visually appealing web pages. CSS3 has significantly enhanced the capabilities of CSS, allowing for greater control over the presentation of web content.
