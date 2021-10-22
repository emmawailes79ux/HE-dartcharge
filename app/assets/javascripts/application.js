/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info("GOV.UK Prototype Kit - do not use for production");
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll();

  $("[name='select-account']").change(function () {
    $(".account-type").prop("disabled", false);
  });

  $("#navigation li:last").addClass("welcomemenu");

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

  $.fn.slideToTop = () => {
    $("html, body").animate({
      scrollTop: 0
    }, "slow");
  };

  $.fn.goBack = () => {
    window.history.back();
  };

  $(".redirectLanding").click(function () {
    $.fn.redirectPage("landing");
  });

  $(".create-acct").click(function () {
    $.fn.redirectPage("create-account");
  });

  $(".send-code").click(function () {
    $.fn.redirectPage("create-account/check-code");
  });

  $(".email-verification").click(function () {
    $.fn.redirectPage("create-account/verification-confirmation");
  });

  $(".confirm-verification").click(function () {
    $.fn.redirectPage("create-account/step-2/select-account");
  });

  $(".account-type").click(function () {
    let accoutTypeVal = $("[name='select-account']:checked").val();
    if (accoutTypeVal === "perosnal-account") {
      $.fn.redirectPage("create-account/step-2/personal-account-type");
    }
  });

  $(".prsl-acct-type").click(function () {
    let personalAccountType = $("[name='personal-account-type']:checked").val();

    if (personalAccountType === "pre-pay") {
      url = "pre-pay/prerequisites";
      $.fn.redirectPage(`create-account/step-2/${url}`);
    }
    // if (personalAccountType === 'payg') {
    //   url = 'payg/prerequisites';
    //   $.fn.redirectPage(`create-account/step-2/${url}`);
    // }
  });

  $(".prereq").click(function () {
    $.fn.redirectPage("create-account/step-2/pre-pay/user-info");
  });

  $(".user-info").click(function () {
    $.fn.redirectPage("create-account/step-2/pre-pay/initial-payment");
  });

  $(".initial-payment-next").click(function () {
    $.fn.redirectPage("create-account/step-2/pre-pay/done");
  });

  $(".payg-prereq").click(function () {
    $.fn.redirectPage("create-account/step-2/payg/done");
  });

  $(".redirectStep3").click(function () {
    $.fn.redirectPage("create-account/step-3/vehicle-register");
  });

  $(".vehicle_register").click(function () {
    $.fn.redirectPage("create-account/step-3/vehicle-register");
  });

  $(".vehicle_details").click(function () {
    $.fn.redirectPage("create-account/step-3/vehicle-details");
  });

  $(".add_vehicle").click(function () {
    $.fn.redirectPage("create-account/step-3/step-3-done");
  });

  $(".payments").click(function () {
    $.fn.redirectPage("create-account/step-4/payments");
  });

  $(".confrim-payment").click(function () {
    $.fn.redirectPage("create-account/step-4/confirm-payment");
  });

  $(".payment_done").click(function () {
    $.fn.redirectPage("create-account/step-4/step-4-done");
  });

  $(".govuk-back-link").click(function () {
    $.fn.goBack();
  });

  $("#login-btn").click(function () {
    $.fn.redirectPage("login");
  });

  $(".todashboard").click(function () {
    $.fn.redirectPage("dashboard");
  });

  // $(".multiple-vehicle").click(function () {
  //   $.fn.redirectPage("one-off-payment/payment-info/1");
  // });

  $(".multiple-vehicle").click(function () {
    $.fn.redirectPage("one-off-payment/payment-info");
  });

  $("[name='selectlink']").change(() => {
    $(".landingNxtBtn").prop("disabled", false);
  });

  $(".landingNxtBtn").click(() => {
    let radioVal = $("[name='selectlink']:checked").val();

    if (radioVal === "pcn") {
      document.location.href =
        "https://dartford-crossing-charge.herokuapp.com/demo/flow1";
    } else if (radioVal === "create-account") {

      $.fn.redirectPage("create-account");

    } else if (radioVal === "make-oneoff-payment") {

      // $.fn.redirectPage("one-off-payment/find-vehicle");
      $.fn.redirectPage("one-off-payment/confirm-vehicle-details");

    }
  });
  $("[name='vehicle-flow-type']").change(() => {
    $(".vehicle-flow").prop("disabled", false);
  });

  $(".vehicle-flow").click(() => {
    let radioVal = $("[name='vehicle-flow-type']:checked").val();
    console.log(radioVal);
    if (radioVal === "single") {
      $.fn.redirectPage("one-off-payment/find-vehicle");
    } else if (radioVal === "multiple") {
      $.fn.redirectPage("one-off-payment/confirm-vehicle-details");
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
    $.fn.redirectPage("one-off-payment/find-vehicle");
  } else if (makePayment === "no") {
    $.fn.redirectPage("one-off-payment/late-payment");
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
    $.fn.redirectPage("one-off-payment/payment-info-single");
  } else if (makePayment === "penalty") {
    document.location.href =
      "https://dartford-crossing-charge.herokuapp.com/demo/flow1";
  }
});
$(".find-vehicle").click(() => {
  let inputVal = $("[name='vrm']").val();
  if (inputVal === "LO62 NRO") {
    // $.fn.redirectPage('one-off-payment/vehicle-details');
    $.fn.redirectPage("one-off-payment/late-payment2");
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
    $.fn.redirectPage("one-off-payment/payment-options");
  } else {
    $(".email-error").css("display", "block");
    $(".email-address").parent().addClass("govuk-form-group--error");
    $(".email-address").addClass("govuk-input--error");
    $(".error-summary").css("display", "block");
    $.fn.slideToTop();
  }
});
$(".proceed-to-pay-continue").click(() => {
  $.fn.redirectPage("one-off-payment/payment-info-confirm");

});
$("[name='option-payment']").change(() => {
  $(".paymentoptionBtn").prop("disabled", false);
});

