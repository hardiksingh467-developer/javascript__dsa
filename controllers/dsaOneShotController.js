import asyncHandler from "express-async-handler";

const dsaOneShotController = asyncHandler(async (req, res) => {
    try {
        const reverseString = (str) => str.toString().split("").reverse().join("");
        console.log(reverseString("cddc"));
        console.log(reverseString("ccdd"));

        const isPalindrome = (str) => str.split("").reverse().join("") === str;
        console.log(isPalindrome("cddc"));
        console.log(isPalindrome("ccdd"));

        const reverseInt = (int) => parseInt(int.toString().split("").reverse().join(""));
        console.log(reverseInt(9328475));
        console.log(reverseInt(56172537));

        const FizzBuzz = (n) => {
            for(let i = 0; i <= n; i++){
                if(i % 3 === 0 && i % 5 === 0){
                    console.log("FizzBuzz");
                } else if(i % 3 === 0){
                    console.log("Fizz");
                } else if(i % 5 === 0){
                    console.log("Buzz");
                } else {
                    console.log(i);
                }
            }
        }

        FizzBuzz(100);

        const maxProfit = (arr) => {
            let boughtIndex = 0;
            let soldIndex = 0;
            let maxProfit = 0;
            for(let i =0; i <arr.length - 1; i++){
                for(let j = i+1; j < arr.length; j++){
                    if(arr[j] - arr[i] > maxProfit){
                        soldIndex = j;
                        boughtIndex = i;
                        maxProfit = arr[j] - arr[i];
                    }
                }
            }

            console.log(`Buy on day ${boughtIndex} and sell on day ${soldIndex } for a profit of ${maxProfit}`);

            return maxProfit;

        }

        console.log(maxProfit([7, 1, 5, 3, 6, 4])); // Output: 5

        const maxProfitOptimized = (arr) => {
            let minPrice = arr[0];//  assume price on first day is the minimum
            let maxProfit = 0;
            for(let i = 1; i < arr.length; i++){
                if(arr[i] < minPrice){
                    minPrice = arr[i];
                } else if(arr[i] - minPrice > maxProfit){
                    maxProfit = arr[i] - minPrice;
                }
            }
            return maxProfit;
        }

        console.log(maxProfitOptimized([7, 1, 5, 3, 6, 4])); // Output: 5


        return res.status(200).json({
            message: "One-shot DSA controller executed successfully",
        });
    } catch (error) {
        console.error("Error in dsaController:", error);
        res.status(500).json({ message: error.message || "Internal Server Error" });
    }
});

export default dsaOneShotController;