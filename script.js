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

console.log("Task 3: Check An Email:");

function checkEmail(emailString) {
    var emailFormat =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
   var match = emailFormat.test(emailString);
   return match;
}

console.log(checkEmail("itisabidss@gmail.com"));
console.log(checkEmail("Shamahaque@gmail.com"));

console.log("Task 4: Objects:");

var library = [ 
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
   }];


function getReadingStatus (index) {
    return library[index].readingStatus;
}
console.log("The reading status is:");
console.log(getReadingStatus(1));