const express = require('express');
var router = express.Router();
var {TransactionScreenData} = require('../models/TransactionScreen.model');


// => localhost:3000/TransactionDataScreen/

router.get('/', (req, res) => {

    TransactionScreenData.find((err, docs) => {

        if (!err) { res.send(docs); }

        else { console.log('Error in Retriving Transaction Screen Details :' + JSON.stringify(err, undefined, 2)); }

    });

});

// //This will post the prouct price data to the url
router.post('/', (req, res)=>
{
    //create an object of productDetail model class inside that we have field details of Product Details
    var TSdata = new TransactionScreenData(
        {
            TowerNumbers : req.body.TowerNumbers,
            TowerName : req.body.TowerName,
            
        });
        //insert data into mongoDB , after saving the record it will callback the function if there is any error it will sent to 'err' parameter , if condition is true then it will send parameters which is newly inserted 
        TSdata.save((err, doc)=>{
             if(!err){ res.send(doc);}
             else{ console.log("Error in Transaction Screen Data Saving  : " + JSON.stringify(err,undefined,2));}
        });
});

module.exports = router;