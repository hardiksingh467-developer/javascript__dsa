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



return res.status(200).json({
            message: "DSA Playlist Controller is working",
});

    } catch (error) {
        console.error("Error in dsaController:", error);
        res.status(500).json({ message: error.message || "Internal Server Error" });
    }
});

export default dsaPlaylistController;