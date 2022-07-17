var names=prompt("enter your name")
var weight1=prompt("enter your weight")
var height1=prompt("enter your weight in decimals")

function bmiCalculator(weight,height){
   
    var bmi=Math.round(weight/Math.pow(height,2))
    //Math.pow
    return bmi

}
var result=bmiCalculator(weight1,height1);
console.log("your bmi is "+result)
alert(names+" your BMI is "+result)
var names=prompt("enter your name")
var weight1=prompt("enter your weight")
var height1=prompt("enter your weight in decimals")

function bmiCalculator(weight,height){
   
    var bmi=Math.round(weight/Math.pow(height,2))
    //Math.pow
    return bmi

}
var result=bmiCalculator(weight1,height1);
console.log("your bmi is "+result)
alert(names+" your BMI is "+result)


//function getMilk(cost) {
  //  var bottles = Math.floor(cost/3)
   // console.log(bottles)
//}
//getMilk(16)//

//function timeLeft(age) {
  //  var age = (90-age);
  //  var noOfDays = age * 365;
   // var noOfMonths = age * 12;
  //  var noOfWeeks = age * 52;
  //  console.log(noOfDays + "days", noOfWeeks + "weeks", noOfMonths + "months")
//}
//timeLeft(27)

//function loveCalc(){
  //  var name1 = prompt("enter your name");
  //  var name2 = prompt("enter your lover's name");
    //var loveMatch = Math.random()*100;
    //var loveMatch = Math.floor(loveMatch);
    //alert("Your love percentage is" + loveMatch);
   // }
   // loveCalc();


/*var love=prompt("what is your name");
var loveCalc=Math.random(love)*100;
loveCalc=Math.floor(loveCalc);
alert("your love percentage is" + loveCalc);

var loveCalculator= function() {
    prompt ("What is your name?");
    prompt ("What is the potential lover's name?");
    return alert(" Your relationship has a " +(Math.floor((Math.random()*100 + 1)) + "%  chance of succeeding"));
}
loveCalculator();
var names=prompt("enter your name")
var weight1=prompt("enter your weight")
var height1=prompt("enter your weight in decimals")

function bmiCalculator(weight,height){
   
    var bmi=Math.round(weight/Math.pow(height,2))
    //Math.pow
    return bmi

}
var result=bmiCalculator(weight1,height1);
console.log("your bmi is "+result)
alert(names+" your BMI is "+result)
  


var count=1;
var output=[];
function fizzBuzz(){
  
   if((count % 3 === 0 && count% 5 === 0 )){
       output.push("fizzbuzz")
   }else if(count % 3 ===0){
       output.push("fizz")
   }
       
    else if(count% 5 === 0){
        output.push("buzz")
    }
    else{
        output.push(count)
    }
    
    count++;
  console.log(output)
     }
fizzBuzz();








