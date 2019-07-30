const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');
// Dealer Sales Engineer controoler
const ctrDealerSalesEngg = require('../controllers/DealerSalesEngg/DSE.controller');
//Register Dealer Sales Engineer
// const ctrRegisterDealerSalesEngg = require('../controllers/DealerSalesEngg/DSEregisterController');

//Register Pennar Sales Engineer
const ctrRegisterPennarSalesEngg = require('../controllers/PennarSalesEngineer/PSEregisterController');

const jwtHelper = require('../config/jwtHelper');
const DSEjwtHelper = require('../config/DSEjwtHelper');

router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
//  router.get('/userProfile',jwtHelper.verifyJwtToken, ctrlUser.userProfile);
 router.get('/adminDashboard', jwtHelper.verifyJwtToken, ctrlUser.adminDashboard);



// Dealer Sales Engineer Login Routes
router.post('/RegisterDealerSalesEngg', ctrDealerSalesEngg.RegisterDealerSalesEngg); 
// router.post('/RegisterDealerSalesEngineer', ctrRegisterDealerSalesEngg.RegisterDealerSalesEngineer);
router.post('/authenticateDealerSalesEngg', ctrDealerSalesEngg.authenticate);//
router.get('/DealerSalesEnggDashboard',DSEjwtHelper.verifyJwtToken, ctrDealerSalesEngg.DealerSalesEnggDashboard);


//Pennar Sales Engineer Routes
//router.post('/RegisterPennarSalesEngineer', ctrRegisterPennarSalesEngg.RegisterPennarSalesEngineer);
//router.get('/RegisterPennarSalesEngineer', DSEjwtHelper.verifyJwtToken,ctrRegisterPennarSalesEngg.RegisterPennarSalesEngineer);

module.exports = router;



