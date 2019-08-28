const express = require('express');

var router = express.Router();

//Import ObjectId from mongoose to check is the entered id is available in mongodb or not
var ObjectId = require('mongoose').Types.ObjectId;


// var { BiodisperantProduct } = require('../models/BiodisperantProduct.model');
var { BiocideProduct } = require('../models/BiocideProduct.model');


// => localhost:3000/BiodisperantProduct/

router.get('/', (req, res) => {

    BiocideProduct.find((err, docs) => {

        if (!err) { res.send(docs); }

        else { console.log('Error in Retriving Product Details :' + JSON.stringify(err, undefined, 2)); }

    });

});

//get product by an ID
router.get('/:id', (req,res)=>
{
   if(!ObjectId.isValid(req.params.id))
   return res.status(400).send(`No Record with given id :  ${req.params.id}`);

   BiocideProduct.findById(req.params.id,(err, doc)=>{
    if (!err) { res.send(doc); }
    else { console.log('Error in Retriving Product Details :' + JSON.stringify(err, undefined, 2)); }
   });
});


//This will post the prouct data to the url
router.post('/', (req, res)=>
{
    //create an object of productDetail model class inside that we have field details of Product Details
    var biocideProduct = new BiocideProduct(
        {
            CreatedDate : req.body.CreatedDate,
            ModifiedDate : req.body.ModifiedDate,
            MaintScore : req.body.MaintScore,
            HalfLife : req.body.HalfLife,
            SourceOfWater : req.body.SourceOfWater,
            ProductName : req.body.ProductName,
            Dosage : req.body.Dosage,
            Frequency : req.body.Frequency,
        });
        //insert data into mongoDB , after saving the record it will callback the function if there is any error it will sent to 'err' parameter , if condition is true then it will send parameters which is newly inserted 
        biocideProduct.save((err, doc)=>{
             if(!err){ res.send(doc);}
             else{ console.log("Error in Product Detail Save : " + JSON.stringify(err,undefined,2));}
        });
});

//Update Product value with Put method
router.put("/:id",(req, res)=>
{
  if(!ObjectId.isValid(req.params.id))
  return res.status(400).send(`No record with given id : $(req.params.id)`);

  var biocideProduct = 
    {
            CreatedDate : req.body.CreatedDate,
            ModifiedDate : req.body.ModifiedDate,
            MaintScore : req.body.MaintScore,
            HalfLife : req.body.HalfLife,
            SourceOfWater : req.body.SourceOfWater,
            ProductName : req.body.ProductName,
            Dosage : req.body.Dosage,
            Frequency : req.body.Frequency,
    };
    BiocideProduct.findByIdAndUpdate(req.params.id, {$set:biocideProduct},{new:true},(err,doc)=>
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

   BiocideProduct.findByIdAndRemove(req.params.id,(err,doc)=>
   {
    if(!err){ res.send(doc);}
    else{ console.log("Error in Product Delete : " + JSON.stringify(err,undefined,2));}
   });
});


module.exports = router;