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

    const greet  = (name) => {
        console.log(`Hello, ${name}`);
    }

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

    return res.status(200).json({
        success: true,
        message: "Asynchronous JavaScript examples executed successfully",

    });
});