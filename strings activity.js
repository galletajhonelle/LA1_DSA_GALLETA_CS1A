//create a variable named favActorFirstName and store your favorite actor's first name
let favActorFirstName = "Ivana"; 

// create a variable named favActorLastName and store their last name
let favActorLastName = "Alawi"; 

// concatenate the first and last names into a variable named fullName
let fullName = favActorFirstName + " " + favActorLastName;

//create a variable named uppercase and store the capitalized version of your favorite actor's name
let uppercase = fullName.toUpperCase();

// create a variable named message and store a message like: "My favorite actor is [FULL_NAME]"
let message = "My favorite actor is " + uppercase;

// append the message to include "his best show is Silicon Valley"
message += ", her best show is in the Batang Quiapo.";

//log the final message to the console 
console.log(message);
