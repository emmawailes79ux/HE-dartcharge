/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info("GOV.UK Prototype Kit - do not use for production");
}

window.version = 'v1.4';
window.setupAccountVersion = 'v1.1';
window.vehicleManagementVer= 'v1.1';
$(document).ready(function () {
  version = window.location.pathname.split("/")[2] || version;
  vehicleManagementVer = window.location.pathname.split("/")[3] || vehicleManagementVer;


  window.GOVUKFrontend.initAll();

  $("[name='select-account']").change(function () {
    $(".account-type").prop("disabled", false);
  });

  $("#navigation li:last").addClass("app-!-welcomemenu");

  $("[name='personal-account-type']").change(function () {
    $(".prsl-acct-type").prop("disabled", false);
  });

  $("[name='initial-payment']").change(function () {
    if (this.value === "auto-topup") {
      $("#auto-topup-options").css("display", "block");
      $("#manual-topup-option").css("display", "none");
    } else if (this.value === "manual-topup") {
      $("#auto-topup-options").css("display", "none");
      $("#manual-topup-option").css("display", "block");
    }
  });

  $.fn.redirectPage = (uri) => {
    window.location.href = `/${uri}`;
  };

  // Get the version from the url for navigation 
  
  
  $.fn.slideToTop = () => {
    $("html, body").animate({
      scrollTop: 0
    }, "slow");
  };

  //$.fn.goBack = (event) => {
    //window.history.back();
    //event.preventDefault();
  //};

  $.fn.goBack = () => {
    history.go(-1); event.preventDefault();
  }; 

  $(".redirectLanding").click(function () {
    $.fn.redirectPage("landing");
  });

  $(".create-acct").click(function () {
    $.fn.redirectPage(`create-account/${setupAccountVersion}`);
  });

  $(".email-verification").click(function () {
    $.fn.redirectPage(`create-account/${setupAccountVersion}/step-2/select-account`);
  });

  $(".confirm-verification").click(function () {
    $.fn.redirectPage(`create-account/${setupAccountVersion}/step-2/select-account`);
  });


  // $(".prsl-acct-type").click(function () {
  //   let personalAccountType = $("[name='personal-account-type']:checked").val();

  //   if (personalAccountType === "pre-pay") {
  //     url = "pre-pay/prerequisites";
  //     $.fn.redirectPage(`create-account/${setupAccountVersion}/step-2/${url}`);
  //   }

  //   if (personalAccountType === "lrds") {
  //     url = "lrds";
  //     $.fn.redirectPage(`${url}`);
  //   }

  //   // if (personalAccountType === 'payg') {
  //   //   url = 'payg/prerequisites';
  //   //   $.fn.redirectPage(`create-account/${setupAccountVersion}/step-2/${url}`);
  //   // }
  // });




  $(".prereq").click(function () {
    $.fn.redirectPage(`create-account/${setupAccountVersion}/step-2/pre-pay/user-info`);
  });

  $(".user-info").click(function () {
    $.fn.redirectPage(`create-account/${setupAccountVersion}/step-2/pre-pay/initial-payment`);
  });

  $(".initial-payment-next").click(function () {
    $.fn.redirectPage(`create-account/${setupAccountVersion}/step-2/pre-pay/done`);
  });

  $(".payg-prereq").click(function () {
    $.fn.redirectPage(`create-account/${setupAccountVersion}/step-2/payg/done`);
  });

  $(".redirectStep3").click(function () {
    $.fn.redirectPage(`create-account/${setupAccountVersion}/step-3/vehicle-register`);
  });

  $(".vehicle_register").click(function () {
    $.fn.redirectPage(`create-account/${setupAccountVersion}/step-3/vehicle-register`);
  });

  $(".vehicle_details").click(function () {
    $.fn.redirectPage(`create-account/${setupAccountVersion}/step-3/vehicle-details`);
  });

  $(".add_vehicle").click(function () {
    $.fn.redirectPage(`create-account/${setupAccountVersion}/step-3/step-3-done`);
  });

  $(".payments").click(function () {
    $.fn.redirectPage(`create-account/${setupAccountVersion}/step-4/payments`);
  });

  $(".confrim-payment").click(function () {
    $.fn.redirectPage(`create-account/${setupAccountVersion}/step-4/confirm-payment`);
  });

  $(".payment_done").click(function () {
    $.fn.redirectPage(`create-account/${setupAccountVersion}/step-4/step-4-done`);
  });

  $(".govuk-back-link").click(function () {
    $.fn.goBack();
  });



  $("[name='lrds-submit-type']").change(function () {
    $(".lrds-submit-type").prop("disabled", false);
  });


  $(".lrds-submit-type").click(function () {
    let personalAccountType = $("[name='lrds-submit-type']:checked").val();
    if (personalAccountType === "lrds-online") {
      url = "online-submit";
      $.fn.redirectPage(`dashboard/vehicles/${vehicleManagementVer}/${url}`);
    }
    if (personalAccountType === "lrds-post") {
      url = "post-submit";
      $.fn.redirectPage(`dashboard/vehicles/${vehicleManagementVer}/${url}`);
    }
  });




  $("#login-btn").click(function () {
    $.fn.redirectPage("login");
  });

  $(".todashboard").click(function () {
    $.fn.redirectPage("dashboard");
  });

  $(".touploaddoc").click(function () {
    $.fn.redirectPage(`dashboard/vehicles/v1.2/apply-lrds`);
  });

  $(".business-vehicles").click(function () {
    $.fn.redirectPage(`create-account/${setupAccountVersion}/step-2/business-vehicles`);
  })


  $(".lrds-postcode").click(function () {
    $.fn.redirectPage(`lrds/${version}/postcode`);
  });

  $(".lrds-address").click(function () {
    $.fn.redirectPage(`lrds/${version}/address`);
  });

  $(".lrds-address-confirm").click(function () {
    $.fn.redirectPage(`lrds/${version}/address-confirm`);
  });

  $(".lrds-step2").click(function () {
    $.fn.redirectPage(`lrds/${version}/step2`);
  });

  $(".lrds-info-form").click(function () {
    $.fn.redirectPage(`lrds/${version}/user-info-form`);
  });

  $(".lrds-vehicle-register").click(function () {
    $.fn.redirectPage(`lrds/${version}/vehicle-register`);
  });

  $(".lrds-vehicle-details").click(function () {
    $.fn.redirectPage(`lrds/${version}/vehicle-details`);
  });

  $(".lrds-summary").click(function () {
    $.fn.redirectPage(`lrds/${version}/lrds-summary`);
  });

  $(".lrds-payment").click(function () {
    $.fn.redirectPage(`lrds/${version}/lrds-payment`);
  });

  $(".lrds-success").click(function () {
    $.fn.redirectPage(`lrds/${version}/lrds-success`);
  });


  $(".create-account-bulk-vehicle").click(function () {
    $.fn.redirectPage(`create-account/${setupAccountVersion}/step-3/vehicle-upload-details`);
  });

  $(".create-account-edit-vehicle").click(function () {
    $.fn.redirectPage(`create-account/${setupAccountVersion}/step-3/vehicle-upload-edit`);
  });

  $(".create-account-upload-confirm").click(function () {
    $.fn.redirectPage(`create-account/${setupAccountVersion}/step-3/vehicle-upload-confirm`);
  });
  



  // $(".multiple-vehicle").click(function () {
  //   $.fn.redirectPage("one-off-payment/${version}/payment-info/1");
  // });

  $(".multiple-vehicle").click(function () {
    $.fn.redirectPage(`one-off-payment/${version}/payment-info`);
  });

  //*********** LRDS *************//
  $(".lrds-info-next").click(function () {
    $.fn.redirectPage(`create-account/${setupAccountVersion}/lrds/lrds-info-step2`);
  });
  //************ /.LRDS ************//

  $(".landingNxtBtn").click(() => {
    
    let radioVal = $("[name='selectlink']:checked").val();

    if (radioVal === "pcn") {
      //document.location.href =
        //"https://dartford-crossing-charge.herokuapp.com/demo/flow1";
        $.fn.redirectPage(`resolve-pcn/${version}/flow1`);
    } else if (radioVal === "create-account") {

      $.fn.redirectPage(`create-account/${setupAccountVersion}`);

    } else if (radioVal === "make-oneoff-payment") {
      // $.fn.redirectPage("one-off-payment/${version}/find-vehicle");
      //$.fn.redirectPage("one-off-payment/${version}/confirm-vehicle-details");
      //$.fn.redirectPage(`one-off-payment/${version}/pay-crossing`);
      $.fn.redirectPage(`one-off-payment/v1.4a/pay-crossing`);

    } else if (radioVal === "login") {

      $.fn.redirectPage("login");

    }
  });

  $(".continue").click(() => {
    $.fn.redirectPage(`one-off-payment/${version}/confirm-vehicle-details`);
  })

  $("[name='vehicle-flow-type']").change(() => {
    $(".vehicle-flow").prop("disabled", false);
  });

  $(".vehicle-flow").click(() => {
    let radioVal = $("[name='vehicle-flow-type']:checked").val();
    console.log(radioVal);
    if (radioVal === "single") {
      $.fn.redirectPage(`one-off-payment/${version}/find-vehicle`);
    } else if (radioVal === "multiple") {
      $.fn.redirectPage(`one-off-payment/${version}/confirm-vehicle-details`);
    }
  });



  $("#login-submit").on("submit", function (e) {
    e.preventDefault();
    console.log("working");
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (username == "" || username == null) {
      document.getElementById("user-name-error").innerHTML =
        "Username is required";
    }
    if (password == "" || password == null) {
      document.getElementById("password-error").innerHTML =
        "Password is required";
    }
  });
});

