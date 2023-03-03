// ASSESSMENT 2: Coding Practical Questions with Jest

// // Please read all questions thoroughly
// // Pseudo coding is REQUIRED
// // If you get stuck, please leave comments to help us understand your thought process

// // Use test driven development to complete the following questions
// // Add appropriate dependencies: $ yarn add jest

// // Reminder: The test will call your function
// // Run the file with the following command: $ yarn jest

// // --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// // a) Create a test with expect statements for each of the variables provided.

// const numbersArray1 = [6, 7, 8, 9, 10]
// // Expected output: [18, 21, 24, 27, 30]
// const numbersArray2 = [24, 27, 30, 33, 36]
// // Expected output: [72, 81, 90, 99, 108]

// // b) Create the function that makes the test pass.
















// // --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.
// // a) Create a test with expect statements for each of the variables provided.
// describe("divisibleBy", () => {
//     it("returns if the number inside it is evenly divisible by three or not ", () => {
//       expect(divisibleBy(object1)).toEqual("is divisible by three")
//       expect(divisibleBy(object2)).toEqual("is divisible by three")
//      expect(divisibleBy(object3)).toEqual("is not divisible by three")
//     })
//   })

// //   ReferenceError: divisibleBy is not defined

// const object1 = { number: 15 }
// // Expected output: "15 is divisible by three"
// const object2 = { number: 0 }
// // Expected output: "0 is divisible by three"
// const object3 = { number: -7 }
// // Expected output: "-7 is not divisible by three"


// // b) Create the function that makes the test pass.


// //PSEUDO Code
// //make a function that takes objects 1 -3 and determines weather they are evenly divisiable by 3 or not.
// //input: objects 1-3
// //output: mulitipled by 3  
// // use an if statment to determine wheather is or not.

// const divisibleBy = (object)=>{
//     if ( object.number % 3 == 0) {
//         return "is divisible by three"
//     }else{
//         return "is not divisible by three"
//     }
// }













// // --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// // a) Create a test with expect statements for each of the variables provided.

// describe("toUpperCases", () => {
//     it("returns the array caplitalized", () => {
//       expect(toUpperCases(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
//       expect(toUpperCases(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
//     })
//   })


// // b) Create the function that makes the test pass.

// const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
// const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// // Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]



// // //PSEUDO Code
// // //make a function that takes in an array of words and returns an array with all the words capitalized..
// // //input: randomNuouns 1-2
// // //output:  randomNuouns 1-2
// // declare a function that takes in an array
// // access the first value of each index and cappitalize it , and then concat the rest of the values to make uppercase and the other letter to be lowercase
// // logging the function and pass in the array

// //
// const toUpperCases = (array) => {  return array.map((value) => {return value[0].toUpperCase() + value.substring(1)  })}


    
    








// --------------------3) Create a function that takes in a string and logs the index of the first vowel.



// a) Create a test with expect statements for each of the variables provided.


// describe("vowelFinder", () => {
//     it("logs the index of the first vowel.", () => {
//       // expect(vowelFinder(vowelTester1)).toEqual(1)     
//       // expect(vowelFinder(vowelTester2)).toEqual(0)
//       //  expect(vowelFinder(vowelTester3)).toEqual(2)
//     })
//   })


// const vowelTester1 = "learn"
// // Expected output: 1
// const vowelTester2 = "academy"
// // Expected output: 0
// const vowelTester3 = "challenges"
// // Expected output: 2

// // b) Create the function that makes the test pass.

//  //PSEUDO Code
// // make a function that takes in a string and logs the index of the first vowel.
// //input: voweltester 1-3
// //output: index of the first vowel of teh string
// // declare a function that takes in an string
// // access the first vowel of each string and return the index number 

// // Student comments : i cant seem to get the function to be dynamic where it can search for mulitpy letters
// // comment:you have to run each one seperate inorder to make it work

// // const vowelFinder = (object) => {return object.indexOf ("e")}
// // const vowelFinder = (object) => {return object.indexOf ("a")}
// // const vowelFinder = (object) => {return object.indexOf ("a")}
