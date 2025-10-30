const mongoose = require('mongoose');
const User = require('./models/userModel');

mongoose.connect("mongodb://localhost:27017/karthik")
.then(() => {
    console.log('Database Connected');
}).catch(() => {
    console.log('Database Connection error');
})

// const user = new User({
//     name: "karthik",
//     age: 21
// });

// user.save().then(() => {
//     console.log("Data inserted or user saved");
// })

async function run() {
    const newuser = await User.create({
        name: "karthik",
        age: 21,
        hobbies: ['Sports','cricket'],
        address: {
            city: "Bengaluru"
        }
    });
    console.log(newuser);
}

run();