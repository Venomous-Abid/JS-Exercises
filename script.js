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

function checkEmail(emailString) {
    var emailFormat =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
   var match = emailFormat.test(emailString);
   return match;
}

console.log(checkEmail("itisabidss@gmail.com"));
console.log(checkEmail("Shamahaque@gmail.com"));