// One Off Payment

$(".pay-for-crossings").click(function () {
  let makePayment = $("[name='crossingsPayment']:checked").val();
  if (makePayment === "yes") {
    $.fn.redirectPage(`one-off-payment/${version}/find-vehicle`);
  } else if (makePayment === "no") {
    $.fn.redirectPage(`one-off-payment/${version}/late-payment`);
  }
});

$("[name='changed-name']").change(() => {
  $(".find-vehicle").prop("disabled", false);
});

$("[name='vrm']").click(() => {
  $("[name='vrm']").val("LO62 NRO");
});
// FIND VEHICLE

$("[name='payment']").change(() => {
  $(".payment-madecross").prop("disabled", false);
});

$(".payment-madecross").click(function () {
  let makePayment = $("[name='payment']:checked").val();
  if (makePayment === "pay") {
    $.fn.redirectPage(`one-off-payment/${version}/payment-info-single`);
  } else if (makePayment === "penalty") {
    document.location.href =
      "https://dartford-crossing-charge.herokuapp.com/demo/flow1";
  }
});
$(".find-vehicle").click(() => {
  let inputVal = $("[name='vrm']").val();
  if (inputVal === "LO62 NRO") {
    // $.fn.redirectPage('one-off-payment/vehicle-details');
    $.fn.redirectPage(`one-off-payment/${version}/late-payment2`);
  } else {
    $("#vrm-error").css("display", "block");
    $("#vrm").parent().addClass("govuk-form-group--error");
    $("#vrm").addClass("govuk-input--error");
    $(".error-summary").css("display", "block");
    $.fn.slideToTop();
  }
});

