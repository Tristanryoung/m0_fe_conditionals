
var goodDrivingRecord = false;
var age = 24;

if (goodDrivingRecord ===true && age > 25) {
    console.log ("You will recieve a discount on your car rental!")
} else if (goodDrivingRecord === true || age > 25) {
    console.log ("You have to pay full price on your car rental! ")
} else if (goodDrivingRecord !== true && age < 25 ) {
    console.log ("You need to have someone else sign for your car rental.")
}

// Write a program that evaluates the status of the variables above, and uses logic to print one of three possible messages:
// - If the driving record is good and user is over 25 years old, they should get a discount on the car rental
// - If the user either has a good record or is over 25 years old, they should pay full price
// - If the user is not over 25 and has a bad driving record, they need to have someone else sign for the rental
