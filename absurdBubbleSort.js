const readline = require("readline");

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function askIfGreaterThan(el1,el2,callback) {
    function greaterHelper (arg) {
        if (arg === "yes") {
            callback(true); 
        }
        else {
            callback(false);
        }
    }
    reader.question(`Is el1: ${el1} greater than el2: ${el2}?`,greaterHelper);
}

function absurdBubbleSort(arr,sortCompletionCallback) {
    function outerBubbleSortLoop(madeAnySwaps) {
        if(madeAnySwaps){
            innerBubbleSortLoop(arr,0,false,outerBubbleSortLoop)
        }
        else {
            sortCompletionCallback(arr)
        }
    }
    outerBubbleSortLoop(true)
}

function innerBubbleSortLoop(arr, i, madeAnySwaps,outerBubbleSortLoop) {
    if(i < arr.length-1){
        askIfGreaterThan(arr[i],arr[i+1],(isGreaterThan)=> {
            if(isGreaterThan){
                [arr[i+1],arr[i]] = [arr[i],arr[i+1]];
                innerBubbleSortLoop(arr,i+1,true,outerBubbleSortLoop);
            }
            innerBubbleSortLoop(arr,i+1,madeAnySwaps,outerBubbleSortLoop);
        })
    }
    if (i === (arr.length-1)){
        outerBubbleSortLoop(madeAnySwaps);
    }
}

absurdBubbleSort([3,2,1],function(arr) {
    console.log("Sorted array: " + JSON.stringify(arr));
    reader.close();
});