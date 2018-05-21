/* JavaScript code here */
console.log("external Js");

console.log("Task 2: Sum of an Array:");

function sumArray (arr){
    var sum=0;
    arr.forEach(function(value,index){
        sum += value;
    });
    return sum;
}

console.log(sumArray([2,3,4,5,6]));