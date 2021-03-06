const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        minlength: [2, "First name must be 2 or more characters."]
    },
    lastName: {
        type: String,
        minlength: [2, "Last name must be 2 or more characters."]
    },
    email: {
        type: String,
        unique: true,
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email"
        }
    },
    password: {
        type: String,
        minlength: [8, "Password must be 8 or more characters."]
    }
}, { timestamps: true });

UserSchema.virtual('passwordConfirmation', {
    get: () => this._passwordConfirmation,
    set: val => this._passwordConfirmation = val
});

UserSchema.pre('validate', function (next) {
    if (this.password !== this.passwordConfirmation) {
        this.invalidate('passwordConfirmation', 'Please ensure that your passwords match!');
    }

    next();
});

UserSchema.pre('save', function (next) {
    bcrypt.hash(this.password, 10)
        .then(hashedPw => {
            this.password = hashedPw;
            next();
        })
        .catch(err => console.log('Did not Work'));
});


module.exports = mongoose.model('User', UserSchema);