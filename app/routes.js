const express = require("express");
const router = express.Router();
const landingData = require("./data/landingData");
const dashboardData = require("./data/dashboard-data");

router.get("/home", function(req, res){
  res.render("prototype-demo/home");
})

router.get("/landing", function(req, res){
  res.render("prototype-demo/landing", {landingData});
})


// Setup account section routes
router.get("/create-account", function(req, res){
  res.render("prototype-demo/setup-account/create-account", {step:1, section:'create-account'});
})

router.get("/create-account/check-code", function(req, res){
  res.render("prototype-demo/setup-account/check-code", {step:1, section:'check-code'});
})

router.get("/create-account/verification-confirmation", function(req, res){
  res.render("prototype-demo/setup-account/verification-confirmation", {step:1, section:'verification-confirmation'});
})


router.get("/create-account/step-2/select-account", function(req, res){
  res.render("prototype-demo/setup-account/step-2/select-account", {step:2, section:'select-account'});
})

router.get("/create-account/step-2/personal-account-type", function(req, res){
  res.render("prototype-demo/setup-account/step-2/personal-account-type", {step:2, section:'personal-account-type'});
})

router.get("/create-account/step-2/pre-pay/prerequisites", function(req, res){
  res.render("prototype-demo/setup-account/step-2/prerequisite-content", {step:2, section:'pre-pay-prerequisites'});
})

router.get("/create-account/step-2/payg/prerequisites", function(req, res){
  res.render("prototype-demo/setup-account/step-2/payg-prerquisite-content", {step:2, section:'payg-prerequisites'});
})

router.get("/create-account/step-2/pre-pay/user-info", function(req, res){
  res.render("prototype-demo/setup-account/step-2/user-info-form", {step:2, section:'user-info'});
})

router.get("/create-account/step-2/pre-pay/initial-payment", function(req, res){
  res.render("prototype-demo/setup-account/step-2/initial-payment", {step:2, section:'initial-payment'});
})

router.get("/create-account/step-2/:accounttype/done", function(req, res){

  res.render("prototype-demo/setup-account/step-2/step-2-done", {step:2, section:req.params.accounttype});
})


// step-3 in account setup start
router.get("/create-account/step-3/vehicle-register", function(req, res){
  res.render("prototype-demo/setup-account/step-3/vehicle-register", {step:3, section:'vehicle-register'});
});
router.get("/create-account/step-3/vehicle-details", function(req, res){
  res.render("prototype-demo/setup-account/step-3/vehicle-details", {step:3, section:'vehicle-details', data:landingData.vehicleList});
});
router.get("/create-account/step-3/step-3-done", function(req, res){
  res.render("prototype-demo/setup-account/step-3/step-3-done", {step:3, section:'step-3-done'});
});

// step-3 in account setup end

// step-4 - account setup //
router.get("/create-account/step-4/payments", function(req, res){
  res.render("prototype-demo/setup-account/step-4/payments", {step:4, section:'payments'});
});
router.get("/create-account/step-4/step-4-done", function(req, res){
  res.render("prototype-demo/setup-account/step-4/step-4-done", {step:4, section:'step-4-done'});
});
// step-4 - account setup end 

// Setup account end ///



router.get("/under-development", function(req, res){
  res.render("prototype-demo/under-development");
})


router.get("/login", function(req, res){
  res.render("prototype-demo/login");
})

// Dashboaord section start

router.get("/dashboard", function(req, res){
  res.render("prototype-demo/dashboard/dashboard-landing", {dashboardData});
})

router.get("/dashboard/vehicles", function(req, res){
  res.render("prototype-demo/dashboard/vehicle-details", {dashboardData});
})

router.get("/dashboard/crossings", function(req, res){
  res.render("prototype-demo/dashboard/crossing-details", {dashboardData});
})

router.get("/dashboard/payments", function(req, res){
  res.render("prototype-demo/dashboard/payment-details", {dashboardData});
})

router.get("/dashboard/vehicles/view", function(req, res){
  res.render("prototype-demo/dashboard/view-details", {dashboardData});
})

// Dashboaord section end


module.exports = router;
