const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');

var User = mongoose.model('User');

passport.use(
    new localStrategy({ usernameField: 'email' },
        (username, password, done) => {
            User.findOne({ email: username },
                (err, user) => {
                    if (err)
                        return done(err);
                    // unknown user
                    else if (!user)
                        return done(null, false, { message: 'Email is not registered' });
                    // wrong password
                    else if (!user.verifyPassword(password))
                        return done(null, false, { message: 'Wrong password.' });
                    // authentication succeeded
                    else
                        return done(null, user);
                });
        })
);

// var DealerSalesEnggLoginDetail = mongoose.model('DealerSalesEnggLoginDetail');

// THIS CODE IS NOT WORKING
// passport.use(
//     new localStrategy({ usernameField: 'DSEemail', passwordField: 'DSEpassword' },
//         (username, password, done) => {
//             DealerSalesEnggLoginDetail.findOne({ DSEemail: username },
//                 (err, dealerSalesEnggLoginDetail) => {
//                     if (err)
//                         return done(err);
//                     // unknown user
//                     else if (!dealerSalesEnggLoginDetail)
//                         return done(null, false, { message: 'Email is not registered' });
//                     // wrong password
//                     else if (!dealerSalesEnggLoginDetail.verifyPassword(password))
//                         return done(null, false, { message: 'Wrong password.' });
//                     // authentication succeeded
//                     else
//                         return done(null, dealerSalesEnggLoginDetail);
//                 });
//         })
// );
