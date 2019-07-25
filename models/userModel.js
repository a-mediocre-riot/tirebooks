// userModel.js

const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

var userSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

userSchema.plugin(AutoIncrement, { inc_field: 'user_id' });

var user = mongoose.model('user', userSchema);

module.exports = user;