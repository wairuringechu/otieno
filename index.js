//Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity)

let num = [3, 3, 35, 35, 53, 345]
var marks = [...new Set(num)]

console.log(marks)

//Write a JavaScript function to find an array contains a specific element below

function containsFive(array) {
    return array.includes(9);
  }
  let arr = [2, 5, 9, 6];
  console.log(containsFive(arr)); // Output: true


  //Write a method that clears array from all unnecessary elements, like false, undefined, empty strings, zero, null
 //Example: [3, 8, 23, "hello", " ", false, "45"]

 //result: [3, 8, 23, "hello", "45"]

 function clearArray(array) {
    return array.filter(value => value && value !== 0 && value !== " ");
  }
  let arrW = [3, 8, 23, "hello", " ", false, "45"];
  console.log(clearArray(arrW)); // Output: [3, 8, 23, "hello", "45"]


//Write a function to reverse the words a string.

//example: "Hello world"

//result: "world hello"

function reverse(rev){
    return rev.split(" ").reverse().join(" ");
}
console.log(reverse("hello world"));