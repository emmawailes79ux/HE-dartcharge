const express = require("express");
const router = express.Router();
const landingData = require("./data/landing-data");
const dashboardData = require("./data/dashboard-data");
const {
  red
} = require("ansi-colors");

router.get("/home", function (req, res) {
  res.render("prototype-demo/home");
});

router.get("/charges-fines", function (req, res) {
  res.render("prototype-demo/charges-fines");
});
router.get("/charges", function (req, res) {
  res.render("prototype-demo/charges");
});

router.get("/landing", function (req, res) {
  res.render("prototype-demo/landing", {
    landingData,
  });
});
// Setup account section routes
router.get("/create-account", function (req, res) {
  res.render("prototype-demo/setup-account/create-account", {
    step: 1,
    section: "create-account",
  });
});

router.get("/faq", function (req, res) {

  res.render("prototype-demo/faq");
});


router.post("/create-account", function (req, res) {
  if (req.body.email) {
    res.redirect("create-account/check-code");
  }
});

router.get("/create-account/check-code", function (req, res) {
  const {
    data
  } = req.session;
  Object.assign(data, {
    step: 1,
    section: "check-code",
  });

  res.render("prototype-demo/setup-account/check-code");
});

router.get("/create-account/verification-confirmation", function (req, res) {
  const {
    data
  } = req.session;
  Object.assign(data, {
    step: 1,
    section: "verification-confirmation",
  });
  res.render("prototype-demo/setup-account/verification-confirmation", {
    step: 1,
    section: "verification-confirmation",
  });
});

router.get("/create-account/step-2/select-account", function (req, res) {
  res.render("prototype-demo/setup-account/step-2/select-account", {
    step: 2,
    section: "select-account",
  });
});

router.post("/create-account/step-2/select-account", function (req, res) {
  const {
    data
  } = req.session;
  let redirect =
    data["select-account"] === "business-account" ?
    "pre-pay/user-info" :
    "personal-account-type";
  res.redirect(`${redirect}`);
});

router.get("/create-account/step-2/initial-deposit", function (req, res) {
  res.render("prototype-demo/setup-account/step-2/initial-deposit", {
    step: 4
  });
});

router.get("/create-account/step-2/personal-account-type", function (req, res) {
  res.render("prototype-demo/setup-account/step-2/personal-account-type", {
    step: 2,
    section: "personal-account-type",
  });
});

router.post("/create-account/step-2/personal-account-type", function (req, res) {

  let redirect = '';

  if (req.body['personal-account-type'] === 'pre-pay') {

    redirect = 'pre-pay/prerequisites'

  } else if (req.body['personal-account-type'] === 'lrds') {

    redirect = '../../lrds';

  } else {

    return false;

  }
  res.redirect(`${redirect}`);
});

router.get("/create-account/step-2/pre-pay/prerequisites", function (req, res) {
  const {
    data
  } = req.session;
  data["step"] = 2;
  data["section"] = "pre-pay-prerequisites";
  res.render("prototype-demo/setup-account/step-2/prerequisite-content", data);
});

router.get("/create-account/step-2/payg/prerequisites", function (req, res) {
  res.render("prototype-demo/setup-account/step-2/payg-prerquisite-content", {
    step: 2,
    section: "payg-prerequisites",
  });
});

router.get("/create-account/step-2/pre-pay/user-info", function (req, res) {
  const {
    data
  } = req.session;
  data["step"] = 2;
  data["section"] = "user-info";
  res.render("prototype-demo/setup-account/step-2/user-info-form", data);
});

router.get("/create-account/step-2/nominate-user-confirmation", function (req, res) {
  const {
    data
  } = req.session;
  data["step"] = 2;
  data["section"] = "nominate-user";
  res.render("prototype-demo/setup-account/step-2/nominate-user-confirmation", data);
});

router.get(
  "/create-account/step-2/pre-pay/initial-payment",
  function (req, res) {
    res.render("prototype-demo/setup-account/step-2/initial-payment", {
      step: 2,
      section: "initial-payment",
    });
  }
);

router.get("/create-account/step-2/:accounttype/done", function (req, res) {
  res.render("prototype-demo/setup-account/step-2/step-2-done", {
    step: 2,
    section: req.params.accounttype,
  });
});

