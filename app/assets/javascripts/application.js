/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll();

  $("[name='select-account']").change(function () {
    $(".account-type").prop("disabled", false);
  })

  $('#navigation li:last').addClass("welcomemenu");
  $('#navigation li:last').click(() => {
    let length = $(this).find(".submenu").length;
    if (length == 0) {
      var newDiv = $('<div class="submenu dropdown-content"><a href="/landing">Logout</a></div>');
      $('#navigation li:last').append(newDiv);
      $(this).find(".submenu").show();
    } else {
      $(this).find(".submenu").toggle();
    }
  })


  $("[name='personal-account-type']").change(function () {

    $(".prsl-acct-type").prop("disabled", false);
  })

  $("[name='initial-payment']").change(function () {

    if (this.value === "auto-topup") {

      $("#auto-topup-options").css("display", "block");
      $("#manual-topup-option").css("display", "none");

    } else if (this.value === "manual-topup") {

      $("#auto-topup-options").css("display", "none");
      $("#manual-topup-option").css("display", "block");

    }

  })


  $.fn.redirectPage = (uri) => {
    window.location.href = `/${uri}`;
  }
  
  $.fn.slideToTop = () => {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  }

  $.fn.goBack = () => {
    window.history.back();
  }

  $(".redirectLanding").click(function () {
    $.fn.redirectPage('landing');
  });

  $(".create-acct").click(function () {
    $.fn.redirectPage('create-account');
  });

  $(".send-code").click(function () {
    $.fn.redirectPage('create-account/check-code');
  });

  $(".email-verification").click(function () {
    $.fn.redirectPage('create-account/verification-confirmation');
  });

  $(".confirm-verification").click(function () {
    $.fn.redirectPage('create-account/step-2/select-account');
  });

  $(".account-type").click(function () {
    let accoutTypeVal = $("[name='select-account']:checked").val();
    if (accoutTypeVal === 'perosnal-account') {
      $.fn.redirectPage('create-account/step-2/personal-account-type');
    }

  });

  $(".prsl-acct-type").click(function () {
    let personalAccountType = $("[name='personal-account-type']:checked").val();
     
    if (personalAccountType === 'pre-pay') {
      url = 'pre-pay/prerequisites';
      $.fn.redirectPage(`create-account/step-2/${url}`);
    }
    // if (personalAccountType === 'payg') {
    //   url = 'payg/prerequisites';
    //   $.fn.redirectPage(`create-account/step-2/${url}`);
    // }


  });

  $(".prereq").click(function () {
    $.fn.redirectPage('create-account/step-2/pre-pay/user-info');
  });

  $(".user-info").click(function () {
    $.fn.redirectPage('create-account/step-2/pre-pay/initial-payment');
  });

  $(".initial-payment-next").click(function () {
    $.fn.redirectPage('create-account/step-2/pre-pay/done');
  });

  $(".payg-prereq").click(function () {
    $.fn.redirectPage('create-account/step-2/payg/done');
  });

  $(".redirectStep3").click(function () {
    $.fn.redirectPage('create-account/step-3/vehicle-register');
  });

  $(".vehicle_register").click(function () {
    $.fn.redirectPage('create-account/step-3/vehicle-register');
  });

  $(".vehicle_details").click(function () {
    $.fn.redirectPage('create-account/step-3/vehicle-details');
  });

  $(".add_vehicle").click(function () {
    $.fn.redirectPage('create-account/step-3/step-3-done');
  });

  $(".payments").click(function () {
    $.fn.redirectPage('create-account/step-4/payments');
  });
 
  $(".confrim-payment").click(function () {
    $.fn.redirectPage('create-account/step-4/confirm-payment');
  });

  $(".payment_done").click(function () {
    $.fn.redirectPage('create-account/step-4/step-4-done');
  });

  $(".govuk-back-link").click(function () {
    $.fn.goBack();
  });

  $("#login-btn").click(function () {
    $.fn.redirectPage('login');
  });

  $(".todashboard").click(function () {
    $.fn.redirectPage('dashboard');
  });

  $("[name='selectlink']").change(() => {
    $(".landingNxtBtn").prop("disabled", false);
  })

  $(".landingNxtBtn").click(() => {
    let radioVal = $("[name='selectlink']:checked").val();

    if (radioVal === 'pcn') {

      document.location.href = "https://dartford-crossing-charge.herokuapp.com/demo/flow1";

    } else if (radioVal === 'create-account') {

      $.fn.redirectPage('create-account');

    }else if(radioVal === 'make-oneoff-payment') {

      $.fn.redirectPage('one-off-payment/vehicle-payinfo');

    }

  });


  $("#login-submit").on("submit", function (e) {
    e.preventDefault();
    console.log("working");
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (username == "" || username == null) {
      document.getElementById("user-name-error").innerHTML = "Username is required";
    }
    if (password == "" || password == null) {
      document.getElementById("password-error").innerHTML = "Password is required";
    }
  });


})

