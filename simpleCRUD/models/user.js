const mongoose = require('mongoose');
const Schema = mongoose.Schema;

userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: {
        type: String,
        required: true
    },
    agree: {
        type: Boolean,
        required: true
    },
    dob: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('Taskuser', userSchema);