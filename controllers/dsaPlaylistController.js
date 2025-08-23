import asyncHandler from "express-async-handler";

const dsaPlaylistController = asyncHandler(async (req, res) => {
    try {
        // Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
const fibonacciTill = (n) => {
    if ( n== 1) return [0];
    if ( n== 2) return [0, 1];
    const array = [0, 1];
    let i = 2;
    while(i <= n){
        array.push(array[i - 1] + array[i - 2]);
        i++;
    }
    return array;
}

console.log("Fibonacci Till below");
console.log(fibonacciTill(10));

const fibonacciUntil = (n) => {
    if(n == 0) return [ 0 ];
    if(n == 1) return [ 0, 1 ];
    let array = [ 0, 1];
    let i = 2;
    let pushNumber = array[i - 1] + array[ i - 2];
    do{
        // console.log("push number is ", pushNumber)
        array.push(pushNumber);
        i++;
        pushNumber = array[i - 1] + array[ i - 2];
    }while(pushNumber <= n);
    return array;
}

console.log("Fibonacci Until below");
console.log(fibonacciUntil(10567));

console.log("Factorial Iterative below");
const factorial = (n) => {
    let answer = 1;
    if( n === 0 || n === 1) return answer;
    for(let i = 2; i <= n; i ++){
        answer *= i;
    }
    return answer;
}

console.log(factorial(5));

const testPrimality = (n) => {
    if(n < 2){
        return false;
    }
    if(n !== 2 && n%2 === 0) return false;
    if(n !== 3 && n%3 === 0) return false;
    if(n !== 5 && n%5 === 0) return false;
    if(n !== 7 && n%7 === 0) return false;
    
    // Optimal Solution
    for(let i = 2;i <= Math.sqrt(n); i++ ){
        if( n%i === 0) return false;
    }
    
    // Brute force
    console.log("Implement Brute Force");
    
    for(let i = 11;i < n; i++ ){
        console.log("current test ", n%i);
        if( n%i === 0) return false;
    }
    
    return true;
}

console.log("Primality below");
console.log("0 is ",testPrimality(0));
console.log("1 is ",testPrimality(1));
console.log("2 is ",testPrimality(2));
console.log("3 is ",testPrimality(3));
console.log("4 is ",testPrimality(4));
console.log("5 is ",testPrimality(5));
console.log("11 is ",testPrimality(11));

const isPowerTwo = (n) => {
    let iteration = 0;
    if (n === 1) return iteration;
    while(n >= 2){
        if(n%2 === 1) return false;
        n = n/2;
        iteration ++;
    }
    return iteration;
}

console.log("PowerOfTwo conventional below");
console.log("8 is ", isPowerTwo(8));

const bitwiseIsPowerTwo = (n) => {
    if(n < 1) return false;
    return (n & (n -1)) === 0;
}

// Im Binary, a Number that is a power of 2 such as 4, 8, 16 ends in 0 except for the decimal number 1

// for example 
// 1 in binary is 1, 2 to the power 0
// 2 in binary is 10, 2 to the power 1
// 3 in binary is 11
// 4 in binary is 100, 2 to the power 2
// 5 in binary is 101
// 6 in binary is 110
// 7 in binary is 111
// 8 in binary is 1000, 2 to the power 3
// 9 in binary is 1001

// In other words
// for a number `n`, if we convert it into Binary, and we do a Bitwise & with the just near and less 2 to the power number, we will recieve 0.
// Binary 4 Bitwise & Binary 2 will reutrn 0
// Binary 8 Bitwise & Binary 4 will reutrn 0
// Binary 16 Bitwise & Binary 8 will reutrn 0

console.log("PowerOfTwo bitwise below");
console.log("8 is ", bitwiseIsPowerTwo(8));


// Recursion: It is a problem solving technique where solution depends on solution opf smaller instances of the same problem.
/* 

When creating a function utilizing Recursions

1.) We need to return the function int the function :-
const function1 = () => {
    return function1();
    }

2.) We need to have a base case, which is a condition that stops the recursion from going infinitely :-
const function1 = (n) => {
    if(n === 0) return 0; // Base case
    return n + function1(n - 1); // Recursive case

    3.)
*/
// Recursion might simplify solving a problem, but does not guarantee optimized solution

const recursiveFibonacci = (n) => {
    if (n <= 1) return n; // Base case
    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2); // Recursive case
}

console.log("Fibonacci Recursive below");
console.log(recursiveFibonacci(10)); // Output: 55

// for n = 7, we return recursiveF(6) + recursiveF(5) => (recursiveF(5) + recursiveF(4)) + (recursiveF(4) + recursiveF(3)) => recursiveF(4) + recursiveF(3) + recursiveF(3) + recursiveF(2) => recursiveF(3) + recursiveF(2) + recursiveF(2) + recursiveF(1) => 13


const recursiveFactorial = (n) => {
    if(n === 0 || n === 1) return 1; // Base case
    return n * recursiveFactorial(n - 1);
}

console.log("Factorial Recursive below");
console.log(recursiveFactorial(5)); // Output: 120

// Search Algorithms

const linearSearch = (arr, element) => {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === element){
            return i;
        }
    }
    return -1;
}