// One Off Payment

$(".pay-for-crossings").click(function () {
  let makePayment = $("[name='crossingsPayment']:checked").val();
  if (makePayment === 'yes') {
    $.fn.redirectPage('one-off-payment/find-vehicle');
  }else if (makePayment === 'no') {
    $.fn.redirectPage('one-off-payment/late-payment');
  }
});

$("[name='changed-name']").change(() => {
  $(".find-vehicle").prop("disabled", false);
})

$("[name='vrm']").click(() => {
  $("[name='vrm']").val('LO62 NRO');
})
// FIND VEHICLE
$("[name='payment']").change(() => {
  $(".payment-madecross").prop("disabled", false);
  $(".warning_payment").css("font-style", "Italic")
})
$(".payment-madecross").click(function () {
  let makePayment = $("[name='payment']:checked").val();
  if (makePayment === 'pay') {
    $.fn.redirectPage('one-off-payment/vehicle-details');
  }else if (makePayment === 'penalty') {
    document.location.href = "https://dartford-crossing-charge.herokuapp.com/demo/flow1";
  }
});
$(".find-vehicle").click(() => {
  let inputVal = $("[name='vrm']").val();
  if(inputVal === 'LO62 NRO') {
    // $.fn.redirectPage('one-off-payment/vehicle-details');
    $.fn.redirectPage('one-off-payment/late-payment2');

  }else {
    $("#vrm-error").css("display", "block");
    $("#vrm").parent().addClass("govuk-form-group--error");
    $("#vrm").addClass("govuk-input--error");
    $(".error-summary").css("display", "block");
    $.fn.slideToTop();
  }
})

$("[name='email']").click(() => {
  $("[name='email']").val('johndoe@gmail.com');
  $("[name='confirm-email']").val('johndoe@gmail.com');
})

$(".proceed-to-pay").click(() => {
  let inputVal = $("[name='email']").val();
  if(inputVal === 'johndoe@gmail.com') {
    $.fn.redirectPage('one-off-payment/payment-options');
  }else {
    $(".email-error").css("display", "block");
    $(".email-address").parent().addClass("govuk-form-group--error");
    $(".email-address").addClass("govuk-input--error");
    $(".error-summary").css("display", "block");
    $.fn.slideToTop();
  }
})

$("[name='option-payment']").change(() => {
  $(".paymentoptionBtn").prop("disabled", false);
})

$(".paymentoptionBtn").click(() => {
  let radioVal = $("[name='option-payment']:checked").val();

  if (radioVal === 'card-payment') {

    $.fn.redirectPage('one-off-payment/payment');

  } else if (radioVal === 'paypal') {

    $.fn.redirectPage('one-off-payment/paypal');

  }

});


$("[name='vehilce-crossinfo']").change(() => {
  $(".vehicle-flowtype").prop("disabled", false);
})

