/* Problem 4: Online Food Ordering:
If the order total is $50 or more, the customer is eligible for free delivery.
If the order total is less than $50, check the customer's loyalty status:
If the customer is a loyalty member (yes/no), they are eligible for free
delivery.
If the customer is not a loyalty member, check the distance from the
restaurant to the delivery address:
If the distance is less than 5 miles, the customer is eligible for free
delivery.
If the distance is 5 miles or more, delivery is not free */

let orderTotal=$50, loyaltyMember='Yes', distance=5
if (orderTotal>=$50) {
    console.log("customer is eligible for free delivery.");
} else if (orderTotal<$50) {
    if (loyaltyMember=='Yes') {
        console.log("customer is eligible for free delivery.");
    } else {
        if (distance<5) {
            console.log("customer is eligible for free delivery.");
        } else {
            console.log("delivery is not free.");
        }
    }
} else {
    console.log("delivery is not free.");
}