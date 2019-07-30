const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, (err) => {
    if (!err) { console.log('MongoDB connection succeeded.'); }
    else { console.log('Error in MongoDB connection : ' + JSON.stringify(err, undefined, 2)); }
});


//this user model is required in Log in Form 
require('./user.model');
require('./DealerSalesEngg/DSEUser.model');
// require('./DealerSalesEngg/DSEregister.model');
//Add model for Registration of pennar sales engg
require('./PennarSalesEngineer/PSEregister.model');
module.exports = mongoose;
