// Two sum optimised using hashmap

const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readLine.question("\n Enter array numbers comma seperated ", inputNum => {
    readLine.question("\n Enter target element ", targetNum => {


        // convert array numbers to Number from String
        const numbers = inputNum.split(',').map(Number);
        const target = Number(targetNum);

        // function 
        function twoSum_optimised(numbers, target) {
            // using hashmap
            const map = new Map();

            for(let i = 0; i < numbers.length; i++) {
                let a = numbers[i];
                let b = target - a;

                if(map.has(b)) {
                    return [map.get(b), i];
                }
                map.set(a, i);
            }
        }
        console.log("\n Result -> ", twoSum_optimised(numbers, target));
    })
})