$(".paymentoptionBtn").click(() => {
  let radioVal = $("[name='option-payment']:checked").val();

  if (radioVal === "card-payment") {
    $.fn.redirectPage("one-off-payment/payment");
  } else if (radioVal === "paypal") {
    $.fn.redirectPage("one-off-payment/paypal");
  } else {
    $.fn.redirectPage("one-off-payment/bank-transfer");
  }
});

$("[name='vehilce-crossinfo']").change(() => {
  $(".vehicle-flowtype").prop("disabled", false);
});

$(".vehicle-flowtype").click(() => {
  let radioVal = $("[name='vehilce-crossinfo']:checked").val();

  if (radioVal === "resolve-penalty") {
    $.fn.redirectPage("one-off-payment/late-payment");
  } else if (radioVal === "pay-crossing") {
    $.fn.redirectPage("one-off-payment/vehicle-payinfo");
  }
});

$("[name='pay-crossinfo']").change(() => {
  $(".vehicle-crossing").prop("disabled", false);
});

$(".vehicle-crossing").click(() => {
  let radioVal = $("[name='pay-crossinfo']:checked").val();

  if (radioVal === "pay-mcrossing") {
    $.fn.redirectPage("one-off-payment/vehicle-crossmade");
  } else if (radioVal === "pay-fcrossing") {
    $.fn.redirectPage("one-off-payment/find-vehicle");
  }
});

$("[name='pay-madecross']").change(() => {
  $(".vehicle-madecross").prop("disabled", false);
});

$(".vehicle-madecross").click(() => {
  let radioVal = $("[name='pay-madecross']:checked").val();

  if (radioVal === "yes") {
    $.fn.redirectPage("one-off-payment/find-vehicle");
  } else if (radioVal === "no") {
    $.fn.redirectPage("one-off-payment/late-payment");
  }
});

$(".successNxt").click(function () {
  let SuccessNext = $("[name='successnextoption']:checked").val();
  if (SuccessNext === "create-account") {
    $.fn.redirectPage("one-off-payment/create-account");
  } else if (SuccessNext === "vrm-notifi") {
    $.fn.redirectPage("one-off-payment/notification");
  } else if (SuccessNext === "finish") {
    $.fn.redirectPage("home");
  }
});

//Make one off payment create account

