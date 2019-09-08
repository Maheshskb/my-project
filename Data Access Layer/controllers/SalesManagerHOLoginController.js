
const express = require('express');
const mongoose = require('mongoose');
var router = express.Router();

//Import ObjectId from mongoose to check is the entered id is available in mongodb or not
var ObjectId = require('mongoose').Types.ObjectId;

const RegisterSalesManagerHo = mongoose.model('RegisterSalesManagerHo');

    router.get('/', (req, res) => {

        RegisterSalesManagerHo.find((err, docs) => {
    
            if (!err) { res.send(docs); }
    
            else { console.log('Error in Retriving Pennar Sales Engineer Details :' + JSON.stringify(err, undefined, 2)); }
    
        });
    
    });
    router.post('/', (req, res, next) => {
    var registerSalesManagerHo = new RegisterSalesManagerHo();
    registerSalesManagerHo.FullName = req.body.FullName;
    registerSalesManagerHo.Email = req.body.Email;
    registerSalesManagerHo.Password = req.body.Password;
    registerSalesManagerHo.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            if (err.code == 11000)
                res.status(422).send(['Duplicate email adrress found.']);
            else
                return next(err);
        }

    });
    // console.log('Inside Reg Function..');
});


module.exports = router;