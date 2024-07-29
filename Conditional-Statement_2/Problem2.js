/* Problem 2: Marriage Eligibility Check:
Create a JavaScript program to determine if a person is eligible for marriage
based on their gender and age. If the person is male, check if he is 21 years or
older; if yes, he is eligible. If the person is female, check if she is 18 years or
older; if yes, she is eligible. Print a message indicating whether the person is
eligible for marriage or not. */

let age=18, gender='female'
if (gender=='male') {
    if (age>=21) {
        console.log("He is Eligible for marriage.");
    } else{
        console.log("Sorry man, you're not eligible for marriage. You're Still Chotu");
    }
} else if (gender=='female') {
    if (age>=18) {
        console.log("She is Eligible for marriage.");
    } else {
        console.log("You're not eligible for marriage. You're still Choti");
    }
} else {
    console.log("Error msg displaying");
}