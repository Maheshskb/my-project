const express = require('express');

var router = express.Router();

//Import ObjectId from mongoose to check is the entered id is available in mongodb or not
var ObjectId = require('mongoose').Types.ObjectId;

var {customerDetail} = require('../../models/DealerSalesEngg/customerDetails');


//base Url : localhost:3000/customerDetails
router.get('/', (req,res)=>{
    customerDetail.find((err, docs) => {

        if (!err) { res.send(docs); }

        else { console.log('Error in Retriving Customer Details :' + JSON.stringify(err, undefined, 2)); }

    });
});


//get product Pice  by an ID
router.get('/:id', (req,res)=>
{
   if(!ObjectId.isValid(req.params.id))
   return res.status(400).send(`No Record with given id :  ${req.params.id}`);

   customerDetail.findById(req.params.id,(err, doc)=>{
    if (!err) { res.send(doc); }
    else { console.log('Error in Retriving Customer Details :' + JSON.stringify(err, undefined, 2)); }
   });
});

//This will post the prouct price data to the url
router.post('/', (req, res)=>
{
    //create an object of productDetail model class inside that we have field details of Product Details
    var customer_detail = new customerDetail(
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
        customer_detail.save((err, doc)=>{
             if(!err){ res.send(doc);}
             else{ console.log("Error in Customer Details Saving  : " + JSON.stringify(err,undefined,2));}
        });
});

//Update Product value with Put method
router.put("/:id",(req, res)=>
{
  if(!ObjectId.isValid(req.params.id))
  return res.status(400).send(`No record with given id : $(req.params.id)`);

  var customer_detail = 
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
    };
    customerDetail.findByIdAndUpdate(req.params.id, {$set:customer_detail},{new:true},(err,doc)=>
    {
        if(!err){ res.send(doc);}
        else{ console.log("Error in Customer Detail Updation : " + JSON.stringify(err,undefined,2));}
    });
});


//delete product
router.delete('/:id',(req,res)=>
{
    if(!ObjectId.isValid(req.params.id))
   return res.status(400).send(`No Record with given id :  ${req.params.id}`);

   customerDetail.findByIdAndRemove(req.params.id,(err,doc)=>
   {
    if(!err){ res.send(doc);}
    else{ console.log("Error in Customer Dtails deletion : " + JSON.stringify(err,undefined,2));}
   });
});

module.exports = router;