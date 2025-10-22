const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/karthik")
.then(() => {
    console.log('Databse Connected');
}).catch(() => {
    console.log('Databse Connection error');
})