// step-3 in account setup start
router.get("/create-account/step-3/vehicle-register", function (req, res) {
  const {
    data
  } = req.session;
  data["step"] = 3;
  data["section"] = "vehicle-register";
  res.render("prototype-demo/setup-account/step-3/vehicle-register", data);
});
router.get("/create-account/step-3/vehicle-details", function (req, res) {
  const {
    data
  } = req.session;
  data["step"] = 3;
  data["section"] = "vehicle-details";
  data["vehicleData"] = landingData.vehicleList;
  res.render("prototype-demo/setup-account/step-3/vehicle-details", data);
});
router.get("/create-account/step-3/step-3-done", function (req, res) {
  const {
    data
  } = req.session;
  data["step"] = 3;
  data["section"] = "step-3-done";
  res.render("prototype-demo/setup-account/step-3/step-3-done", data);
});


router.get("/create-account/step-3/vehicle-upload-details", function (req, res) {
  const {
    data
  } = req.session;
  data["step"] = 3;
  data["section"] = "vehicle-upload-details";
  res.render("prototype-demo/setup-account/step-3/vehicle-upload-details", data);
});

router.get("/create-account/step-3/vehicle-upload-edit", function (req, res) {
  const {
    data
  } = req.session;
  data["step"] = 3;
  data["section"] = "vehicle-upload-edit";
  res.render("prototype-demo/setup-account/step-3/vehicle-upload-edit", data);
});

router.get("/create-account/step-3/vehicle-upload-confirm", function (req, res) {
  const {
    data
  } = req.session;
  data["step"] = 3;
  data["section"] = "vehicle-upload-confirm";
  res.render("prototype-demo/setup-account/step-3/vehicle-upload-confirm", data);
});

// step-3 in account setup end

// step-4 - account setup //
router.get("/create-account/step-4/payments", function (req, res) {
  const {
    data
  } = req.session;
  data["step"] = 4;
  res.render("prototype-demo/setup-account/step-4/payments", data);
});

router.get("/create-account/step-4/initial-deposit", function (req, res) {
  res.render("prototype-demo/setup-account/step-4/initial-deposit", {
    step: 4,
    section: "initial-deposit",
  });
});

router.get("/create-account/step-4/confirm-payment", function (req, res) {
  res.render("prototype-demo/setup-account/step-4/confirm-payment", {
    step: 4,
    section: "confirm-payment",
  });
});

router.get("/create-account/step-4/step-4-done", function (req, res) {
  const {
    data
  } = req.session;
  data["step"] = 4;
  data["section"] = "step-4-done";
  res.render("prototype-demo/setup-account/step-4/step-4-done", data);
});
// step-4 - account setup end

// Setup account end ///

// Make one off payment

router.get("/one-off-payment", function (req, res) {
  res.render("prototype-demo/one-off-payment/pay-for-crossings", {
    section: "make-one-off-payment",
  });
});

router.get("/one-off-payment/find-vehicle", function (req, res) {
  res.render("prototype-demo/one-off-payment/find-vehicle", {
    section: "find-vehicle",
  });
});

router.get("/one-off-payment/pay-crossing", function (req, res) {
  res.render("prototype-demo/one-off-payment/pay-crossing");
});

// router.post("/one-off-payment/pay-crossing", function (req, res) {
//   delete req.session.data['select-account'];
//   for (let i = 0; i < Object.keys(req.session.data).length; i++) {
//     delete req.session.data['vrm-' + (i + 1) + ''];
//   }
//   res.redirect("confirm-vehicle-details");
// });

router.post("/one-off-payment/pay-crossing", function (req, res) {
  delete req.session.data['select-account'];
  for (let i = 0; i < Object.keys(req.session.data).length; i++) {
    delete req.session.data['vrm-' + (i + 1) + ''];
  }
  res.redirect("vehicle-info");
});

router.get("/one-off-payment/confirm-vehicle-details", function (req, res) {
  res.render("prototype-demo/one-off-payment/confirm-vehicle-details", {
    section: "confirm-vehicle",
  });
});

router.post("/one-off-payment/confirm-vehicle-details", function (req, res) {
  if (req.body["vrm-1"] && req.body["vrm-2"]) {
    res.redirect("./multiple-vehicle-details");
  } else if (req.body["vrm-1"] || req.body["vrm-2"] === "") {
    res.redirect("./payment-info-single");
  }
});

