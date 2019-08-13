
// const mongoose = require('mongoose');

var PhotoFileUploadProvision =  {

     id : { type : String },

     CreatedDate : { type : String },

     ModifiedDate : { type : String },
     
     IsActive : { type : String },

     CorrosionPhotoFiles: { type: String },

     FoulingPhotoFiles: { type: String },

     AlagePhotoFile : { type : String },

     OtherPhotoFile1 : { type : String },

     OtherPhotoFile2 : { type : String }
 
};


module.exports = { PhotoFileUploadProvision };