$("[name='email']").click(() => {
  $("[name='email']").val("johndoe@gmail.com");
  $("[name='confirm-email']").val("johndoe@gmail.com");
});

$(".proceed-to-pay").click(() => {
  
  let inputVal = $("[name='email']").val();
  if (inputVal === "johndoe@gmail.com") {
    $.fn.redirectPage(`one-off-payment/${version}/payment-options`);
  } else {
    $(".email-error").css("display", "block");
    $(".email-address").parent().addClass("govuk-form-group--error");
    $(".email-address").addClass("govuk-input--error");
    $(".error-summary").css("display", "block");
    $.fn.slideToTop();
  }
});
$(".proceed-to-pay-continue").click(() => {
  $.fn.redirectPage(`one-off-payment/${version}/payment-info-confirm`);

});
$(".nominate-contact").click(() => {
  $.fn.redirectPage("dashboard/nominated-user/nominated-user-form");

});
$(".nominated-user-form").click(() => {
  $.fn.redirectPage("dashboard/nominated-user/nominated-user-detail");

});
$("[name='option-payment']").change(() => {
  $(".paymentoptionBtn").prop("disabled", false);
});

$(".paymentoptionBtn").click(() => {
  let radioVal = $("[name='option-payment']:checked").val();

  // if (radioVal === "card-payment") {
  //   $.fn.redirectPage("one-off-payment/${version}/payment");
  // } else if (radioVal === "paypal") {
  //   $.fn.redirectPage("one-off-payment/${version}/paypal");
  // } else {
  //   $.fn.redirectPage("one-off-payment/${version}/bank-transfer");
  // }
  $.fn.redirectPage(`one-off-payment/${version}/confirm-method`);
});

