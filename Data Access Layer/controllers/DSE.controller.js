// define a function for user registration and user sign up
const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const DealerSalesEnggLoginDetail = mongoose.model('DealerSalesEnggLoginDetail');

module.exports.RegisterDealerSalesEngg = (req, res, next)=>{
    // console.log('Inside Dealer sales engg');
    var dealerSalesEnggLoginDetail = new DealerSalesEnggLoginDetail();
        dealerSalesEnggLoginDetail.DSEname = req.body.DSEname;
        dealerSalesEnggLoginDetail.DSEemail = req.body.DSEemail;
        dealerSalesEnggLoginDetail.DSEpassword = req.body.DSEpassword;
        dealerSalesEnggLoginDetail.save((err,doc)=>{
            if(!err)
            {
                res.send(doc);
            }
            else {
                if (err.code == 11000)
                    res.status(422).send(['Duplicate email adrress found.']);
                else
                    return next(err);
            }
            
        });
}

module.exports.authenticate = (req, res, next) => {
    // call for passport authentication
    passport.authenticate('local', (err, dealerSalesEnggLoginDetail, info) => {       
        // error from passport middleware
        if (err) return res.status(400).json(err);
        // registered user
        else if (dealerSalesEnggLoginDetail) return res.status(200).json({ "token": dealerSalesEnggLoginDetail.generateJwt() });
        // unknown user or wrong password
        else return res.status(404).json(info);
    })(req, res);
}

module.exports.DealerSalesEnggDashboard = (req, res, next) =>{
    DealerSalesEnggLoginDetail.findOne({ _id: req._id },
        (err, dealerSalesEnggLoginDetail) => {
            if (!dealerSalesEnggLoginDetail)
                return res.status(404).json({ status: false, message: 'User record not found.' });
            else
                return res.status(200).json({ status: true, dealerSalesEnggLoginDetail : _.pick(dealerSalesEnggLoginDetail,['DSEname','DSEemail']) });
        }
    );
}