router.post("/one-off-payment/confirm-vehicle-info", function (req, res) {
  if (req.body['vrm-1'] && req.body['vrm-2']) {
    res.redirect('./multiple-vehicle-details')
  } else if (req.body['vrm-1'] || req.body['vrm-2'] === '') {
    //res.redirect("/one-off-payment/payment-info-single");

    // res.redirect("/one-off-payment/vehicle-details");
    res.redirect("/one-off-payment/vehicle-info");
  }
});

router.get("/one-off-payment/vehicle-info", function (req, res) {
  const {
    data
  } = req.session;
  // const newData = {
  //   vrm: data['vrm-1'][0]
  // };
  // data["vrm-1"] = newData.vrm;
  //res.render("prototype-demo/one-off-payment/vehicle-details", data);
  res.render("prototype-demo/one-off-payment/vehicle-info", data);
});

router.get("/one-off-payment/multiple-vehicle-flow", function (req, res) {
  res.render("prototype-demo/one-off-payment/multiple-vehicle-flow", {
    section: "multiple-vehicle-flow",
  });
});

router.get("/one-off-payment/multiple-vehicle-details", function (req, res) {
  let sessionData = req.session;
  if (sessionData.data._locals) {
    delete req.session.data["_locals"];
  }
  const {
    data
  } = sessionData;

  res.render("prototype-demo/one-off-payment/multiple-vehicle-details", data);
});

router.get("/one-off-payment/bulk-upload", function (req, res) {
  res.render("prototype-demo/one-off-payment/bulk-upload/upload-vehicle");
});

router.get("/one-off-payment/upload-bulk-vehicle", function (req, res) {



  res.render("prototype-demo/one-off-payment/bulk-upload/upload-bulk-vehicle-details");
});


router.get("/one-off-payment/bulk-vehicle-confirm", function (req, res) {
  res.render("prototype-demo/one-off-payment/bulk-upload/bulk-vehicle-payment-info.html");
});

router.post("/find-vehicle", function (req, res) {
  if (req.body.vrm) {
    res.redirect("/one-off-payment/vehicle-details");
  }
});
router.get("/one-off-payment/confirm-card-payment", function (req, res) {
  res.render("prototype-demo/one-off-payment/confirm-card-payment");
});

router.get("/one-off-payment/vehicle-crossinfo", function (req, res) {
  const {
    data
  } = req.session;
  res.render("prototype-demo/one-off-payment/vehicle-flowtype", data);
});

router.get("/one-off-payment/vehicle-payinfo", function (req, res) {
  res.render("prototype-demo/one-off-payment/vehicle-forcross-future");
});

router.get("/one-off-payment/confirm-method", function (req, res) {
  // if (req.session.data['vrm-1']) {
  //   res.render("prototype-demo/one-off-payment/confirm-payment-method");
  // } else {
  //   res.render("prototype-demo/one-off-payment/bulk-upload/bulk-confirm-method");
  // }
  // console.log(req.session);
  res.render("prototype-demo/one-off-payment/confirm-payment-method");

});




router.get("/one-off-payment/vehicle-crossmade", function (req, res) {
  res.render("prototype-demo/one-off-payment/vehicle-cross-made");
});

router.get("/one-off-payment/vehicle-details", function (req, res) {
  const {
    data
  } = req.session;
  data["vehicleData"] = landingData.vehicleList;
  res.render("prototype-demo/one-off-payment/vehicle-details", data);
});

router.get("/one-off-payment/payment-info/:value", function (req, res) {
  const {
    data
  } = req.session;

  if (req.params.value == 1) data.vehicles = landingData.vehicles;
  else {
    data.vehicles = [{
      vrm: "LO61 NRO",
    }, ];
  }
  data.paymentConfirmhead = landingData.paymentConfirmhead;
  data.crossingList = landingData.crossingList;
  res.render("prototype-demo/one-off-payment/payment-info", data);
});
router.get("/one-off-payment/payment-info-confirm", function (req, res) {
  const {
    data
  } = req.session;
  res.render("prototype-demo/one-off-payment/payment-info-confirm", data);
});

router.get("/one-off-payment/payment-info-single", function (req, res) {
  const {
    data
  } = req.session;
  res.render("prototype-demo/one-off-payment/payment-info-single", data);
});

router.get("/one-off-payment/payment-info-multiple", function (req, res) {
  let sessionData = req.session;
  if (sessionData.data._locals) {
    delete req.session.data["_locals"];
  }
  const {
    data
  } = sessionData;

  res.render("prototype-demo/one-off-payment/payment-info-multiple", data);
});

