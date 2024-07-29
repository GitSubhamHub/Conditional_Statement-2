/* Problem 3: Driving Eligibility:
Day 6 Assignment: Conditional Statement-2 2
Create a program to determine if a person is eligible to obtain a driver's license.
If the person is 16 or older, check if they have passed the written test. If they
have passed the written test, they are eligible for a driver's license; otherwise,
they are not eligible */

let age=16, test='passed'     //change the value and check the result
if (age>=16) {
    if (test=='passed') {
        console.log("You're eligible for a driver's license");
    } else {
        console.log("You're not passed in the test");
    }
} else {
    console.log("You're not eligible.");
}