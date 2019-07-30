const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

var DealerSalesEnggSchema = new mongoose.Schema({
    DSEname: {
        type: String,
        required: 'Dealer Sales Engineer name can\'t be empty'
    },
    DSEemail: {
        type: String,
        required: 'Email can\'t be empty',
        unique: true
    },
    DSEpassword: {
        type: String,
        required: 'Password can\'t be empty',
        minlength : [4,'Password must be atleast 4 character long']
    },
    saltSecret: String
});

// Custom validation for email
DealerSalesEnggSchema.path('DSEemail').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,13}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');

// Events
DealerSalesEnggSchema.pre('save', function (next) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.DSEpassword, salt, (err, hash) => {
            this.DSEpassword = hash;
            this.saltSecret = salt;
            next();
        });
    });
});


// Methods
DealerSalesEnggSchema.methods.verifyPassword = function (password) {
    return bcrypt.compareSync(password, this.DSEpassword);
};

DealerSalesEnggSchema.methods.generateJwt = function () {
    return jwt.sign({ _id: this._id},
        process.env.JWT_SECRET,
    {
        expiresIn: process.env.JWT_EXP
    });
}

mongoose.model('DealerSalesEnggLoginDetail', DealerSalesEnggSchema)