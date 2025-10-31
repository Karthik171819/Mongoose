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

try{
    //const user = await User.find().byName('karthik') //own method creation
    const user = await User.findOne({name: 'karthik'});
    user.sayHi()
    // const newuser = await User.create({
    //     name: "karthik",
    //     age: 21,
    //     email:'Testing@gmail.com',
    //     hobbies: ['Sports','cricket'],
    //     address: {
    //         city: "Bengaluru"
        // }
    // });
    // console.log(newuser);
    console.log(user);
    }catch(e) {
        console.log(e.errors)
    }
} 

run();