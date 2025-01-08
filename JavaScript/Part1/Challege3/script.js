var dolphinsScore = [97,112,101];
var koaleScore = [109,95,123];


var sumdolphins = 0;
for(let i = 0; i < dolphinsScore.length;i++){
    sumdolphins += dolphinsScore[i];
}
var dolphinsAVG = sumdolphins / dolphinsScore.length;

var sumKoale = 0;
for(let i = 0; i < koaleScore.length;i++){
    sumKoale += koaleScore[i];
}
var koaleAVG = sumKoale / koaleScore.length;

console.log("AVG Dolphins is :"+dolphinsAVG);
console.log("AVG Koela is :"+koaleAVG);
var dolphinsFlag = dolphinsAVG >= 100 ? true : false;
var koaleFlag = koaleAVG >= 100 ? true : false;
if(dolphinsAVG == koaleAVG && dolphinsFlag == true && koaleFlag == false){
    console.log("Draw");
}
else if (dolphinsAVG > koaleAVG && dolphinsFlag == true){
    console.log("Dolphins Win");
}
else if(koaleAVG > dolphinsAVG && koaleFlag == true){
    console.log("Koale Win");
}
else{
    console.log("No team Win");
}