router.get("/one-off-payment/pay-receipt-single", function (req, res) {
  const {
    data
  } = req.session;

  res.render("prototype-demo/one-off-payment/pay-receipt-single", data);
});

router.get("/one-off-payment/payment-options", function (req, res) {
  const {
    data
  } = req.session;
  res.render("prototype-demo/one-off-payment/payment-options", data);
});

router.get("/one-off-payment/payment", function (req, res) {
  res.render("prototype-demo/one-off-payment/crossing-payment");
});

router.get("/one-off-payment/confirm-payment", function (req, res) {
  res.render("prototype-demo/one-off-payment/confirm-payment");
});

router.get("/one-off-payment/paypal", function (req, res) {

  res.render("prototype-demo/one-off-payment/paypal");
});

router.get("/one-off-payment/bank-transfer", function (req, res) {
  res.render("prototype-demo/one-off-payment/bank-transfer");
});

router.get("/one-off-payment/success", function (req, res) {
  const {
    data
  } = req.session;
  res.render("prototype-demo/one-off-payment/success", data);
});

router.get("/one-off-payment/late-payment", function (req, res) {
  const {
    data
  } = req.session;
  res.render("prototype-demo/one-off-payment/late-payment2", data);
});

router.get("/one-off-payment/late-payment2", function (req, res) {
  res.render("prototype-demo/one-off-payment/late-payment2");
});

router.get("/one-off-payment/payment-success", function (req, res) {
  res.render("prototype-demo/one-off-payment/payment-success");
});

router.get("/one-off-payment/notification", function (req, res) {
  res.render("prototype-demo/one-off-payment/notification");
});

router.get("/one-off-payment/notification-success", function (req, res) {
  res.render("prototype-demo/one-off-payment/notification-success");
});

router.get("/one-off-payment/future-crossing-req", function (req, res) {
  res.render("prototype-demo/one-off-payment/future-crossing-reuqest");
});

router.get("/one-off-payment/payment-failure", function (req, res) {
  res.render("prototype-demo/one-off-payment/failed-payment");
});

// Make one off payment

// Make one off payment account create payment
router.get("/one-off-payment/create-account", function (req, res) {
  res.render(
    "prototype-demo/one-off-payment/create-account/email-verification"
  );
});

router.get("/one-off-payment/check-mail", function (req, res) {
  res.render("prototype-demo/one-off-payment/create-account/email-code");
});
router.get("/one-off-payment/mail-done", function (req, res) {
  res.render("prototype-demo/one-off-payment/create-account/email-done");
});
router.get("/one-off-payment/select-account", function (req, res) {
  res.render("prototype-demo/one-off-payment/create-account/account-type");
});
router.get("/one-off-payment/personal-type", function (req, res) {
  res.render("prototype-demo/one-off-payment/create-account/personal-type");
});
router.get("/one-off-payment/prerequisite", function (req, res) {
  res.render("prototype-demo/one-off-payment/create-account/prerequisite");
});
router.get("/one-off-payment/user-info", function (req, res) {
  res.render("prototype-demo/one-off-payment/create-account/info-form");
});

router.get("/one-off-payment/initial-pay", function (req, res) {
  res.render("prototype-demo/one-off-payment/create-account/initial-pay");
});
router.get("/one-off-payment/account-done", function (req, res) {
  res.render("prototype-demo/one-off-payment/create-account/account-done");
});
router.get("/one-off-payment/vehicle-confirm", function (req, res) {
  res.render("prototype-demo/one-off-payment/create-account/vehicle-confirm", {
    data: landingData.vehicleList,
  });
});
router.get("/one-off-payment/vehicle-done", function (req, res) {
  res.render("prototype-demo/one-off-payment/create-account/vehicle-done");
});
router.get("/one-off-payment/account-payment", function (req, res) {
  res.render("prototype-demo/one-off-payment/create-account/account-payment");
});
router.get("/one-off-payment/account-create-done", function (req, res) {
  res.render(
    "prototype-demo/one-off-payment/create-account/account-create-done"
  );
});

router.get("/one-off-payment/account-account-success", function (req, res) {
  res.render(
    "prototype-demo/one-off-payment/create-account/account-creation-success"
  );
});
// Make one off payment step account create payment

router.get("/under-development", function (req, res) {
  res.render("prototype-demo/under-development");
});

router.get("/login", function (req, res) {
  res.render("prototype-demo/login");
});

// Dashboaord section start

