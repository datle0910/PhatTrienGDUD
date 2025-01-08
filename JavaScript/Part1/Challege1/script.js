var markMass = 78;
var johnMass = 92;
var massHeight = 1.69;
var joinHeight = 1.95;

var markBMI = (markMass/ Math.pow(massHeight,2));
var joinkBMI = (johnMass/ Math.pow(joinHeight,2));

var markHigherBMI = markBMI > joinkBMI ? true : false;
console.log(markHigherBMI);