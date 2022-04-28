// let random = Math.random();
// if (random < 0.5) {
//     console.log("YOUR NUMBER IS LESS THAN 0.5!");
//     console.log(random);
// } else {
//     console.log("YOUR NUMBER IS GREATER THAN (OR EQUAL TO) 0.5!")
// } 
//  console.log(random);


// const dayOfWeek = prompt('ENTER A DAY').toLowerCase();
// if (dayOfWeek === 'monday') {
//     console.log("UGHHH I HATE MONDAYS!")
// } else if (dayOfWeek === 'saturday') {
//     console.log("YAY I LOVE SATURDAYS!")
// } else if (dayOfWeek === 'friday') {
//     console.log("FRIDAYS ARE DECENT, ESPECIALLY AFTER WORK!")
// } else {
//     console.log("MEH")
// }


// 0-5 FREE
// 5-10  CHILD $10
//10-65 ADULT $20
//65+ SENIOR $10

// const age = 8;
// if (age < 5) {
//     console.log("You are a baby. You get in for free.")
// } else if (age < 10) {
//     console.log("You are a child. You pay $10.")
// } else if (age < 65) {
//     console.log("You are an adult. You pay $20.")
// }


// const password = prompt("please enter a new passowrd");
// // Password must be 6+ characters
// if (password.length >= 6) {
//     // Password cannot include space
//     if (password.indexOf(' ') === -1) {
//         console.log("VALID PASSWORD")
//     } else {
//         console.log("CANNOT CONTAIN SPACE(S)")
//     }
// } 
// else {
//     console.log("PASSWORD TOO SHORT")
// }

// const userInput = prompt("Enter something");

// if (userInput) {
//     console.log("TRUTHY!")
// } else {
//     console.log("FALSEY")
// }

// const password = prompt("Enter your password");
// if (password.length >= 6 && password.indexOf(' ') === -1) {
//     console.log("VALID PASSWORD")
// } else {
//     console.log("INCORRECT FORMAT FOR PASSWORD")
// }


// 0-5 free
// 5-10 $10
// 10-65 $20
// 65+ free

// const age = 90;
// if (age >= 0 && age < 5 || age >= 65) {
//     console.log("FREE");
// } else if (age < 10) {
//     console.log("$10")
// } else if (age >= 10 && age < 65) {
//     console.log("$20")
// } else {
//     console.log("INVALID AGE")
// }

// const firstName = prompt("enter your first name");
// if (!firstName) {
//     firstName = prompt("TRY AGAIN!")
// }

// const day = 2;
// switch(day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//     case 7:
//         console.log("Weekend");
//         break;
//     default:
//         console.log("I DONT KNOW THAT!")
// }

// if (day === 1) {
//     console.log("Monday")
// }
// else if (day === 2) {
//     console.log("Tuesday")
// }
// else if (day === 3) {
//     console.log("Wednesday")
// }
// else if (day === 4) {
//     console.log("Thursday")
// }
// else if (day === 5) {
//     console.log("Friday")
// }
// else {
//     console.log("I DONT KNOW THAT")
// }