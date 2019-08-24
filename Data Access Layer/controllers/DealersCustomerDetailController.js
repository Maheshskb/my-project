const express = require('express');

var router = express.Router();

var {DealerCustomerDetail} = require('../models/DealersCustomerDetail.model');

//This will post the prouct price data to the url
router.post('/', (req, res)=>
{
    //create an object of productDetail model class inside that we have field details of Product Details
    var Dealer_customer = new DealerCustomerDetail(
        {
            CompanyName : req.body.CompanyName,
            CityName : req.body.CityName,
            Address : req.body.Address,
            Pincode : req.body.Pincode,
            DealerCode : req.body.DealerCode,
            IndusrtyType : req.body.IndusrtyType,
            CustOtherInfo : req.body.CustOtherInfo,
            GSTno : req.body.GSTno,
            ContactPersonName : req.body.ContactPersonName,
            Designation : req.body.Designation,
            FisrtEmail : req.body.FisrtEmail,
            SecondEmail : req.body.SecondEmail,
            OfficeNumber : req.body.OfficeNumber,
            MobileNumber : req.body.MobileNumber,
            MoreContacts : req.body.MoreContacts,
            CustProdctPotential : req.body.CustProdctPotential,
            ChooseProductPraposal : req.body.ChooseProductPraposal,
            EnquireyNature : req.body.EnquireyNature,
        });
        //insert data into mongoDB , after saving the record it will callback the function if there is any error it will sent to 'err' parameter , if condition is true then it will send parameters which is newly inserted 
        Dealer_customer.save((err, doc)=>{
             if(!err){ res.send(doc);}
             else{ console.log("Error in Customer Details Saving  : " + JSON.stringify(err,undefined,2));}
        });
});

//base Url : http://localhost:3000/DealersCustomerDetails
router.get('/', (req,res)=>{
    DealerCustomerDetail.find((err, docs) => {

        if (!err) { res.send(docs); }

        else { console.log('Error in Retriving Customer Details :' + JSON.stringify(err, undefined, 2)); }

    });
});

module.exports = router;
