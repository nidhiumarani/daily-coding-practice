// Leetcode - https://leetcode.com/problems/two-sum/

// two sum 
const readLine = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("\n readline -> ", readLine);

readLine.question("Enter array numbers comma seperated ", nums => {
    readLine.question("Enter target number ", target => {

        // nums entered will be in string always so convert in "number" type
        const arrayNums = nums.split(",").map(Number) // data type is "Number"
        const targetNum = Number(target);
 
        function twoSum(arrayNums, targetNum) {
            // bruteforce
            let result = [];
            for(let i = 0; i < arrayNums.length; i++) {
                for(let j = i+1; j < arrayNums.length; j++) {
                    if(arrayNums[i] + arrayNums[j] == targetNum) {
                        result.push(i, j);
                    }
                }
            }
            return result;
        } 
        console.log("\n output -> ", twoSum(arrayNums, targetNum));
        readLine.close();
    })
})