console.log("linear Search Iterative below");
console.log(linearSearch([1, 2, 3, 4, 5, 6, 7], 10));
console.log(linearSearch([2, 12, 32, 34, 76], 76));

// The elements are sorted in Binary Search
const binarySearch = (arr, element) => {
    while(arr.length > 1){
        let middleIndex = (Math.floor(arr.length / 2));
        if (arr[middleIndex] === element) return middleIndex;
        if (arr[middleIndex] < element) {
            arr = arr.slice(middleIndex, arr.length);
        }
        if (arr[middleIndex] > element) {
            arr = arr.slice(0, middleIndex);
        }

    }

    return -1;

}

console.log("binary Search Iterative below");
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 10));
console.log(binarySearch([2, 12, 32, 34, 76], 76));

const binarySearchRecursive = (arr, element) => {
    const middleIndex = (Math.floor(arr.length / 2));

    if(arr.length === 0) return -1; // Base case for empty array

    if(arr[middleIndex] === element){
        console.log("Found at index ", middleIndex);
        return middleIndex;
    }

    if(arr[middleIndex] < element) return binarySearch(arr.slice(middleIndex, arr.length), element);
    if(arr[middleIndex] > element) return binarySearch(arr.slice(0, middleIndex), element);
}

console.log("binary Search Recursive below");
console.log(binarySearchRecursive([1, 2, 3, 4, 5, 6, 7], 10));
console.log(binarySearchRecursive([2, 12, 32, 34, 76], 76));

//* Sorting aLgorithms: 
const bubbleSortMy = (arr) => {
    let sortedArr = [];
    const isSame = (sortedArr, arr) => {
        if (sortedArr.length !== arr.length) return false;
        for (let i = 0; i < sortedArr.length; i++) {
            if (sortedArr[i] !== arr[i]) return false;
        }

        return true;
    }
    while (!isSame(sortedArr, arr)) {
        sortedArr = [...arr];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                let swapper = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = swapper;
            }
        }
    }

    return sortedArr;
}

const bubbleSortVideo = (inArr) => {
    let arr = [...inArr];
    let swapped;

    do {
        swapped = false;

        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let swapper = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = swapper;
                swapped = true;
            }
        }

    } while (swapped);

    return arr;
}

const bubbleSortChatgpt = (inArr) => {
    let arr = [...inArr];
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}


console.log("Bubble sort below");
console.log(bubbleSortMy([20, -6, -2, 5, 2]));
console.log(bubbleSortVideo([20, -6, -2, 5, 2]));
console.log(bubbleSortChatgpt([20, -6, -2, 5, 2]));

const insertionSortMy = (arr) => {
    let sortedArr = [];
    for (let i = 1; i < arr.length; i++) {
        // 1. Number being sorted needs to be stored 
        let numberToInsert = arr[i];
        let j;

        // 2. Now number being sorted needs to compared with every sorted part
        // The sorted part is to the left of number being sorted
        for(j = i -1; j >= 0 && arr[j] > numberToInsert/* otherwise we do not need to check further, if arr[j] is less than number to insert wen simply put the number to the right */; j--) {
                arr[j+1] = arr[j];
        }

        arr[j+1] = numberToInsert;
    }
    return arr;
}

