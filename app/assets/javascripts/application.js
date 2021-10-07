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
  
  $("[name='personal-account-type']").change(function () {
    
    $(".prsl-acct-type").prop("disabled", false);
  })

  $("[name='initial-payment']").change(function () {
      
     if ( this.value === "auto-topup" )  {

        $("#auto-topup-options").css("display", "block");
        $("#manual-topup-option").css("display", "none");

     } else if(this.value === "manual-topup") {

        $("#auto-topup-options").css("display", "none");
        $("#manual-topup-option").css("display", "block");
        
     }
      
      
  })

  $.fn.redirectPage = (uri) => {
    window.location.href = `/${uri}`;
  }

  $.fn.goBack = () => {
    window.history.back();
  }

  $(".redirectLanding").click(function(){
    $.fn.redirectPage('landing');
  });

  $(".create-acct").click(function(){
    $.fn.redirectPage('create-account');
  });
  
  $(".send-code").click(function(){
    $.fn.redirectPage('create-account/check-code');
  });
  
  $(".email-verification").click(function(){
    $.fn.redirectPage('create-account/verification-confirmation');
  });
  
  $(".confirm-verification").click(function(){
    $.fn.redirectPage('create-account/step-2/select-account');
  });
 
  $(".account-type").click(function(){
    let accoutTypeVal = $("[name='select-account']:checked").val();
    if( accoutTypeVal === 'perosnal-account') {
      $.fn.redirectPage('create-account/step-2/personal-account-type');
    }
    
  });
 
  $(".prsl-acct-type").click(function(){
    let personalAccountType = $("[name='personal-account-type']:checked").val();
    
    if(personalAccountType === 'pre-pay') {
      url = 'pre-pay/prerequisites';
      $.fn.redirectPage(`create-account/step-2/${url}`);
    }
    
    
  });
 
  $(".prereq").click(function(){
    $.fn.redirectPage('create-account/step-2/pre-pay/user-info');
  });
  
  $(".user-info").click(function(){
    $.fn.redirectPage('create-account/step-2/pre-pay/initial-payment');
  });
  
  $(".initial-payment-next").click(function(){
    $.fn.redirectPage('create-account/step-2/pre-pay/done');
  });
  
  $(".payg-prereq").click(function(){
    $.fn.redirectPage('create-account/step-2/payg/done');
  });
 
  $(".redirectStep3").click(function(){
    $.fn.redirectPage('create-account/step-3/vehicle-register');
  });
  
  $(".vehicle_register").click(function(){
    $.fn.redirectPage('create-account/step-3/vehicle-register');
  });
  
  $(".vehicle_details").click(function(){
    $.fn.redirectPage('create-account/step-3/vehicle-details');
  });
  
  $(".add_vehicle").click(function(){
    $.fn.redirectPage('create-account/step-3/step-3-done');
  });
  
  $(".payments").click(function(){
    $.fn.redirectPage('create-account/step-4/payments');
  });
  
  $(".payment_done").click(function(){
    $.fn.redirectPage('create-account/step-4/step-4-done');
  });

  $(".govuk-back-link").click(function(){
    $.fn.goBack();
  });

  $("#login-btn").click(function(){
    $.fn.redirectPage('login');
  });

  $(".todashboard").click(function(){
    $.fn.redirectPage('dashboard');
  });

  $("[name='selectlink']").change(() => {
    $(".landingNxtBtn").prop("disabled", false);
  })

 $(".landingNxtBtn").click(() => {
  let radioVal = $("[name='selectlink']:checked").val();

  if(radioVal === 'pcn') {

    document.location.href="https://dartford-crossing-charge.herokuapp.com/demo/flow1";

  } else if(radioVal === 'create-account') {

    $.fn.redirectPage('create-account');

  }
 });


  $("#login-submit").on("submit", function(e){
    e.preventDefault();
    console.log("working");
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if( username == "" || username == null ){
      document.getElementById("user-name-error").innerHTML = "Username is required";
    }
    if ( password == "" || password == null ){
      document.getElementById("password-error").innerHTML = "Password is required";
    }
  });

  
})
