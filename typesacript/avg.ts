let arr = [1, 2, 3, 4];
 
var check = (a, b) =>  a + b;
 
var sum = arr.reduce(check);
   
var avg = sum / arr.length;
 
console.log(avg);