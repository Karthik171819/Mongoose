const mongoose = require('mongoose');

//schema creation
const  userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    createdAt: Date,
    updatedAt: Date,
    bestFriend: mongoose.SchemaTypes.ObjectId,
    hobbies: [String],
    address: {
        city: String,
        street: string
    }
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;