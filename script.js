const mongoose = require('mongoose');
const User = require('./models/userModel');

mongoose.connect("mongodb://localhost:27017/karthik")
.then(() => {
    console.log('Databse Connected');
}).catch(() => {
    console.log('Databse Connection error');
})

const user = new User({
    name: "karthik",
    age: 21
});

user.save().then(() => {
    console.log("Data inserted or user saved");
})

// async function run() {
//     const newuser = await user.save();
//     console.log(newuser);
// }

// run();