// Additional assignments for Day 3

/*
 1. Use ternary operator to assign "male" or "female" string to a variable based on the value of another 'isMale' variable
*/
let isMale= "male"

isMale=="male" ? "Male":"Female"
console.log(isMale) 
/*
 2. Write code to check from two given integers whether one of them is 8 or their sum or difference is 8.
*/
let a = 5
let b = 8
let sum=a+b
let diff=a-b

if(a==8 || b==8){
  console.log("One  of the value is 8")
}else if(sum==8){
  console.log("The sum of two value is 8")
}else if(diff==8){
  console.log("The difference of two value is 8")
}else{
  console.log("The given values not 8 or not sum of them 8 or not difference of two value is 8")
}
/*
  3. Create a variable which concatenates two strings.
*/
let firstName="John"
let lastName="Devid"
let fullName= firstName + " " +lastName
console.log(fullName)
/*
4.Write a JavaScript conditional statement to sort three numbers. Display the result in the console.
*/
a=3
b=9
let c=6

if(a<b && a<c){
  if(b<c){
    console.log(a +","+ b +","+ c)
  }else{
    console.log(a +","+ c +","+ b)
  }
}else if(b<a && b<c){
  if(a<c){
    console.log(b +","+ a +","+ c)
  }else{
    console.log(b +","+ c +","+ a)
  }
}else if(c<a && c<b){
  if(a<b){
    console.log(c +","+ a +","+ b)
  }else{
    console.log(c +","+ b +","+ a)
  }
}

/*
 5. Write code to find the average of two given integers.
*/
let num1=8
let num2=6
let result = (num1+num2)/2
console.log(result)

/* 
  6. Find the longest of two given strings
*/
let smallString = "I am small strings"
let longString = "I am the longest strings"
if(smallString.length > longString.length){
  console.log(smallString)
}else{
  console.log(longString)
}
/*
 7. Write code to check whether a value is an integer or not.
*/
let isValue=50
console.log(Number.isInteger(isValue))

/*
 8. Write code to calculate the percentage (%) of a number.
        Ex.: 20% of 400 is 80
*/
let theNumber=400
let thePercentage= 20
result = (theNumber * thePercentage) / 100
console.log(result)
console.log(theNumber * 0.2) //anther method to calculate 20%

/*
 9. Write code to check if a given number is even or odd.
*/
let number = 25
if(number % 2 == 0) {
    console.log("The number is even.");
}
else {
    console.log("The number is odd.");
}

/*
Extra
*/
/*
1. Write  code to find the area of a triangle where lengths of the three of its sides are 5, 6, 7
*/
// let a = 5;
// let b = 6;
// let c = 7;
// let s = (a + b + c) / 2;
// let p = Math.sqrt(s * (s - a)(s - b)(s - c));
/*
2. Write code to check from two given integers whether one of them is 8 or their sum or difference is 8.

*/
// let a = 5;
// let b = 10;
// if (a === 8 || b === 8 || a + b === 8 || a - b === 8) {
//   console.log(true);
// } else {
//   console.log(false);
// }
/*
3. Create a variable which concatenates two strings.
*/
let str = "Strive " + "Schhol";
/*
4.Write a JavaScript conditional statement to sort three numbers. Display the result in the console.
*/
let x = 3;
let y = 6;
let z = -1;

if (x > y && x > z) {
  if (y > z) {
    console.log(x + ", " + y + ", " + z);
  } else {
    console.log(x + ", " + z + ", " + y);
  }
} else if (y > x && y > z) {
  if (x > z) {
    console.log(y + ", " + x + ", " + z);
  } else {
    console.log(y + ", " + z + ", " + x);
  }
} else if (z > x && z > y) {
  if (x > y) {
    console.log(z + ", " + x + ", " + y);
  } else {
    console.log(z + ", " + y + ", " + x);
  }
}
/*
 5. Write code to find the average of to given integers.
 */
let d = 4;
let h = 5;
let average = (d + h) / 2;
console.log(average);

/* 
 6. Find the longest of two given strings
 */

let str1 = "aaaa";
let str2 = "bb";
if (str1.length > str2.length) {
  console.log("str1 is longer");
} else {
  console.log("str2 is longer");
}
/**
  7. Write code to check whether a value is an integer or not.
  */
console.log(typeof str1);
if (typeof d === "number") {
  console.log(true);
} else {
  console.log(false);
}

/**
   8. Write code to calculate the percentage (%) of a number.
        Ex.: 20% of 400 is 80
   */
let num = 400;
let per = 20;
let percentage = (400 / 100) * 20;
console.log(percentage);
/**
  9. Write code to check if a given number is even or odd.
 */
if (num % 2 === 0) {
  console.log("even");
} else {
  console.log("odd");
}