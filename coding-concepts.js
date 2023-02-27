// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Alpha 2023"
// console.log(cohort.split(""))

// a) Your answer: This will take and seperate each word of the string and make them into a array .
// b) Verify and explain: Takes and divides a String into an ordered list of substrings and then puts these substrings into an array.

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer:this will log Hello, LEARN Student
// b) Verify and explain: name is a pareamter that can have values passed thru . in this case the value was learn stuedents and plus the string hello (all returned using string interpulation)

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
// console.log(multipliedByTwo)

// a) Your answer: these numbers will come back doubled [8,10,12,14,16]
// b) Verify and explain:the parameter (number) will use the array values as argumnet in number * 2 

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: this will filter out any number that is not %2 so it will be [11, 13, 15]
// b) Verify and explain: the % 2  !== 0 and the filter method will work together and return a subset oof number that are not % 2 ===0 which is odd.

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer:this will log JavaScript
// b) Verify and explain: this is like a file path , if you wanna get to a certian folder you need to know the path that its in . for this its in myCodingSkills in a folder called laugauges and its the first file [0] 