console.log("Insertion sort below");
console.log(insertionSortMy([20, -6, -2, 5, 2]));


// Identify the Pivot element from the array(First element, Last Element, Random Element, Median Element)
// Put everything that smaller than the Pivot element into a left array
// Put everything that greater than the Pivot element into a right array

const quickSortMy = (arr) => {
    if(arr.length < 2) return arr;

    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];
    for(let i = 0; i < arr.length - 1; i++){
        if(arr[i] < pivot){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }
    
    return [...quickSortMy(left), pivot, ...quickSortMy(right)];
}
console.log("Quick sort below");
console.log(quickSortMy([20, -6, -2, 5, 2]));


// Divide the arrays into sub arrays each containing only one element
const mergeSortMy = (arr) => {
    if(arr.length < 2) return arr;

    const mid = Math.floor(arr.length / 2);

    const leftArray = arr.slice(0, mid);
    const rightArray = arr.slice(mid);
    
    return merge(mergeSortMy(leftArray), mergeSortMy(rightArray));
}

const merge = (leftArray, rightArray) => {
    const sortedArray = [];
    while(leftArray.length && rightArray.length){
        if(leftArray[0] <= rightArray[0]){
            sortedArray.push(leftArray.shift());// we use shify since the array should also be removed from the array
        }else{
            sortedArray.push(rightArray.shift());
        }
    }
    return [...sortedArray, ...leftArray, ...rightArray];
}
console.log("Merge sort below");
console.log(mergeSortMy([20, -6, -2, 5, 2]));


// Cartesian Product of two Sets
// In mathematics, specifically in set theory, the cartesian product of two sets A and B , denoted as AxB, is the set of all ordered pairs(a, b) where a is in A and b is in B.
/*
const A = new Set([1, 2])
const B = new Set([3, 4])
cartesian Product = [[1, 3], [1, 4], [2, 3], [2, 4]]
 */

const cartesianProduct = (arr1, arr2) => {
    const result = [];
    const setArr1 = new Set(arr1);
    const setArr2 = new Set(arr2);

    const newArr1 = Array.from(setArr1);
    const newArr2 = Array.from(setArr2);

    for(let i =0; i < newArr1.length; i++){
        for(let j = 0; j < newArr2.length; j++){
            result.push([newArr1[i], newArr2[j]])
        }

    }

    return result;
}

console.log("Cartesian Product is ", cartesianProduct([1, 2, 3, 4], [3, 4, 5, 6]));// O(mn)

// Climbing staircase problem
// Given a staircase of `n` steps count the number of distinct ways to climb to the Top, You can either climb 1 step or 2 steps at a time
// Eg:- 
// if (n === 1) => climbingStaircase(1) => 1
// if (n === 2) => climbingStaircase(2) => (1, 1), 2
// if (n === 3) => climbingStaircase(3) => (1, 1, 1), (1, 2) and (2, 1)
// if (n === 4) => climbingStaircase(4) => (1, 1, 1, 1), (1, 1, 2), (1, 2, 1), (2, 1, 1) and (2, 2)

/*
At any given time we can climb 1step or 2 step

If you have to climb `n` steps, you can either:
1. Climb 1 step from (n-1) steps
2. Climb 2 steps from (n-2) steps
So the number of ways to climb `n` steps is the sum of the number of ways
climbingStaircase(n) = climbingStaircase(n-1) + climbingStaircase(n-2)
 */

const climbingStaircase = (numberOfSteps) => {
    let numberOfWays = [1, 2];
    for(let i = 2; i < numberOfSteps; i++){
        numberOfWays[i] = numberOfWays[i - 1] + numberOfWays[i - 2];
    }

    return numberOfWays[numberOfSteps -1];
}

