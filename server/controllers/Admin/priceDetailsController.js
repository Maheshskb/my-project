const express = require('express');

var router = express.Router();

//Import ObjectId from mongoose to check is the entered id is available in mongodb or not
var ObjectId = require('mongoose').Types.ObjectId;


var {priceDetail} = require('../../models/Admin/priceDetails');

// => localhost:3000/priceDetails/

router.get('/', (req, res) => {

    priceDetail.find((err, docs) => {

        if (!err) { res.send(docs); }

        else { console.log('Error in Retriving Product Price Details :' + JSON.stringify(err, undefined, 2)); }

    });

});

//get product Pice  by an ID
router.get('/:id', (req,res)=>
{
   if(!ObjectId.isValid(req.params.id))
   return res.status(400).send(`No Record with given id :  ${req.params.id}`);

   priceDetail.findById(req.params.id,(err, doc)=>{
    if (!err) { res.send(doc); }
    else { console.log('Error in Retriving Product Price Details :' + JSON.stringify(err, undefined, 2)); }
   });
});


//This will post the prouct price data to the url
router.post('/', (req, res)=>
{
    //create an object of productDetail model class inside that we have field details of Product Details
    var productPrice = new priceDetail(
        {
            ProductName : req.body.ProductName,
            THMinPrice : req.body.THMinPrice,
            THMaxPrice : req.body.THMaxPrice,
            phMinPrice : req.body.phMinPrice,
            PhMaxPrice : req.body.PhMaxPrice,
            Dosage : req.body.Dosage,
        });
        //insert data into mongoDB , after saving the record it will callback the function if there is any error it will sent to 'err' parameter , if condition is true then it will send parameters which is newly inserted 
        productPrice.save((err, doc)=>{
             if(!err){ res.send(doc);}
             else{ console.log("Error in Product Price Save Details : " + JSON.stringify(err,undefined,2));}
        });
});

//Update Product value with Put method
router.put("/:id",(req, res)=>
{
  if(!ObjectId.isValid(req.params.id))
  return res.status(400).send(`No record with given id : $(req.params.id)`);

  var productPrice = 
    {
        ProductName : req.body.ProductName,
        THMinPrice : req.body.THMinPrice,
        THMaxPrice : req.body.THMaxPrice,
        phMinPrice : req.body.phMinPrice,
        PhMaxPrice : req.body.PhMaxPrice,
        Dosage : req.body.Dosage,
    };
    priceDetail.findByIdAndUpdate(req.params.id, {$set:productPrice},{new:true},(err,doc)=>
    {
        if(!err){ res.send(doc);}
        else{ console.log("Error in Product Price Update : " + JSON.stringify(err,undefined,2));}
    });
});

//delete product
router.delete('/:id',(req,res)=>
{
    if(!ObjectId.isValid(req.params.id))
   return res.status(400).send(`No Record with given id :  ${req.params.id}`);

   priceDetail.findByIdAndRemove(req.params.id,(err,doc)=>
   {
    if(!err){ res.send(doc);}
    else{ console.log("Error in Product Delete : " + JSON.stringify(err,undefined,2));}
   });
});

module.exports = router;