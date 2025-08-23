import asyncHandler from "express-async-handler";

export const asynchronousJavascript = asyncHandler((req, res) => {
  // Timeouts and Intervals
  // Callbacks
  // Promises
  // Async Await
  // Event Loop

  // What and Why of Async JavaScript

  //* In its most basic form JS is synchronous, blocking, single tHreaded language.
  //* Synchronous: Code executes top down with only one line executing at a time.
  //* Blocking: Each line of code must finish executing before the next line can start.
  //* Single Threaded: A thread is simply a process that JS use to execute a task, each thread can only execute one task at a time.

  //* This model of JS creates a huge problem when it comes to I/O operations, like reading files, making network requests, etc.

  //* Because when we interact with different files or different databases, we do not know when the response will come back.

  //* Just JS is now capable to achieve that, We need new pieces which are outside JS to help us write asynchronous code
  //* We Browsers define functions and API's that allow us to write asynchronous code, like setTimeout, setInterval, fetch, etc.

  // TIMOEOUTS AND INTERVALS
  //* These are used to execute functions either at regular intervals(setIntervals) OR after elapsing of a time period(setTimeout).

  //* setTimeout(functionToExecute, delayInMillisecondsInteger, param1, param2, ...);

  const greet = (name) => {
    console.log(`Hello, ${name}`);
  };

  setTimeout(greet, 2000, "Hardik"); // This will execute the greet function after 2000 milliseconds OR 2 seconds
  setTimeout(greet("Hardik"), 2000); // This will execute the greet function after 2000 milliseconds OR 2 seconds

  // Once a setTimeout is called sometimes you may wanna cancel it
  // To do that we first need to assign the setTimeout to a variable
  const timeoutId = setTimeout(greet, 2000, "Hardik");
  // Then we can use clearTimeout to cancel it
  clearTimeout(timeoutId); // This will cancel the timeout and the greet function will not be executed

  //* setInterval(functionToExecute, delayInMillisecondsInteger, param1, param2, ...);
  // Inttervals keep running the task forever, so we need to clear it manually
  const intervalId = setInterval(greet, 2000, "Hardik"); // This will execute the greet function every 2000 milliseconds OR 2 seconds
  // To clear the interval we can use clearInterval
  clearInterval(intervalId); // This will stop the interval and the greet function will not be executed anymore

  // Timers and intervals are not part of JS itself, they are part of Browser API's
  // duration specified is minimum delay and not guaranteed delay, for a delay of 2 seconds, a function may also also execute after 3 seconds or more

  //* Callbacks
  //* In JS functions are first class objects, which means we can pass functions as arguments to other functions, return functions from functions, and assign functions to variables.
  //* This allows us to write asynchronous code using callbacks, which are functions that are passed as arguments to other functions and are executed after a certain event occurs or after a certain time period has elapsed.

  function greet(name) {
    console.log(`Hello, ${name}`);
  }

  function greetHardik(greetFunction) {
    const name = "Hardik";
    // Here we are passing the greet function as a callback to the greetHardik function
    greetFunction(name);
  }

  greetHardik(greet); // This will execute the greet function and print "Hello, Hardik"
  //* Any Function that is passed as an argument to another function is called a callback
  //* The function that accepts a function as an argument or returns a function is called a higher order function

  //* Callbacks can be categorized into two types:
  //* 1. Synchronous Callbacks: These are executed immediately after the function is called
  let numbers = [1, 2, 3, 4, 5];
  numbers.sort((a, b) => a - b); // This is a synchronous callback, it will sort the numbers array immediately, similarly .map(), .filter(), .reduce() are also synchronous callbacks
  //* 2. Asynchronous Callbacks: These are executed after a certain event occurs or after a certain time period has elapsed
  function fetchData(callback) {
    setTimeout(() => {
      const data = { name: "Hardik", age: 24 };
      callback(data);
    }, 2000);
  }
  fetchData((data) => {
    console.log(data); // This will print the data object after 2 seconds
  });

  //* Problem with callback functions
  // If you have multiple asynchronous operations that depend on each other, you end up with nested callbacks, which is also called callback hell or pyramid of doom
  // To tackle this problem of callback Hell Promises were introduced in ES6

  //* Promises
  // Consider a situation where you and your roommate want to prepare food and order a food at the same time
  // So you ask your roommate to go downstairs and get ome tacos
  // When he is leaving you tell him there is no point in me waiting for you to come back, I will start preparing the soup, but when you reach the place can you PROMISE to text me so that I can start setting up the table
  // Also let me know if you are not able to get the tacos so that I can order something else

  // A Promise is a proxy fir a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason.
  // A Promise is a proxy (Can or cannot get tacos)
  // Not necessarily know when the promise is created ( whether he will get the tacos or not
  // Allows you to associate handlers with an asynchronous action's eventual success value or failure reason (If he gets the tacos he will text you, if he doesn't get the tacos he will also text you)

  // Technically a promise is simply and Object in JavaScript
  // A Promise is always in one of three states: Pending, initialization phase; Fulfilled, successful completion; Rejected, failed completion.

  // Only one reason to use Promise: They help us deal with asynchronous code in a far simpler way than callbacks

  const promise = new Promise(); // This is how we create a promise
  const promise2 = new Promise(() => {}); // This is also a promise, but it is in pending state because we have not resolved or rejected it yet
  const promise3 = new Promise((resolve, reject) => {}); // arrow function in the Promise is expecting two arguments, resolve and reject, which are also functions
  // resolve is the function which when called changes the status of the promise from pending to fulfilled
  // reject is the function which when called changes the status of the promise from pending to rejected
  // but both thses functions aree typically called after an async operation

  const synchronousPromisePractical = new Promise((resolve, reject) => {
    const error = false; // Change this to true to see the rejected state
    if (!error) {
      resolve("Promise resolved successfully"); // This will change the status of the promise to fulfilled
    } else {
      reject("Promise rejected"); // This will change the status of the promise to rejected
    }
  });

  const asynchronousPromisePractical = new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false; // Change this to true to see the rejected state
      if (!error) {
        resolve("Promise resolved successfully"); // This will change the status of the promise to fulfilled
      } else {
        reject("Promise rejected"); // This will change the status of the promise to rejected
      }
    }, 2000);
  });

  const onFulFillments = (message) => {
    console.log(message);
  };

    const onRejections = (message) => {
    console.log(message);
  };



  //To execute callback functions based on the state of the promise we use .then() and .catch() methods