$(".pay-now").click(() => {
  $.fn.redirectPage(`one-off-payment/${version}/paypal`);
})

$("[name='vehilce-crossinfo']").change(() => {
  $(".vehicle-flowtype").prop("disabled", false);
});

$(".vehicle-flowtype").click(() => {
  let radioVal = $("[name='vehilce-crossinfo']:checked").val();

  if (radioVal === "resolve-penalty") {
    $.fn.redirectPage(`one-off-payment/${version}/late-payment`);
  } else if (radioVal === "pay-crossing") {
    $.fn.redirectPage(`one-off-payment/${version}/vehicle-payinfo`);
  }
});

$("[name='pay-crossinfo']").change(() => {
  $(".vehicle-crossing").prop("disabled", false);
});

$(".vehicle-crossing").click(() => {
  let radioVal = $("[name='pay-crossinfo']:checked").val();

  if (radioVal === "pay-mcrossing") {
    $.fn.redirectPage(`one-off-payment/${version}/vehicle-crossmade`);
  } else if (radioVal === "pay-fcrossing") {
    $.fn.redirectPage(`one-off-payment/${version}/find-vehicle`);
  }
});

$("[name='pay-madecross']").change(() => {
  $(".vehicle-madecross").prop("disabled", false);
});

$(".vehicle-madecross").click(() => {
  let radioVal = $("[name='pay-madecross']:checked").val();

  if (radioVal === "yes") {
    $.fn.redirectPage(`one-off-payment/${version}/find-vehicle`);
  } else if (radioVal === "no") {
    $.fn.redirectPage(`one-off-payment/${version}/late-payment`);
  }
});

$(".successNxt").click(function () {
  let SuccessNext = $("[name='successnextoption']:checked").val();
  if (SuccessNext === "create-account") {
    $.fn.redirectPage(`one-off-payment/${version}/create-account`);
  } else if (SuccessNext === "vrm-notifi") {
    $.fn.redirectPage(`one-off-payment/${version}/notification`);
  } else if (SuccessNext === "oneoff-pay") {
    $.fn.redirectPage(`one-off-payment/${version}/pay-crossing`);
  }
});

//Make one off payment create account

$("[name='select-account']").change(function () {
  $(".oneoff-account-type").prop("disabled", false);
  let val = $(this).val();
  $("#" + val + "-hint").css("display", "block");
  console.log(val);
  if (val === 'perosnal-account') {
    $("#business-account-hint").css("display", "none");
    $("#personal-account-hint").css("display", "block");
  } else if (val === 'business-account') {
    $("#personal-account-hint").css("display", "none");
    $("#business-account-hint").css("display", "block");
  }
});

$(".account-type").click(function () {
  $(this.form.submit());
});

$(".oneoff-account-type").click(function () {
  let accoutTypeVal = $("[name='select-account']:checked").val();
  if (accoutTypeVal === "perosnal-account") {
    $.fn.redirectPage(`one-off-payment/${version}/personal-type`);
  }
});

$("[name='personal-account-type']").change(function () {
  $(".oneoff-prsl-acct-type").prop("disabled", false);
});
$(".oneoff-prsl-acct-type").click(function () {
  let personalAccountType = $("[name='personal-account-type']:checked").val();
  if (personalAccountType === "pre-pay") {
    url = "prerequisite";
    $.fn.redirectPage(`one-off-payment/${url}`);
  }
});

$(".accountpaymentoptionBtn").click(() => {
  let radioVal = $("[name='option-payment']:checked").val();

  if (radioVal === "card-payment") {
    $.fn.redirectPage(`one-off-payment/${version}/account-account-success`);
  } else if (radioVal === "paypal") {
    $.fn.redirectPage(`one-off-payment/${version}/account-create-done`);
  } else {
    $.fn.redirectPage(`one-off-payment/${version}/account-create-done`);
  }
});