router.get("/dashboard", function (req, res) {
  res.render("prototype-demo/dashboard/dashboard-landing", {
    dashboardData,
  });
});

router.get("/dashboard/vehicles", function (req, res) {
  res.render("prototype-demo/dashboard/vehicles/vehicle-details", {
    dashboardData,
  });
});

router.get("/dashboard/vehicles/bulk-upload", function (req, res) {
  res.render("prototype-demo/dashboard/vehicles/bulk-upload-vehicle");
});

router.get("/dashboard/vehicles/apply-lrds", function (req, res) {
  res.render("prototype-demo/dashboard/vehicles/apply-lrds");
});

router.get("/dashboard/vehicles/online-submit", function (req, res) {
  res.render("prototype-demo/dashboard/vehicles/lrds-online");
});

router.get("/dashboard/vehicles/post-submit", function (req, res) {
  res.render("prototype-demo/dashboard/vehicles/lrds-post");
});

router.get("/dashboard/vehicles/success-lrds", function (req, res) {
  res.render("prototype-demo/dashboard/vehicles/success-lrds");
});

router.get("/dashboard/crossings", function (req, res) {
  res.render("prototype-demo/dashboard/crossing-details", {
    dashboardData,
  });
});

router.get("/dashboard/payments", function (req, res) {
  res.render("prototype-demo/dashboard/payment-details", {
    dashboardData,
  });
});

router.get("/dashboard/vehicles/view", function (req, res) {
  res.render("prototype-demo/dashboard/view-details", {
    dashboardData,
  });
});

router.get("/dashboard/profile", function (req, res) {
  res.render("prototype-demo/dashboard/account-update-profile", {
    dashboardData,
    section: "profile",
  });
});

router.get("/dashboard/notification", function (req, res) {
  res.render("prototype-demo/dashboard/account-notification", {
    dashboardData,
    section: "notification",
  });
});

router.get("/dashboard/set-notification", function (req, res) {
  res.render("prototype-demo/dashboard/account-set-notification", {
    dashboardData
  });
});

router.get("/dashboard/top-up", function (req, res) {
  res.render("prototype-demo/dashboard/topup/top-up");
});

router.get("/dashboard/top-up/success", function (req, res) {
  res.render("prototype-demo/dashboard/topup/topup-success");
});

router.get("/dashboard/top-up/paypal", function (req, res) {
  res.render("prototype-demo/dashboard/topup/paypal");
});

router.get("/dashboard/account/payment-method", function (req, res) {
  res.render("prototype-demo/dashboard/account/payment-method", {
    section: "payment-method",
  });
});

router.get("/dashboard/nominated-user/nominated-user-form", function (req, res) {
  res.render("prototype-demo/dashboard/nominated-user/nominated-user-form", {
    section: "nominated-user",
  });
});
router.get("/dashboard/nominated-user/nominated-user", function (req, res) {
  res.render("prototype-demo/dashboard/nominated-user/nominated-user", {
    section: "nominated-user",
  });
});
router.get("/dashboard/nominated-user/nominated-user-detail", function (req, res) {
  res.render("prototype-demo/dashboard/nominated-user/nominated-user-detail", {
    section: "nominated-user",
  });
});

router.get("/dashboard/nominated-user/nominated-mulitple-user", function (req, res) {
  res.render("prototype-demo/dashboard/nominated-user/nominated-multiple-user", {
    section: "nominated-user",
  });
});

router.get("/dashboard/nominated-user/nominated-mulitple-user-detail", function (req, res) {
  res.render("prototype-demo/dashboard/nominated-user/nominated-multiple-user-detail", {
    section: "nominated-user",
  });
});



router.get("/dashboard/account/add-new-card", function (req, res) {
  res.render("prototype-demo/dashboard/account/add-new-card");
});

router.get("/dashboard/account/save-card-success", function (req, res) {
  res.render("prototype-demo/dashboard/account/save-card-success");
});

// dashboard / add - dashboard - vehicle

router.get("/dashboard/add-dashboard-vehicle", function (req, res) {
  res.render("prototype-demo/dashboard/vehicles/add-dashboard-vehicle");
});

router.post("/dashboard/vehicle/find-vehicle", function (req, res) {
  res.redirect(
    "/prototype-demo/dashboard/vehicles/dashboard-confirm-vehicle-details"
  );
});

