const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    city: String,
    street: String
    
})



//schema creation
const  userSchema = new mongoose.Schema({
    name: String,
    age: {
        type: Number,
        min:10,
        max:100,
        //Manually validation
        // validate: {
        //     validator: v => v%2 == 0,
        //     message: props => `${props.value} is not an even number`
        // }
    },
    //schema validation for email
    email:{
        type: String,
        required: true,
        lowercase: true
    },
    createdAt: {
        type: Date,
        default: ()=> Date.now()
    },
    updatedAt: Date,
    bestFriend: mongoose.SchemaTypes.ObjectId,
    hobbies: [String],
    address: addressSchema 
});

//schema methods
userSchema.methods.sayHi = function() {
    console.log(`My name is ${this.name}`)
}

userSchema.statics.findByName = function(name) {
    return this.find({name: name})
}

userSchema.query.byName = function(name) {
    return this.where({name:name})
}

//Schema virtual


const userModel = mongoose.model('User', userSchema);

module.exports = userModel;