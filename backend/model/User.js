const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    }
});

userSchema.pre('save', async function(next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

userSchema.statics.login = async function(email, password) {
    const user = await this.findOne({ email });

    if(user) {
       const auth = await bcrypt.compare(password, user.password);
       if (auth) {
        return user;
       }throw Error ('Incorrect password');

    } throw Error ('Incorrect email');
};

const User = mongoose.model('user', userSchema);

module.exports = User;