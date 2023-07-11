const fs = require("fs");

 

// STEP 1: Reading JSON file
const users = require("./users");

 

// Defining new user
let user = {
    name: "Surya",
    age: 25,
	employid: 0001
};

 

// Defining a another new user
let user1 = {
    name: "Tushar",
    age: 23,
	employid: 0002
};


// Defining a another new user
let user2 = {
    name: "Ankit",
    age: 35,
	employid: 0003
};

// Defining a another new user
let user3 = {
    name: "Alok",
    age: 21,
	employid: 0004
};


 

// STEP 2: Adding new data to users object
users.unshift(user);
users.push(user1)

 

// STEP 3: Writing to a file
fs.writeFile("usersnew.json", JSON.stringify(users), err => {

    // Checking for errors
    if (err) throw err;

 

    console.log("Done writing"); // Success
});