// One off payment's payment page validation

$("[name='card-number']").click(() => {
  $("[name='name-on-card']").val("John Doe");
  $("[name='card-number']").val("John Doe");
  $("[name='account-number']").val("12345678");
  $("[name='month']").val("12");
  $("[name='year']").val("21");
  $("[name='cvv']").val("212343");
});
$(".confirm-payment-btn").click(() => {
  if (
    $("[name='card-number']").val() === "" ||
    $("[name='name-on-card']").val() === ""
  ) {
    $(".card-number-error").css("display", "block");
    $("#card-number").parent().addClass("govuk-form-group--error");

    $(".card-name-error").css("display", "block");
    $("#name-on-card").parent().addClass("govuk-form-group--error");
    $(".error-summary").css("display", "block");
    $.fn.slideToTop();
    return;
  }
  $.fn.redirectPage(`one-off-payment/${version}/payment-failure`);
});

// One off payment's payment page validation

//muliple vehicle flow

$(".find-vehicle-multiple-flow").click(() => {
  
  if ($("[name='vrm-1']").val() === '') {
    
    $(".vrm-error").css("display", "block");
    $(".error-summary").css("display", "block");
    return false;
  }
  $.fn.redirectPage(`one-off-payment/${version}/upload-edit-vehicles`);

  // $(this.form.submit());
})

$(".add-vehicle-multiple-flow").click(() => {
  var rowlength = $('#mytable tbody>tr').length;
  var newHead = '<tr class="govuk-table__row">' +
    '<th scope="col" class="govuk-table__header">Vehicle registration number</th>' +
    '<th scope="col" class="govuk-table__header">Country of registration</th>' +
    '<th scope="col" class="govuk-table__header">Action</th>' +
    '<tr>';
  var newRow = '<tr class="govuk-table__row">' +
    '<td scope="row" class="govuk-table__header">' +
    '<div class="govuk-form-group govuk-!-margin-bottom-0"> <input class="govuk-input govuk-input--width-20" name="' + 'vrm-' + (parseInt(rowlength) + 1) + '" type="text"></div></td>' +
    '<td class="govuk-table__cell">' +
    '<div class="govuk-radios govuk-radios--inline">' +
    '<div class="govuk-radios__item govuk-!-margin-bottom-0">' +
    '<input class="govuk-radios__input" id="changed-name" name="' + 'vrm-' + (parseInt(rowlength) + 1) + '" type="radio" value="UK" checked>' +
    '<label class="govuk-label govuk-radios__label govuk-!-padding-right-0 govuk-!-padding-left-1" for="changed-name"> UK</label>' +
    '</div>' +
    '<div class="govuk-radios govuk-radios--inline ">' +
    '<div class="govuk-radios__item govuk-!-margin-right-0">' +
    '<input class="govuk-radios__input" id="changed-name" name="' + 'vrm-' + (parseInt(rowlength) + 1) + '" type="radio" value="Non-UK" >' +
    '<label class="govuk-label govuk-radios__label govuk-!-padding-right-0 govuk-!-padding-left-1" for="changed-name"> Non-UK</label>' +
    '</div>' +
    '</td>' +
    '<td class="govuk-table__cell govuk-!-padding-top-3"><a href="javascript:void(0)" id="remove">Remove</a></td>' + '</tr>'

  if (rowlength == 1) {
    $('#mytable thead>tr').remove();
    $('#mytable thead').append(newHead);
  }
  $('#table tbody tr:last').clone().insertAfter('#table tbody tr:last');
  $('#mytable tbody>tr').last().after(newRow);

});
//remove
$(document).on('click', '#remove', function () {
  var rowlength = $('#mytable tbody>tr').length;
  if (rowlength == 2) {
    var newHead = '<tr class="govuk-table__row">' +
      '<th scope="col" class="govuk-table__header">Registration number</th>' +
      '<th scope="col" class="govuk-table__header">Country of registration</th>' +
      '<tr>';
    $('#mytable thead>tr').remove();
    $('#mytable thead').append(newHead);
  }
  $(this).closest('tr').remove();
  return false;
});