router.get("/dashboard/edit-vehicle", function (req, res) {
  res.render("prototype-demo/dashboard/vehicles/edit-vehicle", {
    dashboardData,
  });
});

router.get(
  "/dashboard/vehicles/dashboard-confirm-vehicle-details",
  function (req, res) {
    res.render(
      "prototype-demo/dashboard/vehicles/dashboard-confirm-vehicle-details", {
        dashboardData,
      }
    );
  }
);

router.get("/dashboard/vehicles/vehicle-success", function (req, res) {
  res.render("prototype-demo/dashboard/vehicles/vehicle-success");
});
router.get("/dashboard/reminder", function (req, res) {
  res.render("prototype-demo/dashboard/account-reminder", {
    dashboardData
  });
});

// LRDS
router.get("/lrds", function (req, res) {
  const {
    data
  } = req.session;
  res.render("prototype-demo/setup-account/step-2/personal/lrds/lrds-info", {
    step: 2,
    section: "lrds",
  });
});

router.get("/lrds/postcode", function (req, res) {
  res.render(
    "prototype-demo/setup-account/step-2/personal/lrds/lrds-postcode", {
      step: 2,
      section: "lrds",
    }
  );
});

router.get("/lrds/address", function (req, res) {
  res.render("prototype-demo/setup-account/step-2/personal/lrds/lrds-address", {
    step: 2,
    section: "lrds",
  });
});

router.get("/lrds/address-confirm", function (req, res) {
  res.render("prototype-demo/setup-account/step-2/personal/lrds/lrds-confirm", {
    step: 2,
    section: "lrds",
  });
});

router.get("/lrds/step2", function (req, res) {
  res.render(
    "prototype-demo/setup-account/step-2/personal/lrds/lrds-info-step2", {
      step: 2,
      section: "lrds",
    }
  );
});

router.get("/lrds/user-info-form", function (req, res) {
  res.render(
    "prototype-demo/setup-account/step-2/personal/lrds/user-info-form", {
      step: 2,
      section: "lrds",
    }
  );
});

router.get("/lrds/vehcile-register", function (req, res) {
  res.render(
    "prototype-demo/setup-account/step-2/personal/lrds/lrds-vehicle-register", {
      step: 3,
      section: "lrds",
    }
  );
});

router.get("/lrds/vehcile-details", function (req, res) {
  res.render(
    "prototype-demo/setup-account/step-2/personal/lrds/lrds-vehicle-details", {
      landingData,
      step: 3,
      section: "lrds",
    });
});

router.get("/lrds/lrds-summary", function (req, res) {
  res.render(
    "prototype-demo/setup-account/step-2/personal/lrds/lrds-summary", {
      step: 3,
      section: "lrds",
    }
  );
});

router.get("/lrds/lrds-payment", function (req, res) {
  res.render(
    "prototype-demo/setup-account/step-2/personal/lrds/lrds-payment", {
      step: 4,
      section: "lrds",
    }
  );
});

router.get("/lrds/lrds-success", function (req, res) {
  res.render(
    "prototype-demo/setup-account/step-2/personal/lrds/lrds-success", {
      step: 4,
      section: "lrds",
    }
  );
});


// LRDS END

//BUSINESS ACCOUNT

router.get("/create-account/step-2/biz-topup-select", function (req, res) {
  const {
    data
  } = req.session;
  res.render("prototype-demo/setup-account/step-2/business/topup-select", {
    step: 2,
  });
});



router.get("/create-account/step-2/business-account-type", function (req, res) {
  const {
    data
  } = req.session;
  res.render(
    "prototype-demo/setup-account/step-2/business/initial-payment",
    data
  );
});

router.get("/create-account/step-2/business-vehicles", function (req, res) {
  const {
    data
  } = req.session;
  
  res.render("prototype-demo/setup-account/step-2/number-of-vehicles", {
    step: 3,
  });
});

router.post("/create-account/step-2/business-vehicles", function (req, res) {
  if(req.body['no-of-vehicles']) {
    if(req.body['no-of-vehicles'] === '5') {
      res.redirect("../step-3/vehicle-register")
    } else if(req.body['no-of-vehicles'] === '10') {
      res.redirect("../../one-off-payment/bulk-upload");
    }
  }
});

router.get(
  "/create-account/step-2/business-prerequisites",
  function (req, res) {
    res.render("prototype-demo/setup-account/step-2/business/topup-select", {
      step: 2,
    });
  }
);

// Dashboaord section end

module.exports = router;