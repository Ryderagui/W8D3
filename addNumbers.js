const readline = require("readline");

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback){
    const prinSum = function(num){
        let intNum = parseInt(num);
        sum += intNum;
        console.log(sum);

        return addNumbers(sum, numsLeft -1, completionCallback);
    }

    if(numsLeft > 0){
        reader.question("What is your number? ", prinSum )
    } else {
        return completionCallback(sum);
    }
    
}

// addNumbers(0, 3, (sum) => console.log(`Final sum: ${sum}`));