$("[name='select-account']").change(function () {
  $(".oneoff-account-type").prop("disabled", false);
});
$(".oneoff-account-type").click(function () {
  let accoutTypeVal = $("[name='select-account']:checked").val();
  if (accoutTypeVal === "perosnal-account") {
    $.fn.redirectPage("one-off-payment/personal-type");
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
    $.fn.redirectPage("one-off-payment/account-account-success");
  } else if (radioVal === "paypal") {
    $.fn.redirectPage("one-off-payment/account-create-done");
  } else {
    $.fn.redirectPage("one-off-payment/account-create-done");
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
  $.fn.redirectPage("one-off-payment/payment-failure");
});

// One off payment's payment page validation

//muliple vehicle flow

$(".find-vehicle-multiple-flow").click(() => {
  $.fn.redirectPage("one-off-payment/multiple-vehicle-details");
})

$(".add-vehicle-multiple-flow").click(() => {
  var newHead = '<tr class="govuk-table__row">' +
    '<th scope="col" class="govuk-table__header">Registration number</th>' +
    
    '<th scope="col" class="govuk-table__header">Action</th>' + '<tr>';
  var newRow = '<tr class="govuk-table__row">' +
    '<td scope="row" class="govuk-table__header">' +
    '<div class="govuk-form-group govuk-!-margin-bottom-0"> <input class="govuk-input govuk-input" id="vehicle-no" name="one-quarter" type="text"></div></td>'
    +
    '<td class="govuk-table__cell"> </td>' + '</tr>'
  // '<td class="govuk-table__cell"><a href="javascript:void(0)" id="remove">Remove</a></td>'

  $('#mytable thead>tr').remove();
  $('#mytable thead').append(newHead);
  var vehicleNo = $("#vehicle-no").val();
  var rowCount = $('#mytable tbody>tr').length;
  var td1 = 
    '<div class="govuk-radios govuk-radios--inline ">' +
    '<div class="govuk-radios__item govuk-!-margin-right-0">' +
    '<input class="govuk-radios__input" id="changed-name" name="row' + rowCount + '" type="radio" value="Non-UK">' +
    '<label class="govuk-label govuk-radios__label govuk-!-padding-right-0 govuk-!-padding-left-1" for="changed-name"> Non-UK</label>' +
    '</div>' +
    '</td>' + '<td class="govuk-table__cell"><a href="javascript:void(0)" id="remove">Remove</a></td>'

  if (length == 1) {
    $('#mytable tbody>tr').remove();
    var markup = '<tr id="row' + rowCount + '" class="govuk-table__row">' + '<td class=govuk-table__header>' + vehicleNo + "</td>" + td1 + '</tr>'
    $('#mytable tbody').append(markup);
  } else {
    $('#mytable tbody>tr').last().remove();
    var markup = '<tr class="govuk-table__row">' + '<td class=govuk-table__header>' + vehicleNo + "</td>" + td1 + '</tr>'
    $('#mytable tbody').append(markup);
  }

  $('#mytable tbody>tr').last().after(newRow);
});
//remove
$(document).on('click', '#remove', function () {
  var rowlength = $('#mytable tbody>tr').length;
  if (rowlength == 2) {
    var newHead = '<tr class="govuk-table__row">' +
      '<th scope="col" class="govuk-table__header">Registration number</th>' +
      '<th scope="col" class="govuk-table__header">Country of registration</th>' + '<tr>';
    $('#mytable thead>tr').remove();
    $('#mytable thead').append(newHead);
  }
  $(this).closest('tr').remove();
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

$("[name='trips-future-crossing']").change((e)=> {
  let val = (e.target.value * 2.5).toFixed(2);
  $("#future-amt").text("£" + val);
  let tripAmt = $("#trip-amt").length ? $("#trip-amt").html().split("£")[1] : 0 ;
  $("#amount").val((parseFloat(val) + parseFloat(tripAmt)).toFixed(2));
})

$("[name='trips']").change((e)=> {
  let val = (e.target.value * 2.5).toFixed(2);
  $("#trip-amt").text("£" + val);
  let futureAmt = $("#future-amt").length ? $("#future-amt").html().split("£")[1] : 0;
  $("#amount").val((parseFloat(val) + parseFloat(futureAmt)).toFixed(2));
})

// On click of Add button add select box for future crossing
$("#add-future-crossing").click(function(){
  $(this).css("display", "none");
  $("#future-crossing-selectbox").css("display", "block");
  $("#amt").css("display", "block");
})
