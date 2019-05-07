// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/


// getLength passes the length of the array into the callback.

const getLength = (arr, cb) => cb(arr.length)

getLength(items, function(length) {
  console.log (length)
})

// last passes the last item of the array into the callback.
const last = (arr, cb) => cb(arr[arr.length-1])

last(items, function(lastItem) {
  console.log(lastItem)
})

// sumNums adds two numbers (x, y) and passes the result to the callback.
const sumNums = (x, y, cb) => cb(x+y)

sumNums(3,5, function(nums) {
  console.log(nums)
})

sumNums(2,4,console.log)

// multiplyNums multiplies two numbers and passes the result to the callback.
const multiplyNums = (x, y, cb) => cb(x*y)

multiplyNums(5,5,console.log)

// contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
const contains = (item, list, cb) => {
  const result = list.filter(word => word === item)
  if (result.length === 0) {
    return cb(false);
  }
  else {return cb(true);}
}

contains("bob", ["bob","john","dave"],console.log)
contains("blob", ["bob","john","dave"],console.log)


/* STRETCH PROBLEM */
// removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
function removeDuplicates(array, cb) {
  let mySet = new Set(array);
  let newArray = Array.from(mySet);
  return cb(newArray);
}

removeDuplicates([5,5,4,6,8,9,9,5],console.log)
