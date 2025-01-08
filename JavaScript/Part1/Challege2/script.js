var markMass = 95;
var johnMass = 85;
var massHeight = 1.88;
var joinHeight = 1.76;

var markBMI = (markMass/ Math.pow(massHeight,2));
var joinkBMI = (johnMass/ Math.pow(joinHeight,2));

var markHigherBMI = false;
console.log("Mark BMI is :" + markBMI);
console.log("Joihn BMI is :" + joinkBMI);

if(markHigherBMI){
    console.log("Mark's BMI ("+markBMI+")"+" is higher than John ("+ joinkBMI+") !");
}
else{
    console.log("John's BMI ("+joinkBMI+")"+" is higher than mark ("+ markBMI+") !");
}