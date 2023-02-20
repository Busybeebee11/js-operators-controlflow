// IF...ELSE CONDITIONAL STATEMENT

let classGroup = "Arts"; // Class group to determine applicable subjects

let scienceSubjects = "Physics, Chemistry, Biology, Technical Drawing";
let socialScienceSubjects = "Accounting, Commerce, Marketing, Geography";
let artsSubjects = "Government, Economics, Literature, History";
let generalSubjects = "English, Mathematics";

if (classGroup === "Science") { // if...else conditional statement used to determine subjects based on class group selection
  console.log(
    "You will be taking Physics, Chemistry, Biology, and Technical Drawing"
  );
} else if (classGroup === "Social Science") { 
  console.log(
    "You will be taking Accounting, Commerce, Marketing, and Geography"
  );
} else if (classGroup === "Arts") { 
  console.log(
    "You will be taking Government, Economics, Literature, and History"
  );
} else { // default - when none of the conditions are met or classGroup string is empty
  console.log(
    "Invalid class group. You will be taking the General Subjects: English and Mathematics"
  );
}



// WHILE LOOP

// Challenge: write a program that takes a positive number (num) and finds the power of 2 nearest to that number.
// Solution: demonstrated using a while loop and an if statement.

let num = 20; // initializes num to 20 and pwr to 1.
let pwr = 1;

while (pwr <= num) { // uses a while loop to keep doubling pwr until it exceeds num.
  pwr *= 2;
}

if (pwr - num > num - pwr / 2) { // checks if the difference between pwr and num is greater than the difference between num and pwr/2. If so, it halves pwr to get the smaller power of 2 nearest to num.
  pwr /= 2;
}

console.log("The number " + pwr + " is the power of 2 nearest to " + num + ".");
