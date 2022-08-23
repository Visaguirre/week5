//accidentally did sample

let itemPrice = 1.00;
let moneyInWallet = 20;
let numberOfFriends = 3;
let myAge = 33;
const firstName = "Johhny";
const lastName = "Good";
const middleInitial = "B"

let currentWalletAmount = (moneyInWallet - itemPrice);
    console.log ( "My networth is " + currentWalletAmount + " dollars. ");

 let friendGrowth = (numberOfFriends / myAge)
    console.log("Whoo Hoo, I made " + friendGrowth + " friends this year!"); //this is generous

let fullName = (firstName + " " + middleInitial +" "+ lastName)
    console.log(fullName);
//Q1

let ages = [3, 9,23,64,2,8,28,93];

//Q1a
    console.log (ages[ages.length-1]-ages[0])
//Q1b
 ages.unshift(60);
    
    console.log (ages[ages.length-1]-ages[0])

//Q1c

    let sum = 0;

   ages.forEach(element =>{
    sum+=element;
  });

let average = (sum/ages.length);
        
    console.log(average);

//Q2

let names = ["Sam","Tommy","Tim","Sally","Buck","Bob"]
//Q2a

let avg = names.join('').length / names.length;
console.log(avg)

//Q2b
console.log(names.join(' '));

//Q3
/*How do you access the last element of an array?

array.length-1
//Q4
How do you access the first element of an array?

array[0]

*/
//Q5

function namesLengthCount(array){

    let namesLength = [];

    for(let i=0; i<array.length;i++){
        namesLength.push(array[i].length)
    }


return namesLength
}
console.log(namesLengthCount(names))

let namesValue = namesLengthCount(names)

//Q6
let namesSum = 0;
   namesValue.forEach(item =>{
    namesSum+=item;
    
  });
let avgNames =  (namesSum/names.length)

console.log(namesSum)
console.log(avgNames)

//Q7

let sayHello = (a, b) => {
    let result ='';
    for (let i = 0; i < b; i++) {
   result += a;
  
    }
    return result;
};
console.log(sayHello('Hello',4))


//Q8

function wholeName(firstName, lastName){

    let fullName = (firstName + " " + lastName)
    console.log(fullName)
}

wholeName("Tiny","Tim")


//9
let numArray = [5,10,15,75]
function sumArray(numArray){ 
    let sum = 0;
 
     numArray.forEach(element =>{
      sum+=element;
    });
    if (sum >100)
    console.log(true)
}


sumArray(numArray)
// Q10
 let ages2 = [5, 5,15,60]; 

function avgArray (ages2)
{ 
   let sum = 0;

    ages2.forEach(element =>{
     sum+=element;
   });
 
 let average = (sum/ages2.length);
         
     console.log(average);
}

avgArray(ages2)

//Q11 help

let firstArray =[8,8,8,8]
let secondArray =[7,7,7,7]

function isItGreaterThan(firstArray,secondArray){
    let sum1 = 0;

    firstArray.forEach(element =>{
     sum1+=element;
   });
 
 let firstAverage = (sum1/firstArray.length);

 let sum2 = 0;

    secondArray.forEach(element =>{
     sum2+=element;
   });
 
 let secondAverage = (sum2/secondArray.length);

 if (firstAverage > secondAverage){
    console.log(true);
    return(true);
  
    
 }
}
isItGreaterThan(firstArray,secondArray);

//Q12

// corrected from video by adding return and else statement
function willBuyDrink(){
  let isHotOutside = true;
  let moneyinPocket = 10
  
if (isHotOutside && moneyinPocket > 10.50){
console.log(true)
return true;
} else {
console.log(false)
return false;

}
}
willBuyDrink()


function canWePlay(){
  let timeAvailable = 30;
  let isTheWeatherNice = true;
  if ( isTheWeatherNice && timeAvailable > 20){
  console.log(true)
  return true;
  } else {
    console.log(false)
    return false;
  }
  }

  canWePlay()