const express = require('express');

var router = express.Router();

//Import ObjectId from mongoose to check is the entered id is available in mongodb or not
var ObjectId = require('mongoose').Types.ObjectId;


// var { productDetail } = require('../models/ProductDetails.model');
var { CopperCorrosionProduct } = require('../models/CopperCorrosionProduct.model');


// => localhost:3000/BiocideProduct/

router.get('/', (req, res) => {

    CopperCorrosionProduct.find((err, docs) => {

        if (!err) { res.send(docs); }

        else { console.log('Error in Retriving Product Details :' + JSON.stringify(err, undefined, 2)); }

    });

});

//get product by an ID
router.get('/:id', (req,res)=>
{
   if(!ObjectId.isValid(req.params.id))
   return res.status(400).send(`No Record with given id :  ${req.params.id}`);

   CopperCorrosionProduct.findById(req.params.id,(err, doc)=>{
    if (!err) { res.send(doc); }
    else { console.log('Error in Retriving Product Details :' + JSON.stringify(err, undefined, 2)); }
   });
});


//This will post the prouct data to the url
router.post('/', (req, res)=>
{
    //create an object of productDetail model class inside that we have field details of Product Details
    var copperCorrosionProduct = new CopperCorrosionProduct(
        {
            CreatedDate : req.body.CreatedDate,
            ModifiedDate : req.body.ModifiedDate,
            ProductName : req.body.ProductName,
            Dosage : req.body.Dosage,
        });
        //insert data into mongoDB , after saving the record it will callback the function if there is any error it will sent to 'err' parameter , if condition is true then it will send parameters which is newly inserted 
        copperCorrosionProduct.save((err, doc)=>{
             if(!err){ res.send(doc);}
             else{ console.log("Error in Product Detail Save : " + JSON.stringify(err,undefined,2));}
        });
});

//Update Product value with Put method
router.put("/:id",(req, res)=>
{
  if(!ObjectId.isValid(req.params.id))
  return res.status(400).send(`No record with given id : $(req.params.id)`);

  var copperCorrosionProduct = 
    {
        CreatedDate : req.body.CreatedDate,
        ModifiedDate : req.body.ModifiedDate,
        ProductName : req.body.ProductName,
        Dosage : req.body.Dosage,
    };
    CopperCorrosionProduct.findByIdAndUpdate(req.params.id, {$set:copperCorrosionProduct},{new:true},(err,doc)=>
    {
        if(!err){ res.send(doc);}
        else{ console.log("Error in Product Update : " + JSON.stringify(err,undefined,2));}
    });
});

//delete product
router.delete('/:id',(req,res)=>
{
    if(!ObjectId.isValid(req.params.id))
   return res.status(400).send(`No Record with given id :  ${req.params.id}`);

   CopperCorrosionProduct.findByIdAndRemove(req.params.id,(err,doc)=>
   {
    if(!err){ res.send(doc);}
    else{ console.log("Error in Product Delete : " + JSON.stringify(err,undefined,2));}
   });
});

module.exports = router;