$(".vehicle-flowtype").click(() => {
  let radioVal = $("[name='vehilce-crossinfo']:checked").val();

  if (radioVal === 'resolve-penalty') {

    $.fn.redirectPage('one-off-payment/late-payment');

  } else if (radioVal === 'pay-crossing') {

    $.fn.redirectPage('one-off-payment/vehicle-payinfo');

  }

});


$("[name='pay-crossinfo']").change(() => {
  $(".vehicle-crossing").prop("disabled", false);
})

$(".vehicle-crossing").click(() => {
  let radioVal = $("[name='pay-crossinfo']:checked").val();

  if (radioVal === 'pay-mcrossing') {

    $.fn.redirectPage('one-off-payment/vehicle-crossmade');

  } else if (radioVal === 'pay-fcrossing') {

    $.fn.redirectPage('one-off-payment/find-vehicle');

  }

});



$("[name='pay-madecross']").change(() => {
  $(".vehicle-madecross").prop("disabled", false);
})

$(".vehicle-madecross").click(() => {
  let radioVal = $("[name='pay-madecross']:checked").val();

  if (radioVal === 'yes') {

    $.fn.redirectPage('one-off-payment/find-vehicle');

  } else if (radioVal === 'no') {

    $.fn.redirectPage('one-off-payment/late-payment');

  }

});


$(".successNxt").click(function () {
  let SuccessNext = $("[name='successnextoption']:checked").val();
  if (SuccessNext === 'create-account') {
     $.fn.redirectPage('one-off-payment/create-account');
  }else if (SuccessNext === 'vrm-notifi') {
    $.fn.redirectPage('one-off-payment/notification');
  }else if (SuccessNext === 'finish') {
    $.fn.redirectPage('home');
  }
});



//Make one off payment create account

$("[name='select-account']").change(function () {
  $(".oneoff-account-type").prop("disabled", false);
})
$(".oneoff-account-type").click(function () {
  let accoutTypeVal = $("[name='select-account']:checked").val();
  if (accoutTypeVal === 'perosnal-account') {
    $.fn.redirectPage('one-off-payment/personal-type');
  }
});

$("[name='personal-account-type']").change(function () {
  $(".oneoff-prsl-acct-type").prop("disabled", false);
})
$(".oneoff-prsl-acct-type").click(function () {
  let personalAccountType = $("[name='personal-account-type']:checked").val();   
  if (personalAccountType === 'pre-pay') {
    url = 'prerequisite';
    $.fn.redirectPage(`one-off-payment/${url}`);
  }
});


$("[name='option-payment']").change(() => {
  $(".accountpaymentoptionBtn").prop("disabled", false);
})

$(".accountpaymentoptionBtn").click(() => {
  let radioVal = $("[name='option-payment']:checked").val();

  if (radioVal === 'card-payment') {

    // $.fn.redirectPage('one-off-payment/payment');

  } else if (radioVal === 'paypal') {

    $.fn.redirectPage('one-off-payment/account-create-done');

  }

});

// One off payment's payment page validation

$("[name='card-number']").click(()=> {
  $("[name='name-on-card']").val('John Doe');
  $("[name='card-number']").val('7653265926348576');
  $("[name='month']").val('12');
  $("[name='year']").val('21');
  $("[name='cvv']").val('212');

})
$(".confirm-payment-btn").click( () => {
  if ($("[name='card-number']").val() === "" || $("[name='name-on-card']").val() === "") {
    $(".card-number-error").css("display", "block");
    $("#card-number").parent().addClass("govuk-form-group--error");

    $(".card-name-error").css("display", "block");
    $("#name-on-card").parent().addClass("govuk-form-group--error");
    $(".error-summary").css("display", "block");
    $.fn.slideToTop();
    return;
  }
  $.fn.redirectPage('one-off-payment/confirm-payment')
})

// One off payment's payment page validation