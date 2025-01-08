var billvalue = 275;
var tipPecent = billvalue >= 50 && billvalue <= 300 ? 15 : 20;
var billTip = billvalue * (tipPecent / 100);

var billTotal = billvalue + billTip;

console.log("The bill was "+billvalue+" the tip was "+billTip+", and the total value "+billTotal)