$(".create-flow-add-vehicle").click(() => {

  var name = $("#vehicle-table thead>tr>th").first().text();

  var rowlength = $('#vehicle-table tbody>tr').length;
  var newHead = '<tr class="govuk-table__row">' +
    '<th scope="col" class="govuk-table__header">' + name + '</th>' +
    '<th scope="col" class="govuk-table__header">Country of registration</th>' +
    '<th scope="col" class="govuk-table__header">Action</th>' +
    '<tr>';
  var newRow = '<tr class="govuk-table__row">' +
    '<td scope="row" class="govuk-table__header">' +
    '<div class="govuk-form-group govuk-!-margin-bottom-0"> <input class="govuk-input govuk-input--width-20" name="' + 'vrm-' + (parseInt(rowlength) + 1) + '" type="text"></div></td>' +
    '<td class="govuk-table__cell">' +
    '<div class="govuk-radios govuk-radios--inline">' +
    '<div class="govuk-radios__item govuk-!-margin-bottom-0">' +
    '<input class="govuk-radios__input" id="changed-name" name="' + 'vrm-' + (parseInt(rowlength) + 1) + '" type="radio" value="UK" checked>' +
    '<label class="govuk-label govuk-radios__label govuk-!-padding-right-0 govuk-!-padding-left-1" for="changed-name"> UK</label>' +
    '</div>' +
    '<div class="govuk-radios govuk-radios--inline ">' +
    '<div class="govuk-radios__item govuk-!-margin-right-0">' +
    '<input class="govuk-radios__input" id="changed-name" name="' + 'vrm-' + (parseInt(rowlength) + 1) + '" type="radio" value="Non-UK" >' +
    '<label class="govuk-label govuk-radios__label govuk-!-padding-right-0 govuk-!-padding-left-1" for="changed-name"> Non-UK</label>' +
    '</div>' +
    '</td>' +
    '<td class="govuk-table__cell govuk-!-padding-top-3"><a href="javascript:void(0)" id="remove">Remove</a></td>' + '</tr>'

  if (rowlength == 1) {
    $('#vehicle-table thead>tr').remove();
    $('#vehicle-table thead').append(newHead);
  }
  // $('#vehicle-table tbody tr:last').clone().insertAfter('#vehicle-table tbody tr:last');
  $('#vehicle-table tbody>tr').last().after(newRow);


});


$(document).on('click', '#remove-contacts', function () {
  var name = $(this).parent('div').parent('div').find('p').first().text();
  var newtext = '<div class="govuk-warning-text govuk-!-margin-bottom-2">' +
    '<span class="govuk-warning-text__icon" aria-hidden="true">!</span>' +
    '<strong class="govuk-warning-text__text">' +
    '<span class="govuk-warning-text__assistive">Warning</span>' +
    '<p class="govuk-body"><strong>Do you want to remove ' + name + ' as a nominated contact?</strong></p>' +
    '</strong></div>' +
    '<div class="govuk-button-group">' +
    ' <button class="govuk-button govuk-button--warning" id="remove-card" data-module="govuk-button">Remove</button>' +
    '<button class="govuk-button govuk-button--secondary" id="cancel-card" data-module="govuk-button">cancel</button></div>'


  $(this).parent('div').hide();
  $(this).parent('div').after(newtext);
});

$(document).on('click', '#remove-card', function () {
  $(this).parent('div').parent('div').remove();
});

$(document).on('click', '#cancel-card', function () {
  console.log('working');
  console.log($(this).parent('div').html())
  $(this).parent('div').hide();
  $(this).parent('div').prev('div').hide();
  $(this).parent('div').prev('div').prev('div').show();
});


$('.future-crossing').click(() => {
  $("#future-test >tbody").find('.future-new').show();
  $("#future-test >tbody").find('#future-old').hide();

})

$(document).on('click', '#remove-create-flow', function () {
  $(this).parent('div').parent('div').parent('div').remove();
  return false;
});



$('#select-all').click(function () {
  if (this.checked) {
    $(".govuk-checkboxes__input").each(function () {
      $(".govuk-checkboxes__input").prop('checked', true);
    })
  } else {
    $(".govuk-checkboxes__input").each(function () {
      $(".govuk-checkboxes__input").prop('checked', false);
    })
  }
});

