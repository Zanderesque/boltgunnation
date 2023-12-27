await cigarDB from `./db` 
//Create a new user
const jane = await User.create({
     firstName: "Jane", 
     lastName: "Doe",
     username: "USER_USERNAME",
     email: "USER_EMAIL",
     password: "USER_PASS",
     });
// by this point, the user has been saved to the database!
console.log("Jane's auto-generated ID:", jane.id);