console.log("Number of steps to climb is ", climbingStaircase(1)); // Output: 1
console.log("Number of steps to climb is ", climbingStaircase(2)); // Output: 2
console.log("Number of steps to climb is ", climbingStaircase(3)); // Output: 3
console.log("Number of steps to climb is ", climbingStaircase(4)); // Output: 5
console.log("Number of steps to climb is ", climbingStaircase(5)); // Output: 8
console.log("Number of steps to climb is ", climbingStaircase(6)); // Output: 13

// Tower of Hanoi
// The puzzle consist of three rods, the first rod has n disks of different sizes, the smallest disk is on top, and the largest disk is at the bottom.
// The objective of the puzzle is to move the entire stack to the last rod, obeying the following rules
// 1. Only one disk may be moved at a time
// 2. Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack or on an empty rod
// 3. No larger disk may be placed on top of a smaller disk


// ALGORITHM DESIGN TECHNIQUES
// 1. Brute Force: Simple and exhaustive technique that evaluates every possible outcome to find the best solution. Linear Search
// 2. Greedy: A technique that makes the locally optimal choice at each stage with the hope of finding a global optimum. Dijkstra's Algorithm, Prim's Algorithm, Kruskal's Algorithm
// 3. Divide and Conquer: A technique that breaks a problem into smaller sub-problems, solves each subproblem independently, and combines their solutions to solve the original problem. Binary Search, Quick Sort, Merge Sort and tower of Hanoi
// 4. Dynamic Programming: A technique that solves problems by breaking them down into simpler sub-problems and storing the results of these sub-problems to avoid redundant calculations. Fibonacci Numbers, Climbing Staircase
// 5. Backtracking: Generate all possible solutions. Check if the solution satisfies all given constraints and only then you proceed with generating subsequent solutions. If the constraints are not satisfied , backtrack and go on a different path to find solutions. N-Queens Problem, Sudoku Solver, Rat in a Maze

//* DATA STRUCTURE
//* Array(BUILT IN)
// It is a data structure that can hold collection of values
// It can contains a mix of data types
// They are resizable, we do not have to declare the size of it
// They start with index 0
// They are iterable
// Insertion Order is maintained in an array
const sampleArray = [1, 2, 3, 4, 5, "hardik"];
// READ ARRAY
// At a certain position
console.log("Arr at position 5 is ", sampleArray[5]);
// To find the number of element in an array
console.log("Arr at position 5 is ", sampleArray.length);
// Iterating over each element
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}
// OR
for(item in sampleArray){
    console.log("item is ", item);
}





// UPDATE ARRAY
// Add To the end of an Array
sampleArray.push(4);
// Add To the beginning of an Array
sampleArray.unshift(4);
// Remove From the end of an Array
sampleArray.pop();
// Remove From the beginning of an Array
sampleArray.shift();
// map
// filter
// reduce
// concat
// slice
// splice

// Time Complexity
// Insert/ Remove from end - O(1)
// Insert/ Remove from beginning - O(n) # as we need to reindex every other element
// Access - O(1)
// Search - O(n)

// Push/Pop - O(1)
// Shift/ Unshift/ Concat/ Slice/ Splice - O(n)
// forEach/ map/ filter/ reduce - O(n)



//* Objects(BUILT IN)
// An Object is an unordered collection of key value pairs
// The Key must either be  String or Symbol data type
// The Value can be of any data type
// To retrieve a value you can use a corresponding key, object["key"] OR object.key
// An object is not iterable, You cannot use it with a for loop
// Objects has a prototype and may contain a few default keys which may collide with you own keys if you are not careful
// The number of items in an object must be determined manually
// Apart from just storing data one can also attach functionality to an object
// CREATE
const obj = {
    name: "Bruce",
    age: 25,
    "this is a key": "this is its value",
    sayMyName: function(){console.log(this.name)}
};

// READ
console.log(obj);
console.log(obj.name);
console.log(obj["age"]);// the bracket notation is used when keys contain spaces or hyphen
console.log(obj["this is a key"]);
obj.sayMyName();
Object.keys(obj);
Object.values(obj);
Object.entries(obj);

