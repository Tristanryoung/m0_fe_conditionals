// In the exercises below, write your own code where indicated
// to achieve the desired result.

// One example is already completed. Your task is to complete
// any remaining prompt.

// Make sure to run the file in your command line using `node <filename>.js`


// -------------------
// PART 1: Comparing variables
// -------------------

var numberTeachers = 4
var numberStudents = 20
var stringTeachers = "4"
var numberDogs = 0

// EXAMPLE: log the result of the comparison: is numberTeachers greater than numberStudents?
console.log("Is numberTeachers greater than numberStudents?", numberTeachers > numberStudents);
// this should log: "Is numberTeachers greater than numberStudents?" false

// YOU DO: log the result of the comparison: is numberTeachers less than numberStudents?
// this should log: true

console.log("Is numberTeachers less than numberStudents?", numberTeachers < numberStudents);

// YOU DO: log the result of the comparison: is numberTeachers strictly equal to stringTeachers?
// this should log: false

console.log ("Is numberTeachers strictly equal to stringTeachers?", numberTeachers === stringTeachers);

// YOU DO: log the result of the comparison: is numberTeachers not equal to numberStudents?
// this should log: true

console.log ("Is numberTeachers not equal to numberStudents?", numberTeachers !== numberStudents);

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 20?
// this should log: true

console.log ("Is numberStudents greater than or equal to 20?", numberStudents >= 20);

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 21?
// this should log: false

console.log ("Is numberStudents greater than or equal to 21?", numberStudents >= 21);

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 20?
// this should log: true

console.log ("Is numberStudents less than or equal to 20?", numberStudents <=20);

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 21?
// this should log: true

console.log("Is numberStudents less than or equal to 21?", numberStudents <=21);


// #-------------------
// PART 2: Articulating what you are doing
// #-------------------

// For the following prompts, you will be given a line of code and your task is to type out a Comment,
// in English, explaining what that line of code is doing, including what the comparison will evaluate to.
// Be as technically precise as possible, but don't just copy and paste a definition from the readings.
// Make sure YOU can explain it that way!

console.log(4 < 9);
// This comparison is evaluating whether 4 is less than 9-- this comparison will evaluate to true

var books = 3;
console.log(4 < books);
// This code defines the variable books to equal 3, it then evaluates whether 4 is less than books, which we know equals 3-- this comparison will evaluate to false

var friends = 6;
var siblings = 2;
console.log(friends > siblings);
// This code defines variables friends equals 6 and siblings equals 2, it then evaluates whether friends (6) is greather than siblings (2)-this comparison will evaluate to true

var attendees = 9;
var meals = 8;
console.log(attendees !== meals);
// This code defines variables attendees equals 9 and meals equals 8, it then evaluates whether attendees (9) is not strictly equal to meals (8)- this comparison will evaluate to true


// #-------------------
// PART 3: Logical Operators
// #-------------------

var isHungry = true;
var finishedHomework = false;

// EXAMPLE:
// Determine if the user is hungry and has completed their homework
console.log(isHungry && finishedHomework);
// Determine if the user is hungry or has completed their homework
console.log(isHungry || finishedHomework);

var lovesToPlay = true;
var lovesDogPark = false;
var lovesTreats = true;
var age = 1;

// YOU DO:
// Determine if the dog loves to play and loves treats
console.log ("Does the dog love to play and love treats?", lovesToPlay && lovesTreats);
//this evaluates to true

// Determine if the dog loves to play and loves the dog park
console.log ("Does the dog love to play and love the dog park?", lovesToPlay && lovesDogPark);
// this evaluates to false


// Determine if the dog loves to play or loves the dog park
console.log("Does the dog love to play or love the dog park?", lovesToPlay || lovesDogPark);
// this evaluates to true


// Determine if the dog loves to play and is a puppy

// What did your final line of code evaluate to? Why do you think that is? Explain.
// ANSWER: