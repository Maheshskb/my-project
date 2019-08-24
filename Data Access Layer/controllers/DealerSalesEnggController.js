const express = require('express');

var router = express.Router();

var { DealerSalesEngg } = require('../models/DealerSalesEngg.model');

//This will post the prouct price data to the url
router.post('/', (req, res)=>
{
    //create an object of productDetail model class inside that we have field details of Product Details
    var Dealer_Sales_Engg = new DealerSalesEngg(
        {
            FirstName : req.body.FirstName,
            LastName : req.body.LastName,
            Address : req.body.Address,
            Email : req.body.Email,
            MobileNumber : req.body.MobileNumber,
            PANnumber : req.body.PANnumber,
            AdharNo : req.body.AdharNo,
            Password : req.body.Password,
        });
        //insert data into mongoDB , after saving the record it will callback the function if there is any error it will sent to 'err' parameter , if condition is true then it will send parameters which is newly inserted 
        Dealer_Sales_Engg.save((err, doc)=>{
             if(!err){ res.send(doc);}
             else{ console.log("Error in Customer Details Saving  : " + JSON.stringify(err,undefined,2));}
        });
});

//base Url : http://localhost:3000/AddDealersSalesEngg
router.get('/', (req,res)=>{
    DealerSalesEngg.find((err, docs) => {

        if (!err) { res.send(docs); }

        else { console.log('Error in Retriving Customer Details :' + JSON.stringify(err, undefined, 2)); }

    });
});

module.exports = router;