$("[name='trips-future-crossing']").change((e) => {
  let val = (e.target.value * 2.5).toFixed(2);
  $("#future-amt").text("£" + val);
  let tripAmt = $("#trip-amt").length ? $("#trip-amt").html().split("£")[1] : 0;
  $("#amount").val((parseFloat(val) + parseFloat(tripAmt)).toFixed(2));
})

$("[name='trips']").change((e) => {
  let val = (e.target.value * 2.5).toFixed(2);
  $("#trip-amt").text("£" + val);
  let futureAmt = $("#future-amt").length > 0 ? $("#future-amt").html().split("£")[1] : 0;
  $("#amount").val((parseFloat(val) + parseFloat(futureAmt)).toFixed(2));
})

// On click of Add button add select box for future crossing
$("#add-future-crossing").click(function () {
  $(this).css("display", "none");
  $("#future-crossing-selectbox").css("display", "block");
  $("#amt").css("display", "block");
})

$(".add-dashboard-vehicle").click(() => {
  $.fn.redirectPage(`dashboard/vehicles/${vehicleManagementVer}/add-dashboard-vehicle`);
 
  
});
$(".vehicle-change").click(() => {
  $.fn.redirectPage(`dashboard/vehicles/${vehicleManagementVer}/edit-vehicle`);
});
$(".vehicle-confirm").click(() => {
  $.fn.redirectPage(`dashboard/vehicles/${vehicleManagementVer}/vehicle-success`);
});

$(".vehicle-success").click(() => {
  $.fn.redirectPage(`dashboard/vehicles/${vehicleManagementVer}`);
})

$(".add-vehicle-cancel").click(() => {
  $.fn.redirectPage(`dashboard/vehicles/${vehicleManagementVer}/vehicle-cancel`);
})
$(".edit-vehicle-confirm").click(() => {
  $.fn.redirectPage(`dashboard/vehicles/${vehicleManagementVer}/dashboard-confirm-vehicle-details`);
})
$(".add-future-crossings-row").click(() => {
  let newRow = ' <tr class="govuk-table__row">' +
    '<td scope="row" class="govuk-table__header govuk-!-padding-top-3">Future crossings</td>' +
    '<td class="govuk-table__cell">' +
    '<div class="govuk-form-group select-box govuk-!-margin-bottom-0">' +
    '<label class="govuk-label govuk-!-margin-bottom-0" for="trips">' +
    '<select class="govuk-select govuk-!-margin-right-2 " id="sort" name="trips">' +
    '<option value="1" selected>1</option>' +
    '<option value="2">2</option>' +
    '<option value="3">3</option>' +
    '<option value="4">4</option>' +
    ' </select></label></div>' + '</td>' +
    '<td id="trip-amt" class="govuk-table__cell govuk-!-padding-top-3">£2.50</td>' + '</tr>'
  $(".payment-table tbody>tr").last().after(newRow);
  $('.add-future-crossings-row').hide();
});

$(".dashboard-add-vehicle").click(() => {
  // var newRow = ' <div class="govuk-form-group ">' +
  //   '<input class="govuk-input govuk-input--width-10" id="vrm" name="vrm" type="text" />' +
  //   '<a href="#" class="govuk-!-margin-left-2 remove-vehicle">Remove</a>'
  // $(".dashboard-vehicle-form").before(newRow);
  var rowlength = $('#mytable tbody>tr').length;
  var newHead = '<tr class="govuk-table__row">' +
    '<th scope="col" class="govuk-table__header">Registration number</th>' +
    '<th scope="col" class="govuk-table__header">Country of registration</th>' +
    '<th scope="col" class="govuk-table__header">Action</th>' +
    '<tr>';
  var newRow = '<tr class="govuk-table__row">' +
    '<td scope="row" class="govuk-table__header">' +
    '<div class="govuk-form-group govuk-!-margin-bottom-0"> <input class="govuk-input govuk-input--width-10" name="' + 'vrm-' + (parseInt(rowlength) + 1) + '" type="text"></div></td>' +
    '<td class="govuk-table__cell">' +
    '<div class="govuk-radios govuk-radios--inline">' +
    '<div class="govuk-radios__item govuk-!-margin-bottom-0">' +
    '<input class="govuk-radios__input" id="changed-name" name="' + 'vrm-' + (parseInt(rowlength) + 1) + '" type="radio" value="UK" checked>' +
    '<label class="govuk-label govuk-radios__label govuk-!-padding-right-0 govuk-!-padding-left-1" for="changed-name"> UK</label>' +
    '</div>' +
    '<div class="govuk-radios govuk-radios--inline ">' +
    '<div class="govuk-radios__item govuk-!-margin-right-0">' +
    '<input class="govuk-radios__input" id="changed-name" name="' + 'vrm-' + (parseInt(rowlength) + 1) + '" type="radio" value="Non-UK" >' +
    '<label class="govuk-label govuk-radios__label govuk-!-padding-right-0 govuk-!-padding-left-1" for="changed-name"> Non-Uk</label>' +
    '</div>' +
    '</td>' +
    '<td class="govuk-table__cell govuk-!-padding-top-3"><a href="javascript:void(0)" id="remove">Remove</a></td>' + '</tr>'

  if (rowlength == 1) {
    $('#mytable thead>tr').remove();
    $('#mytable thead').append(newHead);
  }
  $('#table tbody tr:last').clone().insertAfter('#table tbody tr:last');
  $('#mytable tbody>tr').last().after(newRow);

});

