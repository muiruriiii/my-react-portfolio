Deployed Portfolio Link: https://muiruriiii.github.io/my-react-portfolio/

**Questions**

**1. What is NPM?**
NPM is a package manager for JavaScript that is used to manage and share software packages, libraries,
frameworks for your application.

**2. What is SPA?**
A single page application is a web application that interacts with the user by dynamically rewriting the
current page rather than loading entire new pages from the server and updates the content as the user
interacts with the application.

**3. What is the event loop?**
The event loop is responsible for handling and managing asynchronous tasks by continuously checking
the message queues for pending tasks executing them in a non-blocking manner.

**4. What is the difference between export x and export default x?**
export x is used to export several named exports from a module. This could include exporting variables,
function that have a specific name then one can import them using that same name in other modules
whereas export default x is used to export a single default export from a module. This could include
exporting variables, function where when importing them one can use any name unlike when using
export x.

**How do you import them differently?**

**An example for export x:**

**//name.js**

export const myName = “Cynthia”;

**//app.js**

import myName from “./name.js”;
console.log(myName);

**An example for export default x:**

**//name.js**

const myName = “Cynthia”;
export default myName;

**//app.js**

import myVariable from “./name.js” ;

**5. Why do you use className as a property in React and not a class?**
This is because ‘class’ is a reserved keyword in JavaScript and since we use jsx in React which is the
extension of JavaScript, so we have to use className instead of class attribute.

**6. Why should you not write the following?
What will happen?**

<button onClick ={setCounter(counter+1)}>+1</button>;

The onClick attribute expects a function reference instead of invoking setCounter(counter +1)
instantly and passing its result to onClick given it’s not a function.

**7. What is object destruction?**
This is a feature that allows one to extract values from objects and assign them to variables with a
specific syntax.

**How is it connected to React components(example)?**
```
Import React from ‘react’;
const myComponent = ({prop1, prop2}) =>
{
  return(
    <div>;
      <p>{prop1}</p>;
      <p>{prop2}</p>;
    </div>;
  );
};
```

**8. How is it possible to use HTML and JavaScript in the same function (like in a React
Component)**
Through writing using jsx which is a syntax extension for JavaScript that is similar to HTML/XML. JSX
allows one to mix HTML syntax with JS code. React components use JSX to define their structure.
What makes it possible?

**9. What is async/await?**
Async/await is a syntax in JS that is used to work with asynchronous code in a more synchronous way.
The async function creates a binding of a new async function to a given name while await function is
permitted within the function body, enabling asynchronous, promise-based behavior to be written in a
cleaner style and avoiding the need to explicitly configure promise chains.

**Example:**
```
function delay(ms) {
  return new Promise(resolve =>;
    setTimeout(resolve, ms));
}
  async function asyncFunction() {
  console.log(‘Start’);
  await.delay(2000);
  console.log(‘End after 2seconds’);
  }
asyncFunction();
```

**10. What is a promise?**
This is an object representing the eventual completion or failure of an asynchronous operation.

**Example:**
```
function getData(){
  return new Promise((resolve, reject) =>;
  {
    setTimeout(() => {
    const success = true;
      if (success) {
      resolve (‘Data fetched successsfully’);
      } else {
      reject (‘Error’);
      }
    }, 1000);
  });
}
```

