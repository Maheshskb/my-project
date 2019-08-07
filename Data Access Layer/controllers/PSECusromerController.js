const express = require('express');
const mongoose = require('mongoose');
var router = express.Router();

//Import ObjectId from mongoose to check is the entered id is available in mongodb or not
var ObjectId = require('mongoose').Types.ObjectId;

// const RegisterPennarSalesEnginner = mongoose.model('RegisterPennarSalesEnginner');
const PennarSalesEnggCustomerDetails = mongoose.model('PennarSalesEnggCustomerDetails');


    router.get('/', (req, res) => {

        PennarSalesEnggCustomerDetails.find((err, docs) => {
    
            if (!err) { res.send(docs); }
    
            else { console.log('Error in Retriving Pennar Sales Engineer Details :' + JSON.stringify(err, undefined, 2)); }
    
        });
    
    });
    router.post('/', (req, res, next) => {
    var PSEcustDetails = new PennarSalesEnggCustomerDetails();
    PSEcustDetails.CompanyName = req.body.CompanyName;
    PSEcustDetails.CityName = req.body.CityName;
    PSEcustDetails.Address = req.body.Address;
    PSEcustDetails.Pincode = req.body.Pincode;
    PSEcustDetails.DealerCode = req.body.DealerCode;
    PSEcustDetails.IndusrtyType = req.body.IndusrtyType;
    PSEcustDetails.CustOtherInfo = req.body.CustOtherInfo;
    PSEcustDetails.GSTno = req.body.GSTno;
    PSEcustDetails.ContactPersonName = req.body.ContactPersonName;
    PSEcustDetails.Designation = req.body.Designation;
    PSEcustDetails.FisrtEmail = req.body.FisrtEmail;
    PSEcustDetails.SecondEmail = req.body.SecondEmail;
    PSEcustDetails.OfficeNumber = req.body.OfficeNumber;
    PSEcustDetails.MobileNumber = req.body.MobileNumber;
    PSEcustDetails.MoreContacts = req.body.MoreContacts;
    PSEcustDetails.CustProdctPotential = req.body.CustProdctPotential;
    PSEcustDetails.ChooseProductPraposal = req.body.ChooseProductPraposal;
    PSEcustDetails.EnquireyNature = req.body.EnquireyNature;
    PSEcustDetails.save((err, doc) => {
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