$(document).on('click', '.remove-vehicle', function () {
  $(this).closest('.govuk-form-group').remove();
  return false;
});
$(".add-future-crossing").click(function () {
  $(this).css("display", "none");
  $(this).prev('span').css("display", "block");
  $(this).parent('td').prev('td').find('.future-crossing').css("display", "block");
})

$('.add-multiple-future').click(function () {
  let newRow = ' <tr class="govuk-table__row">' +
    '<td scope="row" class="govuk-table__header govuk-!-padding-top-3">Future crossings</td>' +
    '<td class="govuk-table__cell">' +
    '<div class="govuk-form-group select-box govuk-!-margin-bottom-0">' +
    '<label class="govuk-label govuk-!-margin-bottom-0" for="trips">' +
    '<select class="govuk-select govuk-!-margin-right-2 " id="sort" name="trips">' +
    '<option value="1" selected>1</option>' +
    '<option value="2">2</option>' +
    '<option value="3">3</option>' +
    '<option value="4">4</option>' +
    ' </select></label></div>' + '</td>' +
    '<td id="trip-amt" class="govuk-table__cell govuk-!-padding-top-3">£2.50</td>' + '</tr>'
  $(this).parent('div').prev('table').find('tbody>tr').last().after(newRow);
  $(this).hide();
})

$(".future-crossing").change(function (e) {
  let val = (e.target.value * 2.5).toFixed(2);
  $(this).parent('label').parent('div').parent('td').next('td').text("£" + val)
  $("#amount").val($.fn.totalSum());
})

$.fn.totalSum = () => {
  let sum = 0;
  $(".crossing-amount").each(function () {
    sum += parseFloat($(this).text().split("£")[1]);
  })
  return sum.toFixed(2);
}

//bulk-upload
$(".bulk-upload-btn").click(() => {
  $.fn.redirectPage(`one-off-payment/${version}/bulk-upload`);
})

$(".upload-find-vehicle").click(() => {
  $.fn.redirectPage(`one-off-payment/${version}/upload-edit-vehicles`);
})

$(".bulk-vehicle-confirm").click(() => {
  $.fn.redirectPage(`one-off-payment/v1.1/bulk-vehicle-confirm`);
})
$("[name='no-of-vehicles']").change(() => {
  $(".number-of-vehicles").prop("disabled", false);
})

$("[name='make-oneoff-no-of-vehicles']").change(() => {
  $(".make-oneoff-number-of-vehicles").prop("disabled", false);
})

$("[name='vrm']").click(() => {
  $("[name='vrm']").val("LO62 NRO");
});
$("[id='vrn']").click(() => {
  $("[id='vrn']").val("LO62 NRO");
});
$("[id='plateSubmit']").mouseover(() => {
  $("[id='vrn']").val("LO62 NRO");
});

$(".resendpassword").click(() => {
  let radioVal = $("[name='selectlink']:checked").val();
  if (radioVal === "emailmessage") {
      $.fn.redirectPage("email-password");
  } else if (radioVal === "textmessage") {
      $.fn.redirectPage("text-password");
  } else if (radioVal === "postmessage") {
      $.fn.redirectPage("post-password");
  }
});

