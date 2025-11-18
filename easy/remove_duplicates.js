// Leetcode - 26 - Remove Dupplicates from sorted array
/* Given array - [0,0,1,1,1,2,2,3,3,4] 
Output = 5 [0,1,2,3,4,_,_,_,_,_]  */

const readLine = require('readline').createInterface ({
    input: process.stdin,
    output: process.stdout
});

readLine.question("\n Enter array numbers comma seperated ", arrayNums => {

    // convert array numbers to Number from String
    let nums = arrayNums.split(',').map(Number);

    function remove_duplicates(nums) {
        let j = 0;
        for (let i = 0; i < nums.length; i++) {
            if(nums[i] != nums[i+1]) {
                nums[j] = nums[i];
                console.log("\n printing J -> ", nums[j], j);
                j++
            }
        }
        return j;
    }
    console.log("\n Result -> ", remove_duplicates(nums));
})