// UPDATE
obj.hobby = "football";
delete obj.hobby;

// INSERT - O(1)
// ACCESS - O(1)
// SEARCH - O(n)
// Object.keys(obj) - O(n)
// Object.values(obj) - O(n)
// Object.entries(obj) - O(n)
// REMOVE - O(1)


//* Sets(BUILT IN)
// A set is a data structure that can hold a collection of values. The values however must be unique
// Set can contain a mix of different data types. You can store strings, booleans, numbers or even objects all in the same set
// Sets are dynamically sized
// Sets DO NOT MAINTAIN an insertion order
// Sets are iterables. They can accessed with a for loop
// Searching an deleting an element in a set is faster when compared to arrays

// CREATE
const set = new Set([1, 2, 3]);

// READ
for (const item in set){
    console.log("item is ", item);
}
console.log(set.has(5));
console.log(set.size);

// UPDATE
set.add(4);
set.delete(3);
set.clear();


//* Map(BUILT IN)
// A map is an Ordered collection of key value pairs, Both keys and values can be of ay data type
// To retrieve a value you can use the corresponding key
// Maps are iterables, They can be accessed using a for loop
// A map does not contain any keys by default
// You can access the Map size using size property
// Maps are just for storing Data

// CREATE
const map = new Map(["key1", "value1"], ["key2", "value2"]);

// READ
for(const [key, value] of map){
    console.log(`${key}:${value}`);
}
// checking if the particular key exist
console.log("Map has", map.has("key1"))
console.log("Size of Map is ", map.size)

// UPDATE
map.set("c", 3);
map.delete("c");
map.clear();

//* Stack
// The stack data structure is a sequential collection of elements that follows the principle of Last in First Out (LIFO)
// Similar to stack of plates the last plate added to a stack of plates is also the first plate removed from it
// Stack is an abstract Data Type. It is defined by its behavior rather than being a mathematical order
// A stack data structure supports two main operations: PUSH(adding an element to the the collection) and POP(removes the most recently added element to the collection)

// Stack is great for History Tracking
// Undo Operation
// Expression COversion such as Infix to Postfix
// Call Stack in JS Runtime

//* Queue implementation
// The Queue Data Structure is a sequential collection of elements that follows the principle of First In First Out (FIFO)
// The first element inserted into the Queue is also the first element
// A Queue of People. People enter the queue at one end(Tail) and leave the queue from the other Head)
// A Queue Data Structure supports two main operations: ENQUEUE(which adds an element to the Tail of the collection) and DEQUEUE( which removes an element from the Head of the collection)

// Printers, when we print multiple documents
// CPU task scheduling
// Callback Queue in javascript runtime
class Queue {
    constructor(){
        this.items = []
    }

    enqueue(element){
        this.items.push(element)
    }

    dequeue(element){
        return this.items.shift()
    }

    isEmpty(){
        return this.items.length === 0;
    }

    peek(){
        if(!this.isEmpty()){
            return this.items[0];
        }
        return null;
    }

    size() {
        return this.items.length;
    }

    print(){
        console.log(this.items.toString())
    }
}

const queue = new Queue();


class OptimizedQueue {
    constructor(){
        this.items = {};
        this.rear = 0;
        this.front = 0;
    }

    enqueue(element){
        this.items[this.rear] = element;
        // increment rear by one so that next element can be inserted into the position, as keys are 0, 1,2 , 4, ...
        this.rear++;
    }

    dequeue(){
        const item = this.items[this.front];
        delete this.items[this.front];
        this.front ++;
        return item;
    }

    isEmpty() {
         return this.rear - this.front === 0;
    }

    peek() {
        return this.items[this.front];
    }

    size() {
        return this.rear - this.front;
    }

    print() {
        console.log(this.items);
    }

}


//* Circular Queue

return res.status(200).json({
            message: "DSA Playlist Controller is working",
});

    } catch (error) {
        console.error("Error in dsaController:", error);
        res.status(500).json({ message: error.message || "Internal Server Error" });
    }
});

export default dsaPlaylistController;