//   both then and catch methods also return a promise, which allows us to chain multiple then and catch methods together
  asynchronousPromisePractical
    .then(onFulFillments)
    .catch(onRejections)
    .finally(() => {
      console.log("This will always execute regardless of the promise state");
    })

    // .finally() method is used to execute a callback function regardless of the state of the promise

    // Static methods of Promise
    // Promise.all() - This method is used to execute multiple promises in parallel and wait for all of them to be resolved or any one of them to be rejected
    const promiseA = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Promise A resolved");
      }, 2000);
    });
    const promiseB = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Promise B resolved");
      }, 4000);
    });
    const promiseC = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Promise C resolved");
      }, 6000);
    });
    Promise.all([promiseA, promiseB, promiseC])
      .then((messages) => {
        console.log(messages); // This will print an array of messages from all the promises
      })
      .catch((message) => {
        console.log(message); // This will print the message from the first promise that was rejected
      });

    // Promise.allSettled() - This method is used to execute multiple promises in parallel and wait for all of them to be settled (either resolved or rejected)
    Promise.allSettled([promiseA, promiseB, promiseC]).then((results) => {
      console.log(results); // This will print an array of objects with the status and value/re
    }
    );

    // Promise.race() - This method is used to execute multiple promises in parallel and wait for the first one to be resolved or rejected
    Promise.race([promiseA, promiseB, promiseC])
      .then((message) => {
        console.log(message); // This will print the message from the first promise that was resolved
      })
      .catch((message) => {
        console.log(message); // This will print the message from the first promise that was rejected
      });




    //Async Await
    // Async Await is a syntactic sugar over promises, it makes asynchronous code look and behave like synchronous code
    // The Async keyword is used to declare a function as asynchronous, it returns a promise implicitly
    // Async Functions are functions that are instances of the AsyncFunction constructor
    // Unlike normal functions, async functions always return a promise. If the function returns a value, the promise will be resolved with that value; if the function throws an exception, the promise will be rejected with that exception.
    function syncGreet() { return "Hello"};
    async function asyncGreet() { return "Hello"};
    syncGreet(); // This will return "Hello"
    asyncGreet(); // This will return a promise that will be resolved with "Hello"
    asyncGreet().then((value) => console.log(value)); // This will return "Hello"

    // The Await keyword is used to wait for a promise to be resolved or rejected, it can only be used inside an async function
    // When the await keyword is used, the async function is paused until the promise is resolved

    //* Sequential vs Concurrent vs Parallel Execution of Async Code
    function resolveHello(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Hello");
            }, 2000);
        });
    }
    function resolveWorld(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("World");
            }, 1000);
        });
    }

    async function sequentialExecution(){
        const hello = await resolveHello(); // Waits 2 seconds
        console.log(hello);
        
        const world = await resolveWorld(); // Waits 1 second
        console.log(world);
        // logs after 2 + 1 = 3 seconds
    }
    
    async function concurrentExecution(){
        const hello = resolveHello();
        const world = resolveWorld();
        
        console.log(await hello);
        console.log(await world);
        // logs after 2 seconds as 2 > 1
    }

    async function parallelExecution(){
        await Promise.all([
            (async () => console.log(await resolveHello()))(),
            (async () => console.log(await resolveWorld()))()
        ])
    }

    //* Event Loop
    // JS Runtime Environemnt: A model that makes it possible to execute JS code outside the browser
    // 1. JS Engine: V8 (Chrome, Node.js), SpiderMonkey (Firefox), JavaScriptCore (Safari); It consist of Call Stack(To execute code, functions are pushed to the callstack and when the function returns it is popped off the call stack) and Memory Heap(Used to allocate memory to variables, objects, and functions)
    // 2. Web APIs: These are the API's provided by the browser to execute asynchronous code, like DOM, Fetch, setTimeout, etc.
    // 3. Callback/Task Queue: This is a queue that holds the callback functions that are to be executed after the asynchronous operation is completed
    // 4. Event Loop: This is a loop that continuously checks the call stack and the callback queue, if the call stack is empty, it pushes the first callback function from the callback queue to the call stack
    // 5. Memory Heap: This is a memory pool that is used to allocate memory to variables, objects, and functions
    // 6. Microtask Queue: This is a queue that holds the microtasks that are to be executed after the current task is completed, like promise callbacks
    // 7. Job Queue: This is a queue that holds the jobs that are to be executed after the current task is completed, like mutation observers
    // Event Loop checks the microtask queue before the callback queue, so if there are any microtasks in the microtask queue, they will be executed first

    // JavaScript begins execution on the global scope, so global() gets pushed to the call stack
    // Execution begins with line 1,
    // If the code encountered is synchronous, it is executed immediately popped off from Call Stack and the next line is pushed
    // If the code encountered is asynchronous, it is pushed to Web APIs, and the next line is pushed to Call Stack
    // Unlike most async operations, Fetch leaves behind a Promise Object in the Memory Heap
    // You can notice that the Call Stack is now empty, lets say after fetch we have a Promise.then() method
    // So the Promise.then() method is pushed to the Call Stack, it only has one purpose, to register a callback function to be executed when the Promise is resolved in the Memory Heap
    // Once the Fetch API brings the data it will put the data in Promise.value in Memory Heap, as the Promise.value is updated, JS will now automatically execute the onFulfillment callback which was assigned by Promise.then() method
    // But the onFulfillment callback cannot be pushed directly to the Call Stack as it is asynchronous
    // So the onFulfillment callback is pushed to the Microtask Queue along with the Promise value
    // The Event Loop now checks the Call Stack, as it is empty, it will check the Microtask Queue
    // As the Callstack is empty and there is a callback function in the Microtask Queue, it will push the onFulfillment callback to the Call Stack
    // Finally there is no more code to run and the Memory is also Garbage Collected
    // The Event Loop checks the Microtask Queue before the Callback Queue even if the Callback Queue has been waiting for a long time
    // Promises when resolved or rejected, their callbacks are pushed to Microtask Queue




  return res.status(200).json({
    success: true,
    message: "Asynchronous JavaScript examples executed successfully",
  });
});
