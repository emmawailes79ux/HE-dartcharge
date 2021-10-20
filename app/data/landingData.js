exports.chargeListHead = [
  "Type of vehicle",
  "One-off payment",
  "PayG Service",
  "Pre-pay Accounts",
];

exports.chargeList = [
  {
    title: "Motorcycles, mopeds, quad bikes",
    oneOff: "Free",
    payG: "Free",
    prePay: "Free",
  },
  {
    title: "Cars, motorhomes, minibuses",
    oneOff: "£2.50",
    payG: "£2.50",
    prePay: "£2.00",
  },
  {
    title: "Vehicles with 2 axles",
    oneOff: "£3.00",
    payG: "£3.00",
    prePay: "£2.63",
  },
  {
    title: "Vehicles with more than 2 axles",
    oneOff: "£6.00 ",
    payG: "£6.00 ",
    prePay: "£5.19 ",
  },
];

exports.vehicleList = [
  { 'head':"Registration number", 'value':'LO62 NRO', 'class':'govuk-!-font-weight-bold'},
   {'head':"Class", 'value': 'B', 'class':''},
   {'head': "Make", 'value':'AUDI' , 'class':''},
   {'head': "Model", 'value':'TT FSI' , 'class':''},
   {'head': "Colour", 'value':'Black' , 'class':''},
 ];

 exports.paymentConfirmhead = [
   "Crossings", "No.Trips", "Amount"
 ]
 exports.crossingList = [
   {cross: "Payable Crossings", amount:"£ 5.00"},
   {cross: "Future Crossings", amount:""}

 ]
 exports.vehicles = [
//    {
//   vrm:'LO61 NRO'
// },{vrm:'LO62 NRO'},
{vrm:'LO63 NRO'}]