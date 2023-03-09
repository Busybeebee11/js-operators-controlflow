
// QUESTION 3

// IF...ELSE CONDITIONAL STATEMENT

let classGroup = ""; // Class group to determine applicable subjects

let scienceSubjects = "Physics, Chemistry, Biology, Technical Drawing";
let socialScienceSubjects = "Accounting, Commerce, Marketing, Geography";
let artsSubjects = "Government, Economics, Literature, History";
let generalSubjects = "English, Mathematics";

// WHAT I SUBMITTED
// if (classGroup === "Science") { // if...else conditional statement used to determine subjects based on class group selection
//   console.log(
//     "You will be taking Physics, Chemistry, Biology, and Technical Drawing"
//   );
// } else if (classGroup === "Social Science") { 
//   console.log(
//     "You will be taking Accounting, Commerce, Marketing, and Geography"
//   );
// } else if (classGroup === "Arts") { 
//   console.log(
//     "You will be taking Government, Economics, Literature, and History"
//   );
// } else { // default - when none of the conditions are met or classGroup string is empty
//   console.log(
//     "Invalid class group. You will be taking the General Subjects: English and Mathematics"
//   );
// }

// REVIEWED AND FEEDBACK - made repetition obsolete and code easier and cleaner
if (classGroup === "Science") { // if...else conditional statement used to determine subjects based on class group selection
  console.log("You will be taking " + generalSubjects + ", " + scienceSubjects);

} else if (classGroup === "Social Science") {
  console.log("You will be taking " + generalSubjects + ", " + socialScienceSubjects);
  
} else if (classGroup === "Arts") {
   console.log("You will be taking " + generalSubjects + ", " + artsSubjects);

} else { // default - when none of the conditions are met or classGroup string is empty
  console.log("Invalid class group. You will be taking the General Subjects: " + generalSubjects);
}


// QUESTION 5

// Challenge: write a program that takes a positive number (num) and finds the power of 2 nearest to that number.
// Solution: demonstrated using a WHILE LOOP and an IF statement.

let num = 20; // initializes num to 20 and pwr to 1.
let pwr = 1;

while (pwr <= num) { // uses a while loop to keep doubling pwr until it exceeds num.
  pwr *= 2;
}

if (pwr - num >= num - pwr / 2) { // checks if the difference between pwr and num is greater than the difference between num and pwr/2. If so, it halves pwr to get the smaller power of 2 nearest to num.
  pwr /= 2;
}

console.log("The number " + pwr + " is the power of 2 nearest to " + num + ".");

// Submitted the if condition with >, after review amended to >= to meet all the stated conditions



// SOLUTION TO QUESTION 5 BY MENTOR
// Problem Breakdown
// Input - a postive number, num
// Output - power of 2 nearest to num, pwr

// Test Cases
// - if num = 3, pwr = 2
// - If num = 40, pwr = 32
// - If num = 50, pwr = 64

// Pseudocode / Logic / Conditions
// get input
// set initial power, pwr = 0
// set index = 0
// while 2**index < num, set lastpower == 2**index. Then, keep doing 2**index
// if power > num , set pwr  = new power
// if new power - number >= num - lastpower, then pwr = lastpower

let numSol = 40;

let pwrSol = 0;
let index = 0;
let previousPower = 0;

while (pwrSol < numSol) {
  previousPower = pwrSol;
  pwrSol = 2**index;
  index++
}

let diff1 = numSol - previousPower; // 50 - 32 = 18
let diff2 = pwrSol - numSol;  // 64 - 50 = 14

if (diff2 >= diff1) {
  pwrSol = previousPower  // 64
}

console.log("The number " + pwrSol + " is the power of 2 nearest to " + numSol);